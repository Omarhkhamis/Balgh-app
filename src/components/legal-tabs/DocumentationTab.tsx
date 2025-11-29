'use client';

import React from 'react';

export default function DocumentationTab() {
    return (
        <div className="space-y-12">
            {/* Legal Screenshot Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    📸 اللقطة القانونية الصحيحة
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <p className="text-lg text-gray-700 mb-6">
                        اللقطة (Screenshot) هي الدليل الأساسي في أي بلاغ. يجب أن تحتوي على معلومات كاملة لإثبات الجريمة:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                                <span>✅</span>
                                <span>ما يجب أن تحتويه اللقطة</span>
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'النص الكامل للمحتوى المخالف',
                                    'اسم الحساب أو الصفحة بوضوح',
                                    'تاريخ ووقت النشر',
                                    'عدد التفاعلات (إعجاب، مشاركة، تعليق)',
                                    'رابط المنشور (URL) إن أمكن',
                                    'صورة الملف الشخصي للناشر'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                                <span>❌</span>
                                <span>أخطاء شائعة في التوثيق</span>
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'قص جزء من النص أو السياق',
                                    'عدم ظهور اسم الحساب',
                                    'لقطة غير واضحة أو مشوشة',
                                    'عدم ظهور التاريخ والوقت',
                                    'التقاط اللقطة بعد حذف المنشور',
                                    'عدم حفظ رابط المنشور الأصلي'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg">
                        <p className="text-blue-900 font-medium">
                            💡 <strong>نصيحة احترافية:</strong> التقط لقطة كاملة للشاشة (Full Screenshot) بدلاً من قص جزء منها. هذا يوفر سياقاً أفضل ويزيد من مصداقية الدليل.
                        </p>
                    </div>
                </div>
            </section>

            {/* Archiving Tools Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    🗄️ الأرشفة والحفظ الاحترافي
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <p className="text-lg text-gray-700 mb-6">
                        بالإضافة للقطة الشاشة، استخدم أدوات الأرشفة لحفظ نسخة دائمة من المحتوى:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        {[
                            {
                                name: 'Archive.today',
                                icon: '🌐',
                                description: 'أرشفة فورية لأي صفحة ويب',
                                link: 'https://archive.today',
                                color: 'blue'
                            },
                            {
                                name: 'Wayback Machine',
                                icon: '⏰',
                                description: 'أرشيف الإنترنت التاريخي',
                                link: 'https://web.archive.org',
                                color: 'green'
                            },
                            {
                                name: 'Perma.cc',
                                icon: '🔗',
                                description: 'روابط دائمة للمحتوى',
                                link: 'https://perma.cc',
                                color: 'purple'
                            }
                        ].map((tool, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-3 text-center">{tool.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{tool.name}</h3>
                                <p className="text-sm text-gray-600 mb-4 text-center">{tool.description}</p>
                                <a
                                    href={tool.link}
                                    target="_blank"
                                    className="block text-center text-sm text-green-600 font-bold hover:underline"
                                >
                                    زيارة الموقع ↗
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">خطوات الأرشفة:</h3>
                        <ol className="space-y-3">
                            {[
                                'انسخ رابط المنشور المخالف',
                                'افتح أحد مواقع الأرشفة المذكورة أعلاه',
                                'الصق الرابط في خانة الأرشفة',
                                'احفظ رابط الأرشيف الناتج',
                                'أرفق رابط الأرشيف مع البلاغ'
                            ].map((step, i) => (
                                <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {i + 1}
                                    </span>
                                    <span className="text-gray-800 mt-1">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Secure Storage Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    🔒 الحفظ الآمن للأدلة
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">أين تحفظ الأدلة؟</h3>
                            <ul className="space-y-3">
                                {[
                                    { title: 'التخزين السحابي المشفر', desc: 'Google Drive, Dropbox (مع تفعيل المصادقة الثنائية)' },
                                    { title: 'قرص صلب خارجي', desc: 'نسخة احتياطية محلية آمنة' },
                                    { title: 'البريد الإلكتروني', desc: 'أرسل لنفسك نسخة مع التاريخ والوقت' }
                                ].map((item, i) => (
                                    <li key={i} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="font-bold text-gray-900">{item.title}</div>
                                        <div className="text-sm text-gray-600">{item.desc}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">نصائح الأمان</h3>
                            <ul className="space-y-3">
                                {[
                                    'استخدم كلمات مرور قوية ومختلفة',
                                    'فعّل المصادقة الثنائية (2FA)',
                                    'لا تشارك الأدلة على وسائل التواصل',
                                    'احتفظ بنسخ متعددة في أماكن مختلفة',
                                    'سجّل تاريخ ووقت حفظ كل دليل'
                                ].map((tip, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-green-600 mt-1">🔐</span>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg">
                        <p className="text-yellow-900 font-medium">
                            ⚠️ <strong>مدة الاحتفاظ:</strong> احتفظ بالأدلة لمدة سنة على الأقل من تاريخ التبليغ. قد تحتاجها للمتابعة القانونية أو الاستئناف.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Tips */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span>💡</span>
                    <span>نصائح سريعة للتوثيق الفعال</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        'وثّق فوراً: لا تنتظر، المحتوى قد يُحذف',
                        'التقط لقطات متعددة من زوايا مختلفة',
                        'احفظ التعليقات إذا كانت جزءاً من السياق',
                        'سجّل فيديو للشاشة إذا كان المحتوى متحركاً',
                        'احتفظ برابط الملف الشخصي للناشر',
                        'وثّق أي تهديدات مباشرة بشكل منفصل'
                    ].map((tip, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                            <span className="text-green-600 text-xl mt-1">✓</span>
                            <span className="text-gray-800">{tip}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
