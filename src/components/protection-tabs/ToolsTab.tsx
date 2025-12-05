'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ProtectionChecklist from './components/ProtectionChecklist';
import ReportingSteps from './components/ReportingSteps';
import Link from 'next/link';

// Icons
const IconShield = () => (
    <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const IconAlert = () => (
    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const IconReport = () => (
    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
);

export default function ToolsTab() {
    const t = useTranslations('protection.content.tools');

    return (
        <div className="space-y-16">
            {/* Introduction */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                    {t('intro')}
                </p>
            </div>

            {/* Section 1: Technical Protection */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-indigo-100 p-3 rounded-xl">
                        <IconShield />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('protection.title')}
                    </h3>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t('protection.intro')}
                </p>
                <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                    <ProtectionChecklist />
                </div>
            </section>

            {/* Section 2: Immediate Actions */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-red-100 p-3 rounded-xl">
                        <IconAlert />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('immediate.title')}
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-red-300 hover:shadow-md transition-all text-center group">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
                            <span className="text-4xl">📸</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{t('immediate.document.title')}</h4>
                        <p className="text-gray-600 leading-relaxed">{t('immediate.document.desc')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-red-300 hover:shadow-md transition-all text-center group">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
                            <span className="text-4xl">🚩</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{t('immediate.report.title')}</h4>
                        <p className="text-gray-600 leading-relaxed">{t('immediate.report.desc')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-red-300 hover:shadow-md transition-all text-center group">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
                            <span className="text-4xl">🤐</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{t('immediate.ignore.title')}</h4>
                        <p className="text-gray-600 leading-relaxed">{t('immediate.ignore.desc')}</p>
                    </div>
                </div>

                <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-xl">
                    <p className="text-red-900 text-lg font-medium text-center">
                        ⚠️ {t('immediate.warning')}
                    </p>
                </div>
            </section>

            {/* Section 3: Advanced Reporting */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-blue-100 p-3 rounded-xl">
                        <IconReport />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('reporting.title')}
                    </h3>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-100 mb-8">
                    <p className="text-xl font-bold text-gray-800 text-center leading-relaxed">
                        {t('reporting.intro')}
                    </p>
                </div>

                <ReportingSteps />
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl border border-blue-100 text-center shadow-sm">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">
                    {t('cta.title')}
                </h4>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                    {t('cta.desc')}
                </p>
                <Link
                    href="/ar/legal"
                    className="inline-block bg-[#1E8C4E] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#166639] hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                    {t('cta.button')}
                </Link>
            </div>
        </div>
    );
}
