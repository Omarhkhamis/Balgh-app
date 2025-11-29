'use client';

import React from 'react';

export default function FAQTab() {
    return (
        <div className="space-y-12">
            {/* Common Mistakes Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-red-600 pr-4">
                    ⚠️ الأخطاء المتكررة في التبليغ
                </h2>
                <div className="space-y-4">
                    {[
                        {
                            mistake: 'التبليغ بدون أدلة كافية',
                            solution: 'احرص على توفير لقطات شاشة واضحة، روابط، وتاريخ النشر'
                        },
                        {
                            mistake: 'الخلط بين الرأي الشخصي وخطاب الكراهية',
                            solution: 'تأكد من وجود تحريض واضح على العنف أو التمييز'
                        },
                        {
                            mistake: 'التبليغ عن محتوى من رسائل خاصة',
                            solution: 'خطاب الكراهية يجب أن يكون علنياً للمتابعة القانونية'
                        },
                        {
                            mistake: 'عدم حفظ الأدلة بشكل آمن',
                            solution: 'استخدم أدوات الأرشفة واحتفظ بنسخ متعددة'
                        },
                        {
                            mistake: 'التبليغ بعد حذف المحتوى بفترة طويلة',
                            solution: 'وثّق فوراً، واستخدم أدوات الأرشفة قبل الحذف'
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 text-3xl">❌</span>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-red-700 mb-2">{item.mistake}</h3>
                                    <p className="text-gray-700 flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>الحل:</strong> {item.solution}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* When is it a Crime Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    ⚖️ متى يكون المحتوى جريمة؟
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Clear Cases */}
                    <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                        <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                            <span>🚫</span>
                            <span>جريمة واضحة</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                'تهديد مباشر بالقتل',
                                'دعوة صريحة للعنف',
                                'تحريض على الإبادة',
                                'نشر بيانات شخصية للإيذاء',
                                'تشجيع على جرائم كراهية'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-red-600 mt-0.5">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Gray Area */}
                    <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                        <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
                            <span>⚠️</span>
                            <span>منطقة رمادية</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                'سخرية قاسية من مجموعة',
                                'تعميمات سلبية واسعة',
                                'نشر شائعات ضارة',
                                'استخدام لغة مسيئة',
                                'محتوى مثير للجدل'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-yellow-600 mt-0.5">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-yellow-900 mt-4 font-medium">
                            💡 يعتمد على السياق والنية
                        </p>
                    </div>

                    {/* Not a Crime */}
                    <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                        <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                            <span>✅</span>
                            <span>ليس جريمة</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                'انتقاد أفكار أو معتقدات',
                                'نقد سياسات حكومية',
                                'نقاش أكاديمي موضوعي',
                                'سخرية غير مسيئة',
                                'تعبير عن رأي مخالف'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-green-600 mt-0.5">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* General FAQs */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    ❓ أسئلة شائعة
                </h2>
                <div className="space-y-4">
                    {[
                        {
                            q: 'هل يمكن التبليغ بشكل مجهول؟',
                            a: 'نعم، يمكنك التبليغ عبر منصتنا بشكل مجهول. لكن للمتابعة القانونية الرسمية، قد تحتاج الجهات المختصة لمعرفة هويتك كشاهد.'
                        },
                        {
                            q: 'ماذا لو كان المحتوى في رسالة خاصة؟',
                            a: 'المحتوى الخاص يصعب متابعته قانونياً إلا إذا كان يشكل تهديداً مباشراً. ننصح بالتبليغ للشرطة مباشرة في حالات التهديد الشخصي.'
                        },
                        {
                            q: 'هل أحتاج محامي للتبليغ؟',
                            a: 'ليس ضرورياً للتبليغ الأولي. لكن إذا تطور الأمر لقضية قانونية، قد تحتاج استشارة محامٍ متخصص في قضايا خطاب الكراهية.'
                        },
                        {
                            q: 'كم يستغرق التحقيق في البلاغ؟',
                            a: 'يختلف حسب الدولة والجهة المختصة. قد يستغرق من أسابيع إلى عدة أشهر. احتفظ برقم البلاغ للمتابعة.'
                        },
                        {
                            q: 'ماذا لو تم حذف المحتوى قبل التبليغ؟',
                            a: 'إذا كنت قد وثّقت المحتوى (لقطة شاشة + أرشفة)، يمكنك التبليغ. الأدلة المحفوظة كافية للمتابعة القانونية.'
                        },
                        {
                            q: 'هل يمكن التبليغ عن محتوى قديم؟',
                            a: 'نعم، لكن الأفضل التبليغ فوراً. بعض القوانين لها مدد تقادم. تحقق من القانون في بلدك.'
                        },
                        {
                            q: 'ماذا يحدث بعد التبليغ؟',
                            a: 'تقوم الجهات المختصة بمراجعة البلاغ، التحقيق في المحتوى، وقد تطلب معلومات إضافية. قد يتم استدعاء الناشر للتحقيق أو اتخاذ إجراءات قانونية.'
                        },
                        {
                            q: 'هل التبليغ يضمن حذف المحتوى؟',
                            a: 'ليس بالضرورة. الحذف يعتمد على سياسات المنصة والقوانين المحلية. لكن التبليغ الرسمي يزيد من فرص اتخاذ إجراء.'
                        }
                    ].map((faq, i) => (
                        <details key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 group">
                            <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                <span className="flex items-center gap-3">
                                    <span className="text-green-600">❓</span>
                                    <span>{faq.q}</span>
                                </span>
                                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed pr-10">
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Need More Help */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-gray-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">لم تجد إجابة لسؤالك؟</h3>
                <p className="text-gray-700 mb-6">
                    تواصل معنا مباشرة وسنساعدك في فهم الإجراءات القانونية المناسبة لحالتك
                </p>
                <a
                    href="/ar/about#contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg"
                >
                    تواصل معنا
                </a>
            </section>
        </div>
    );
}
