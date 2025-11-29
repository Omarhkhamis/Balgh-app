'use client';

import React from 'react';
import HatredTimeline from './components/HatredTimeline';
import AnalysisChecklist from './components/AnalysisChecklist';
import MisinfoTable from './components/MisinfoTable';

export default function AwarenessTab() {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    🧠 افهم وحلل - الوعي بخطاب الكراهية
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    قبل أن تحمي نفسك، يجب أن تفهم كيف تُبنى الكراهية وكيف تنتشر. هذا القسم يساعدك على تطوير "عين ناقدة" تكشف الخطاب المؤذي قبل أن تتأثر به.
                </p>
            </div>

            {/* Section 1: Hatred Timeline */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    🔍 راقب كيف تُبنى الكراهية… كي تستطيع إيقافها
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    خطاب الكراهية لا يظهر فجأة؛ بل يمرّ بثلاث مراحل واضحة:
                </p>
                <HatredTimeline />
                <p className="mt-6 text-gray-700 leading-relaxed italic bg-green-50 p-4 rounded-xl border-r-4 border-green-500">
                    💡 <strong>نصيحة:</strong> حين تفهم هذه المراحل، يصبح التعرف على الخطاب المؤذي خطوة تلقائية تساعدك على إيقافه وعدم الانخراط فيه.
                </p>
            </section>

            {/* Section 2: Analysis Checklist */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-blue-600 pr-4">
                    ❓ حلّل المحتوى قبل أن تتفاعل معه
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    عند مشاهدة منشور يخص جماعة أو طائفة أو منطقة، استخدم هذا المرشح السريع لتحديد طبيعته:
                </p>
                <AnalysisChecklist />
            </section>

            {/* Section 3: Misinformation Table */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-purple-600 pr-4">
                    🛑 تجنّب الوقوع في التضليل الذي يصنع الكراهية
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    قبل مشاركة أي منشور، انتبه لأربع آليات تُستخدم يوميًا لصناعة سرديات طائفية ومناطقية:
                </p>
                <MisinfoTable />
                <p className="mt-6 text-gray-700 leading-relaxed italic bg-purple-50 p-4 rounded-xl border-r-4 border-purple-500">
                    💡 <strong>تذكر:</strong> حين تتعرف على هذه الأنماط، يصبح تفكيك الخطاب الكاره أسهل من إعادة مشاركته.
                </p>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    جاهز لحماية نفسك؟
                </h4>
                <p className="text-gray-700 mb-6">
                    الآن بعد أن فهمت كيف تُبنى الكراهية، تعلّم كيف تحمي نفسك تقنياً وكيف تبلغ عن المحتوى الضار
                </p>
                <button
                    onClick={() => {
                        const toolsTab = document.querySelector('[data-tab="tools"]') as HTMLButtonElement;
                        toolsTab?.click();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                    ⚙️ انتقل للأدوات والحماية ←
                </button>
            </div>
        </div>
    );
}
