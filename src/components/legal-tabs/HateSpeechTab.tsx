'use client';

import React from 'react';

export default function HateSpeechTab() {
    return (
        <div className="space-y-12">
            {/* Legal Definition Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    📖 التعريف القانوني لخطاب الكراهية
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        <strong className="text-green-700">خطاب الكراهية</strong> هو أي تعبير يحرّض على العنف أو التمييز أو العداء ضد أفراد أو مجموعات بناءً على هويتهم وانتماءهم للمجموعة مثل:
                    </p>
                    <ul className="grid md:grid-cols-3 gap-4 mb-6">
                        {[
                            'العرق أو الإثنية',
                            'الدين أو المعتقد',
                            'الجنسية أو الأصل القومي',
                            'الجنس أو الهوية الجنسية',
                            'الإعاقة',
                            'الانتماء السياسي',
                            'الطبقة الاجتماعية'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                <span className="text-green-600 text-xl">✓</span>
                                <span className="text-gray-800 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg">
                        <p className="text-blue-900 font-medium">
                            💡 <strong>العناصر الأساسية:</strong> يجب أن يتضمن خطاب الكراهية عنصر التحريض أو الدعوة إلى العنف/التمييز، وليس مجرد التعبير عن رأي مخالف.
                        </p>
                    </div>
                </div>
            </section>

            {/* Examples Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* What we follow */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                        ✅ ما الذي نتابعه قانونيًا؟
                    </h2>
                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100 h-full">
                        <ul className="space-y-4">
                            {[
                                'دعوة إلى الإبادة أو العنف الجماعي',
                                'تضليل مقصود يؤذي فئة معينة'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* What we don't follow */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-red-600 pr-4">
                        ❌ ما الذي لا يدخل ضمن المتابعة؟
                    </h2>
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100 h-full">
                        <ul className="space-y-4">
                            {[
                                'خلافات شخصية غير متعلقة بالكراهية',
                                'شتائم فردية غير تحريضية',
                                'محتوى غير علني أو من رسائل خاصة',
                                'بلاغات بلا دليل أو رابط موثوق'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold text-xl mt-1">✗</span>
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>

            {/* Freedom of Speech Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    🗣️ الفرق بين خطاب الكراهية وحرية التعبير
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                                <span>✅</span>
                                <span>حرية التعبير المحمية</span>
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'انتقاد الأفكار والمعتقدات بشكل موضوعي',
                                    'التعبير عن آراء سياسية مخالفة',
                                    'النقد البناء للسياسات والممارسات',
                                    'السخرية والفكاهة غير المسيئة',
                                    'النقاش الأكاديمي والبحثي'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                                <span>❌</span>
                                <span>خطاب كراهية (غير محمي)</span>
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'التحريض على العنف ضد مجموعة',
                                    'الدعوة إلى التمييز أو الإقصاء',
                                    'التشهير بمجموعة بناءً على هويتها',
                                    'التهديد المباشر أو غير المباشر',
                                    'نشر معلومات كاذبة لإثارة الكراهية'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg">
                        <p className="text-yellow-900 font-medium">
                            ⚠️ <strong>الخط الفاصل:</strong> حرية التعبير تنتهي عندما يبدأ التحريض على الكراهية أو العنف. يمكنك انتقاد الأفكار، لكن لا يمكنك التحريض ضد الأشخاص بسبب هويتهم.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
