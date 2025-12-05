import { NextRequest, NextResponse } from 'next/server';
import { SchemaType } from '@google/generative-ai';
import { HSIE_SYRIA_SYSTEM_PROMPT } from '@/lib/prompts';
import { getGeminiClient } from '@/lib/gemini';

export async function POST(req: NextRequest) {
    try {
        const { text, image, locale = 'ar' } = await req.json();

        // Map locale to language name for the prompt
        const languageMap: { [key: string]: string } = {
            'ar': 'Arabic',
            'en': 'English',
            'ku': 'Kurdish (Kurmanji)'
        };
        const targetLanguage = languageMap[locale] || 'Arabic';

        // Allow text OR image, or both
        if (!text && !image) {
            return NextResponse.json({ error: 'Text or Image is required' }, { status: 400 });
        }

        const client = getGeminiClient();

        const options = {
            systemInstruction: HSIE_SYRIA_SYSTEM_PROMPT(targetLanguage),
            generationConfig: {
                temperature: 0.1,
                maxOutputTokens: 1024,
                responseMimeType: "application/json",
                responseSchema: {
                    type: SchemaType.OBJECT,
                    properties: {
                        classification: { type: SchemaType.STRING, enum: ["خطاب كراهية", "محتوى غير كاره"] },
                        risk_level: { type: SchemaType.STRING, enum: ["عالٍ", "متوسط", "منخفض", "لا يوجد"] },
                        scores: {
                            type: SchemaType.OBJECT,
                            properties: {
                                intensity: { type: SchemaType.STRING },
                                vulnerability: { type: SchemaType.STRING },
                                context: { type: SchemaType.STRING }
                            },
                            required: ["intensity", "vulnerability", "context"]
                        },
                        target_group: { type: SchemaType.STRING },
                        detected_markers: {
                            type: SchemaType.ARRAY,
                            items: { type: SchemaType.STRING }
                        },
                        rationale: { type: SchemaType.STRING },
                    },
                    required: ["classification", "risk_level", "scores", "detected_markers", "rationale"],
                }
            }
        };

        const promptParts: any[] = [];
        if (text) promptParts.push(text);
        if (image) {
            // image is expected to be base64 string without data prefix, or we strip it
            const base64Data = image.split(',')[1] || image;
            promptParts.push({
                inlineData: {
                    data: base64Data,
                    mimeType: "image/jpeg", // Assuming jpeg or png, Gemini handles standard formats
                },
            });
            promptParts.push("Describe the visual content of the image in the 'image_description' field. Focus on elements relevant to hate speech or violence if present.");
        }

        const result = await client.generateContent('gemini-2.0-flash', promptParts, options);
        const responseText = result.response.text();
        const analysis = JSON.parse(responseText);

        // --- DETERMINISTIC LOGIC OVERRIDE ---
        // Parse scores (e.g., "6/10" -> 6)
        // Parse scores (e.g., "6/10" -> 6, or 6 -> 6)
        const getScore = (val: any) => {
            if (typeof val === 'number') return val;
            if (typeof val === 'string') return parseInt(val.split('/')[0] || "0");
            return 0;
        };
        const intensity = getScore(analysis.scores?.intensity);
        const vulnerability = getScore(analysis.scores?.vulnerability);
        const context = getScore(analysis.scores?.context);

        // Apply strict rules
        let calculatedRisk = "لا يوجد";
        let calculatedClass = "محتوى غير كاره";

        if (intensity >= 6 || vulnerability >= 3) {
            calculatedRisk = "عالٍ";
            calculatedClass = "خطاب كراهية";
        } else if ((intensity >= 3 && intensity <= 5) || (vulnerability >= 2 && vulnerability <= 3)) {
            calculatedRisk = "متوسط";
            calculatedClass = "خطاب كراهية";
        } else if (intensity >= 1 && intensity <= 2) {
            calculatedRisk = "منخفض";
            calculatedClass = "خطاب كراهية";
        }

        // Override AI decision with deterministic logic
        analysis.risk_level = calculatedRisk;
        analysis.classification = calculatedClass;
        // ------------------------------------

        return NextResponse.json(analysis);

    } catch (error: unknown) {
        console.error('Error in /api/classify:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error details:', JSON.stringify(error, null, 2));
        return NextResponse.json({ error: errorMessage || 'Internal Server Error', details: String(error) }, { status: 500 });
    }
}
