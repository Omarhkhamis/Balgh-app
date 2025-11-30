'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import AnalysisForm from '../../../components/AnalysisForm';

export default function AnalyzePage() {
    const locale = useLocale();
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleAnalyze = async (text: string) => {
        setIsAnalyzing(true);
        try {
            const response = await fetch('/api/classify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });

            const data = await response.json();

            // Redirect to monitoring page with results
            const resultParam = encodeURIComponent(JSON.stringify(data));
            window.location.href = `/monitoring?result=${resultParam}`;
        } catch (error) {
            console.error('Error analyzing text:', error);
            setIsAnalyzing(false);
        }
    };

    return (
        <div id="analyze" className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Minimal Header - Logo + Back Button Only */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href={`/${locale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <span className="text-2xl font-bold" style={{ color: '#1E8C4E' }}>
                                بَلِّغ
                            </span>
                        </Link>

                        {/* Back Button */}
                        <Link
                            href={`/${locale}`}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>العودة للرئيسية</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 md:py-12">
                <AnalysisForm onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
            </main>
        </div>
    );
}
