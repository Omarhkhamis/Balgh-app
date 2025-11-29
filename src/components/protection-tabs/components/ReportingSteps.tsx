'use client';

import React from 'react';

export default function ReportingSteps() {
    const steps = [
        {
            number: 1,
            title: 'التوثيق الإضافي',
            description: 'وثّق المنشور كاملاً: خذ لقطة شاشة تتضمن الرابط، التاريخ، اسم الحساب، والمحتوى الكامل.',
            tips: ['احفظ الصورة بتاريخ واضح', 'سجل الرابط المباشر', 'وثق أي تعليقات مسيئة'],
            icon: '📸',
            color: 'blue'
        },
        {
            number: 2,
            title: 'البلاغ الداخلي',
            description: 'أرسل البلاغ داخل المنصة (فيسبوك، تويتر، إنستغرام، إلخ) باستخدام خيار "Report" أو "إبلاغ".',
            tips: ['اختر "خطاب كراهية" كسبب', 'كن محدداً في الوصف', 'تابع حالة البلاغ'],
            icon: '🚩',
            color: 'orange'
        },
        {
            number: 3,
            title: 'التواصل الحقوقي',
            description: 'شارك الحالة (إن رغبت) مع الجهات المتخصصة أو المبادرات الحقوقية التي تعمل على توثيق الانتهاكات الرقمية.',
            tips: ['راجع صفحة القوانين للجهات المختصة', 'احتفظ بنسخة من التوثيق', 'لا تشارك معلومات شخصية حساسة'],
            icon: '⚖️',
            color: 'green'
        }
    ];

    return (
        <div className="space-y-6">
            {steps.map((step, index) => (
                <div
                    key={step.number}
                    className={`bg-${step.color}-50 p-8 rounded-2xl border-2 border-${step.color}-200 hover:shadow-lg transition-all`}
                >
                    <div className="flex items-start gap-6">
                        {/* Number Badge */}
                        <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-${step.color}-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg`}>
                            {step.number}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-3xl">{step.icon}</span>
                                <h4 className="text-2xl font-bold text-gray-900">{step.title}</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>

                            {/* Tips */}
                            <div className="bg-white p-4 rounded-lg border-r-4 border-${step.color}-500">
                                <p className="font-bold text-gray-900 mb-2">💡 نصائح:</p>
                                <ul className="space-y-2">
                                    {step.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <span className="text-${step.color}-600 font-bold">•</span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Important Note */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
                <p className="text-lg font-bold text-center">
                    ⚠️ تذكر: عملية التبليغ ليست إجراءً عقابياً، بل أداة حماية مجتمعية
                </p>
            </div>
        </div>
    );
}
