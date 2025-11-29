'use client';

import React, { useState } from 'react';

export default function AnalysisChecklist() {
    const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

    const questions = [
        'هل يستهدف الهوية؟ (بدلاً من الفعل الفردي)',
        'هل يتضمن تحقيراً أو تشبيهاً غير إنساني؟',
        'هل يدفعك للخوف أو الغضب بدل الفهم؟',
        'هل يعمم على جماعة كاملة بناءً على فعل فرد؟',
        'هل يستخدم لغة تحريضية أو عنيفة؟'
    ];

    const toggleCheck = (index: number) => {
        const newChecked = new Set(checkedItems);
        if (newChecked.has(index)) {
            newChecked.delete(index);
        } else {
            newChecked.add(index);
        }
        setCheckedItems(newChecked);
    };

    const checkedCount = checkedItems.size;
    const getResultMessage = () => {
        if (checkedCount === 0) return { text: 'ابدأ بتحليل المحتوى...', color: 'gray' };
        if (checkedCount <= 2) return { text: '⚠️ احتمال متوسط - راجع المحتوى بحذر', color: 'yellow' };
        return { text: '🚨 احتمال عالٍ - هذا على الأرجح خطاب كراهية', color: 'red' };
    };

    const result = getResultMessage();

    return (
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
            <h4 className="text-xl font-bold text-gray-900 mb-6">أسئلة تحليل الخطاب الكاره:</h4>

            <div className="space-y-4 mb-6">
                {questions.map((question, index) => (
                    <label
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-400 cursor-pointer transition-all"
                    >
                        <input
                            type="checkbox"
                            checked={checkedItems.has(index)}
                            onChange={() => toggleCheck(index)}
                            className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-gray-800 leading-relaxed">{question}</span>
                    </label>
                ))}
            </div>

            {/* Result Indicator */}
            {checkedCount > 0 && (
                <div className={`p-4 bg-${result.color}-100 border-r-4 border-${result.color}-500 rounded-lg animate-fade-in`}>
                    <p className={`text-${result.color}-800 font-bold text-lg`}>
                        {result.text}
                    </p>
                </div>
            )}

            {/* Syrian Context Alert */}
            <div className="mt-6 p-6 bg-white rounded-lg border-r-4 border-blue-600">
                <p className="text-gray-700 leading-relaxed">
                    <strong className="text-blue-800">⚠️ علامة تحذير واضحة في السياق السوري:</strong> كثير من المحتوى يبدأ بجملة عادية وينتهي بتعميم كامل: "الدروز كلهم..."، "السنة كلهم..."، "العلويون دائماً…". هذه القفزة من الفرد إلى الجماعة هي مؤشر قوي على خطاب الكراهية.
                </p>
            </div>
        </div>
    );
}
