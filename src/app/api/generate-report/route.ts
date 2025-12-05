import { NextResponse } from 'next/server';
import { getGeminiClient } from '@/lib/gemini';
import { getLegalInfo } from '@/lib/report-generator';

const genAI = getGeminiClient();

export async function POST(req: Request) {
    try {
        const { jurisdiction, text, reasoning_ar, severity_score } = await req.json();

        // Get detailed legal information for the jurisdiction
        const legalInfo = getLegalInfo(jurisdiction);

        // For Syrian reports - use simplified template
        if (jurisdiction === 'Syria') {
            // Use Arabic Hijri calendar for date
            const currentDate = new Date().toLocaleDateString('ar-SA-u-ca-islamic', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const syrianPrompt = `أنت نموذج ذكاء صناعي متخصص في إنتاج تقارير قانونية عربية مختصرة للنيابة العامة السورية.

**المهمة:**
إنتاج إخبار قانوني مختصر وسلس للنيابة العامة، لا يتجاوز صفحة واحدة، بأسلوب سردي متدفق.

**البيانات المتوفرة:**
- النص المخالف: "${text}"
- التحليل: ${reasoning_ar || "يتضمن خطاب كراهية وتحريض"}
- درجة الخطورة: ${severity_score}/10
- التاريخ: ${currentDate}

**القواعد الإلزامية:**

1. **الأسلوب:**
   - صياغة سردية انسيابية (لا فقرات منفصلة)
   - لا تستخدم خطوط الفصل (___)
   - لا تستخدم أي تنسيق markdown
   - نص عادي plain text فقط
   - مختصر جداً - صفحة واحدة كحد أقصى

2. **المصطلحات:**
   - استخدم "إخبار" وليس "بلاغ"
   - "النيابة العامة" كجهة مختصة
   - لغة قانونية رسمية مختصرة

3. **المواد القانونية:**
   - المادة /25/ أصول محاكمات جزائية
   - المادة /287/ عقوبات (النعرات الطائفية)
   - المادة /31/ قانون الجرائم الإلكترونية

**الهيكل المطلوب (سردي متدفق):**

${currentDate}

إلى السيد النائب العام الموقر

الموضوع: إخبار عن خطاب كراهية وتحريض إلكتروني

تحية طيبة وبعد،

عملاً بأحكام المادة /25/ من قانون أصول المحاكمات الجزائية، أتقدم بهذا الإخبار للإبلاغ عن محتوى رقمي يشكل جريمة خطاب كراهية وتحريض.

${text ? `النص المخالف: "${text}"` : 'المحتوى المخالف: محتوى مرئي (صورة أو فيديو)'}

وبعد التحليل القانوني تبيّن أن هذا المحتوى ${reasoning_ar || "يتضمن خطاب كراهية ويحرض على العنف"}، ويشكل مخالفة صريحة للمادة /287/ من قانون العقوبات السوري (التحريض على النعرات الطائفية أو العنصرية)، وللمادة /31/ من القانون رقم 20 لعام 2023 الخاص بالجرائم الإلكترونية.

معلومات المنشور:
- اسم الحساب: [يُرجى إضافة اسم الحساب]
- رابط المنشور: [يُرجى إضافة رابط المنشور]

لذلك ألتمس من عدالتكم التفضل بالتحقيق في هذا الإخبار واتخاذ الإجراءات القانونية اللازمة بحق مرتكبي الفعل، والأمر بإزالة المحتوى المخالف من المنصة الإلكترونية.

تفضلوا بقبول فائق الاحترام والتقدير.

مقدم الإخبار: [الاسم]

ملاحظة: هذا التقرير مُنتج آلياً ويتطلب مراجعة قانونية قبل التقديم الرسمي.

**تعليمات نهائية:**
- اكتب التقرير بنفس الأسلوب السردي المتدفق أعلاه
- التاريخ يجب أن يكون بالأشهر الهجرية العربية (مثلاً: ٢٦ جمادى الأولى ١٤٤٦)
- إذا كان النص موجوداً، اكتبه بالضبط كما هو بعد "النص المخالف:"
- إذا لم يكن هناك نص (محتوى مرئي)، اكتب "محتوى مرئي (صورة أو فيديو)"
- لا تذكر درجة الخطورة ${severity_score} في التقرير أبداً
- اجعل قسم "معلومات المنشور" في سطرين منفصلين
- اجعل جملة "لذلك ألتمس..." في سطر منفصل
- لا تستخدم خطوط فصل أو عناوين فرعية
- اجعله مختصراً جداً
- لا تتجاوز صفحة واحدة
- نص عادي بدون تنسيق`;

            const result = await genAI.generateContent('gemini-2.0-flash', [syrianPrompt], {
                generationConfig: {
                    temperature: 0.2,
                    maxOutputTokens: 2000,
                }
            });
            const report = result.response.text();

            return NextResponse.json({
                report,
                legalInfo: {
                    citation: 'المادة 287 من قانون العقوبات السوري',
                    authority: legalInfo.authority,
                    report_link: legalInfo.report_link
                }
            });
        }

        // For other countries - use the previous comprehensive approach
        const langMap: { [key: string]: string } = {
            'ar': 'Arabic',
            'de': 'German',
            'tr': 'Turkish',
            'fr': 'French',
            'en': 'English',
            'nl': 'Dutch',
            'sv': 'Swedish',
            'es': 'Spanish'
        };

        const targetLanguage = langMap[legalInfo.lang] || 'English';
        const currentDate = new Date().toLocaleDateString(legalInfo.lang === 'ar' ? 'ar-EG' : 'en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const internationalPrompt = `You are an expert legal consultant specializing in hate speech laws in ${jurisdiction}.

**CRITICAL INSTRUCTIONS:**
1. Write the ENTIRE report in ${targetLanguage} ONLY
2. Use plain text format - NO markdown formatting (no **, #, etc.)
3. Keep the report CONCISE and PROFESSIONAL
4. Follow the exact structure below

**Case Details:**
- Content: \"${text}\"
- Analysis: ${reasoning_ar}
- Severity: ${severity_score}/10
- Jurisdiction: ${jurisdiction}
- Law: ${legalInfo.citation}
- Authority: ${legalInfo.authority}
- Date: ${currentDate}

**REQUIRED REPORT STRUCTURE:**

[Date in target language format]
À: ${legalInfo.authority}

INFORMATIONS SUR LE PLAIGNANT
[Use appropriate translation: "COMPLAINANT INFORMATION" / "INFORMATIONEN ZUM BESCHWERDEFÜHRER" / "معلومات مقدم البلاغ"]
Nom: [Complainant / مقدم البلاغ / Anzeigenerstatter]
Qualité: Observateur de la société civile / Membre du public
[Use appropriate translation: "Capacity: Civil society observer / Member of the public"]

OBJET
[Use appropriate translation: "SUBJECT" / "BETREFF" / "الموضوع"]
Signalement de propos haineux / Incitation à la haine en ligne
[Use appropriate translation: "Report of Hate Speech / Online Incitement"]

INTRODUCTION
[Formal greeting in ${targetLanguage}]

[One paragraph stating the purpose: reporting hate speech content that violates ${legalInfo.citation}]

DESCRIPTION DÉTAILLÉE
[Use appropriate translation: "DETAILED DESCRIPTION" / "DETAILLIERTE BESCHREIBUNG" / "الوصف التفصيلي"]

**Le contenu incriminé:**
[If text exists: Quote the original text EXACTLY: \"${text}\"]
[If text is EMPTY: Write "Contenu vidéo/image (voir description ci-dessous)" or equivalent in ${targetLanguage}]

**Traduction:**
[Only if original text is in different language: Provide translation to ${targetLanguage}]
[If text is empty or already in ${targetLanguage}: SKIP this subsection entirely]

**Analyse:**
[Explain WHY this is hate speech. Use this structure:]
"L'auteur de cette publication incite explicitement à [ACTION] à l'encontre de [TARGET_GROUP]. Ce discours est particulièrement alarmant compte tenu du contexte syrien actuel. En tant que pays émergeant d'un conflit majeur et marqué par de profondes tensions confessionnelles et ethniques, la Syrie est un terrain extrêmement volatile. Une telle incitation présente un risque réel et immédiat de déclencher des violations massives des droits de l'homme et des violences physiques à grande échelle."

[Adapt this to ${targetLanguage} and explain the specific hate speech elements from the analysis: ${reasoning_ar}]

FONDEMENT JURIDIQUE
[Use appropriate translation: "LEGAL BASIS" / "RECHTSGRUNDLAGE" / "الأساس القانوني"]

[Write in ${targetLanguage}:]
This content violates ${legalInfo.citation}.

[Translate to ${targetLanguage}. Examples:]
- French: "Cette publication viole ${legalInfo.citation}."
- German: "Diese Veröffentlichung verstößt gegen ${legalInfo.citation}."
- English: "This post violates ${legalInfo.citation}."
- Dutch: "Deze publicatie schendt ${legalInfo.citation}."
- Swedish: "Detta inlägg bryter mot ${legalInfo.citation}."
- Turkish: "Bu gönderi ${legalInfo.citation} ihlal etmektedir."

INFORMATIONS SUR LE CONTENU SIGNALÉ
[Use appropriate translation: "REPORTED CONTENT INFORMATION" / "INFORMATIONEN ZUM GEMELDETEN INHALT"]
• Nom du compte / Identifiant : [Account Name - to be specified]
• Plateforme : [Platform - to be specified]
• Date de publication : ${currentDate}
• Lien de la publication : [Link - to be specified]
• Preuve (Capture d'écran) : [À joindre / To be attached / Beizufügen]

DEMANDE
[Use appropriate translation: "REQUEST" / "ANTRAG" / "الطلب"]
[Brief paragraph requesting investigation, content removal, and legal action]

[Formal closing in ${targetLanguage}]

---
AVERTISSEMENT / DISCLAIMER
[Write the disclaimer ONCE in ${targetLanguage}:]

Examples for reference:
- French: "Ce rapport a été généré automatiquement à l'aide d'outils d'analyse juridique basés sur l'IA. Bien que l'analyse du contenu et les références juridiques soient exactes, une révision humaine est recommandée avant la soumission officielle. Généré le: ${currentDate}"
- German: "Dieser Bericht wurde automatisch mit KI-gestützten Rechtsanalysetools erstellt. Obwohl die Inhaltsanalyse und Rechtsgrundlagen korrekt sind, wird eine menschliche Überprüfung vor der offiziellen Einreichung empfohlen. Erstellt am: ${currentDate}"
- English: "This report was generated automatically using AI-powered legal analysis tools. While the content analysis and legal references are accurate, human review is recommended for formal submission. Generated on: ${currentDate}"

[Then add screenshot reminder ONCE in ${targetLanguage}:]

Examples for reference:
- French: "IMPORTANT: N'oubliez pas de joindre une capture d'écran de la publication lors du dépôt de ce signalement."
- German: "WICHTIG: Vergessen Sie nicht, beim Einreichen dieser Meldung einen Screenshot der Veröffentlichung beizufügen."
- English: "IMPORTANT: Remember to attach a screenshot of the post when filing this report."

**CRITICAL FINAL CHECKS:**
- Every word must be in ${targetLanguage}
- NO markdown formatting (no **, no #, no bullets with *)
- Text direction: LEFT-TO-RIGHT (LTR) for all languages except Arabic
- Keep it concise (1-2 pages maximum)
- Professional legal tone
- Include all required sections above
- Write disclaimer and screenshot reminder ONLY ONCE each (no duplicates)

Write the complete report now:`;

        const result = await genAI.generateContent('gemini-2.0-flash', [internationalPrompt], {
            generationConfig: {
                temperature: 0.3, // Lower temperature for more consistent, formal output
                maxOutputTokens: 2048,
            }
        });
        const report = result.response.text();

        return NextResponse.json({
            report,
            legalInfo: {
                citation: legalInfo.citation,
                authority: legalInfo.authority,
                report_link: legalInfo.report_link
            }
        });
    } catch (error: any) {
        console.error('Report generation error:', error);
        return NextResponse.json({
            error: 'Failed to generate report',
            details: error.message || String(error)
        }, { status: 500 });
    }
}
