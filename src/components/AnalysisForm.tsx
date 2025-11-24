'use client';

import React, { useState } from 'react';

interface AnalysisFormProps {
    onAnalyze: (text: string) => void;
    isAnalyzing: boolean;
}

export default function AnalysisForm({ onAnalyze, isAnalyzing }: AnalysisFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAnalyze(text);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    تحليل خطاب الكراهية والعنف
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    أداة ذكاء اصطناعي متقدمة لتحليل وتصنيف المحتوى النصي
                </p>
            </div>

            {/* Analysis Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="أدخل النص المراد تحليله هنا..."
                            className="w-full h-48 p-6 text-lg border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all resize-none bg-white text-gray-900 placeholder-gray-400"
                            dir="rtl"
                        />
                        <div className="absolute bottom-4 left-4 text-sm text-gray-400">
                            {text.length} حرف
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isAnalyzing || !text.trim()}
                        className={`w-full py-4 rounded-xl text-lg font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] ${isAnalyzing || !text.trim()
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'bg-gradient-to-r from-green-600 to-green-500 hover:shadow-lg hover:shadow-green-500/30'
                            }`}
                    >
                        {isAnalyzing ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                جاري التحليل...
                            </span>
                        ) : (
                            'تحليل النص'
                        )}
                    </button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>تحليل آمن ومشفر</span>
                </div>
            </div>
        </div>
    );
}
