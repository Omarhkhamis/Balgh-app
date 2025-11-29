'use client';

import React from 'react';
import InteractiveLegalMap from '../InteractiveLegalMap';

export default function LawsTab() {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <section>
                <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 rounded-2xl shadow-sm border-2 border-gray-200">
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-5xl">📜</span>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                القوانين الدولية لمكافحة خطاب الكراهية
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                يختلف الإطار القانوني لمكافحة خطاب الكراهية من دولة لأخرى، لكن معظم الدول الديمقراطية تجرّم التحريض على العنف والكراهية ضد الأفراد أو المجموعات بناءً على خصائص محمية كالعرق، الدين، الجنسية، أو الإثنية.
                            </p>
                            <p className="text-base text-gray-600 leading-relaxed">
                                <strong className="text-green-700">في هذا القسم:</strong> ستجد معلومات قانونية مفصّلة عن كل دولة، تشمل القوانين المعمول بها، تعريف خطاب الكراهية، والجهات الرسمية المختصة باستقبال البلاغات. انقر على أي دولة في الخريطة أدناه للاطلاع على التفاصيل.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                            <span className="text-3xl">🇸🇾</span>
                            <div>
                                <div className="font-bold text-gray-900">سوريا</div>
                                <div className="text-sm text-gray-600">المادة 307 + المادة 31</div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                            <span className="text-3xl">🇪🇺</span>
                            <div>
                                <div className="font-bold text-gray-900">أوروبا</div>
                                <div className="text-sm text-gray-600">9 دول متاحة</div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                            <span className="text-3xl">🌍</span>
                            <div>
                                <div className="font-bold text-gray-900">دول أخرى</div>
                                <div className="text-sm text-gray-600">تركيا، كندا، أمريكا</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Map */}
            <section>
                <InteractiveLegalMap />
            </section>
        </div>
    );
}
