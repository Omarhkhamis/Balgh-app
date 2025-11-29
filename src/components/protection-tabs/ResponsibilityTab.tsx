'use client';

import React from 'react';
import Link from 'next/link';

export default function ResponsibilityTab() {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    🤝 تضامن وواجه - المسؤولية الاجتماعية
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    الحماية الرقمية ليست فقط عن حماية نفسك، بل عن حماية الآخرين وبناء فضاء رقمي آمن للجميع.
                </p>
            </div>

            {/* Section 1: Protect Others */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    🤝 ساهم في حماية الآخرين من الاستهداف
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    حين ترى شخصاً مستهدفاً بخطاب طائفي، جندري أو مناطقي، لا تتركه وحيداً:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200 hover:shadow-lg transition-shadow">
                        <div className="text-center mb-4">
                            <span className="text-6xl">💚</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-3 text-xl text-center">الدعم الفوري</h4>
                        <p className="text-gray-700 leading-relaxed text-center">
                            كلمة دعم واحدة تكسر تأثير الإساءة النفسي. تواصل مع الشخص المستهدف وأخبره أنك تقف معه.
                        </p>
                    </div>
                    <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200 hover:shadow-lg transition-shadow">
                        <div className="text-center mb-4">
                            <span className="text-6xl">📢</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-3 text-xl text-center">الإبلاغ الجماعي</h4>
                        <p className="text-gray-700 leading-relaxed text-center">
                            الإبلاغ المتعدد على ذات المحتوى يقلل من انتشاره ويزيد سرعة حذفه من المنصة.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                    <p className="text-gray-700 leading-relaxed">
                        <strong className="text-green-800">💡 تذكر:</strong> خطاب الكراهية غالباً ما يستهدف الفئات الأكثر ضعفاً في المجتمع. التضامن ليس فعلاً رمزياً، بل حماية مباشرة تمنع تحوّل اللغة إلى فعل، وتساهم في بناء فضاء رقمي آمن للجميع.
                    </p>
                </div>
            </section>

            {/* Section 2: Don't Be a Bystander */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-orange-600 pr-4">
                    🗣️ لا تكن مجرد "متفرّج": أنت جزء من السردية
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    الصمت أمام خطاب الكراهية يعني السماح له بالاستمرار. اختر دائمًا فعلاً صغيراً:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-orange-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border-2 border-orange-200">
                        <span className="text-5xl mb-3 block">🛑</span>
                        <h4 className="font-bold text-gray-900 mb-2">أوقف المشاركة</h4>
                        <p className="text-gray-700 text-sm">لا تشارك المحتوى الضار حتى لو كان هدفك التنديد</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border-2 border-orange-200">
                        <span className="text-5xl mb-3 block">⚠️</span>
                        <h4 className="font-bold text-gray-900 mb-2">حذّر الأصدقاء</h4>
                        <p className="text-gray-700 text-sm">انبه محيطك من التضليل والشائعات</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border-2 border-orange-200">
                        <span className="text-5xl mb-3 block">✨</span>
                        <h4 className="font-bold text-gray-900 mb-2">انشر الإيجابية</h4>
                        <p className="text-gray-700 text-sm">شارك قصص التعاون بين السوريين</p>
                    </div>
                </div>

                <p className="text-gray-700 leading-relaxed italic bg-orange-50 p-4 rounded-xl border-r-4 border-orange-500">
                    💡 ذكّر الآخرين بأن الكلمات تُصنع منها المخاوف، وتُصنع منها الثقة أيضاً. في سياق هش مثل سوريا، كل اختيار لغوي يؤثر على السلم الأهلي أكثر مما نتخيل.
                </p>
            </section>

            {/* Section 3: Make Space Safe */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-purple-600 pr-4">
                    ✨ اجعل الفضاء الرقمي مساحة آمنة
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    الحماية الرقمية لا تتعلق فقط بما لا تفعله، بل بما تختار أن تفعله:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border-2 border-purple-200 text-center hover:shadow-lg transition-shadow">
                        <span className="text-6xl mb-4 block">🛑</span>
                        <p className="text-gray-800 font-medium text-lg">قلّل انتشار الخطاب المؤذي</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border-2 border-purple-200 text-center hover:shadow-lg transition-shadow">
                        <span className="text-6xl mb-4 block">📚</span>
                        <p className="text-gray-800 font-medium text-lg">شارك المعرفة الصحيحة</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border-2 border-purple-200 text-center hover:shadow-lg transition-shadow">
                        <span className="text-6xl mb-4 block">💚</span>
                        <p className="text-gray-800 font-medium text-lg">اصنع محتوى يستبدل الخوف بالفهم</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-10 rounded-2xl text-white text-center">
                    <p className="text-2xl leading-relaxed font-medium">
                        الكراهية تنتشر بسرعة لأنها تعتمد على ردود الفعل اللحظية. أما مواجهة الكراهية فتعتمد على وعيٍ بطيء وعميق: وعي يبدأ من مستخدم واحد… ويمكن أن يغيّر الفضاء كله.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-3xl border-2 border-green-200 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">هل واجهت خطاب كراهية؟</h3>
                <p className="text-xl text-gray-700 mb-8">ابدأ بتحليل المحتوى والحصول على تقرير قانوني</p>
                <Link
                    href="/#analyze"
                    className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                    🔍 ابدأ التحليل الآن
                </Link>
            </div>
        </div>
    );
}
