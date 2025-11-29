'use client';

import React from 'react';
import ProtectionChecklist from './components/ProtectionChecklist';
import ReportingSteps from './components/ReportingSteps';
import Link from 'next/link';

export default function ToolsTab() {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    ⚙️ احمِ نفسك وبلغ - الأدوات التقنية
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    الآن بعد أن فهمت كيف تُبنى الكراهية، حان الوقت لتتعلم كيف تحمي نفسك تقنياً وكيف تبلغ عن المحتوى الضار بفعالية.
                </p>
            </div>

            {/* Section 1: Technical Protection */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-indigo-600 pr-4">
                    🔒 احمِ نفسك تقنياً قبل أن تحمي خطابك
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    اضبط مساحتك الرقمية كما تضبط باب منزلك:
                </p>
                <ProtectionChecklist />
            </section>

            {/* Section 2: Immediate Actions */}
            <section>
                <div className="bg-red-50 p-8 rounded-xl border-r-4 border-red-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="text-3xl">🚨</span>
                        عند مواجهة محتوى مُحرّض: الإجراءات الفورية
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl text-center">
                            <span className="text-5xl mb-3 block">📸</span>
                            <h4 className="font-bold text-gray-900 mb-2">وثّق</h4>
                            <p className="text-gray-700 text-sm">خذ لقطة شاشة مع الرابط والتاريخ كدليل</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center">
                            <span className="text-5xl mb-3 block">🚩</span>
                            <h4 className="font-bold text-gray-900 mb-2">بلّغ</h4>
                            <p className="text-gray-700 text-sm">أبلغ مباشرة ضمن المنصة عن انتهاك المحتوى</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center">
                            <span className="text-5xl mb-3 block">🤐</span>
                            <h4 className="font-bold text-gray-900 mb-2">لا تتفاعل</h4>
                            <p className="text-gray-700 text-sm">التفاعل حتى السلبي يزيد الانتشار</p>
                        </div>
                    </div>
                    <p className="mt-6 text-gray-700 font-medium text-center bg-white p-4 rounded-lg">
                        ⚠️ تذكر: الحسابات الوهمية تنمو وتنجح من خلال تفاعل المستخدمين الحقيقيين معها
                    </p>
                </div>
            </section>

            {/* Section 3: Advanced Reporting */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-blue-600 pr-4">
                    ⚖️ خطوات التبليغ المتقدمة
                </h3>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border-2 border-blue-200 mb-6">
                    <p className="text-xl font-bold text-gray-900 text-center">
                        💡 الإبلاغ ليس قيداً على الحرية - بل أداة حماية مجتمعية
                    </p>
                </div>
                <ReportingSteps />
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    هل تعرضت لخطاب كراهية؟
                </h4>
                <p className="text-gray-700 mb-6">
                    اطلع على القوانين المعمول بها والجهات المختصة باستقبال البلاغات
                </p>
                <Link
                    href="/ar/legal"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                    ⚖️ اذهب لصفحة القوانين وجهات التبليغ ←
                </Link>
            </div>
        </div>
    );
}
