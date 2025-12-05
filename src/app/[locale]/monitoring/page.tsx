'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import AppHeader from '../../../components/AppHeader';
import ResultsDisplay from '../../../components/ResultsDisplay';
import { Suspense } from 'react';

import { useTranslations } from 'next-intl';

function MonitoringContent() {
    const t = useTranslations('monitoring');
    const searchParams = useSearchParams();
    const resultData = searchParams.get('result');

    let result = null;
    if (resultData) {
        try {
            result = JSON.parse(decodeURIComponent(resultData));
        } catch (e) {
            console.error('Error parsing result:', e);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <AppHeader />
            <main className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
                        {t('title')}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {result ? (
                    <ResultsDisplay result={result} />
                ) : (
                    <div className="text-center py-20">
                        <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">{t('noResultsTitle')}</h2>
                        <p className="text-gray-500 mb-6">{t('noResultsDesc')}</p>
                        <Link href="/" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <span>🔍</span>
                            <span>{t('analyzeButton')}</span>
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
}

export default function MonitoringPage() {
    return (
        <Suspense fallback={<div>جاري التحميل...</div>}>
            <MonitoringContent />
        </Suspense>
    );
}
