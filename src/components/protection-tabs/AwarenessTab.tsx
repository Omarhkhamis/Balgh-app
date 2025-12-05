'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import HatredTimeline from './components/HatredTimeline';
import AnalysisChecklist from './components/AnalysisChecklist';
import MisinfoTable from './components/MisinfoTable';

// Icons
const IconClock = () => (
    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const IconChecklist = () => (
    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const IconWarning = () => (
    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

export default function AwarenessTab() {
    const t = useTranslations('protection.content.awareness');

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

            {/* Section 1: Hatred Timeline */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-green-100 p-3 rounded-xl">
                        <IconClock />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('timeline.title')}
                    </h3>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t('timeline.intro')}
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <HatredTimeline />
                </div>
                <div className="mt-8 bg-green-50 border-r-4 border-green-500 p-6 rounded-xl">
                    <p className="text-green-900 text-lg italic font-medium">
                        💡 {t('timeline.tip')}
                    </p>
                </div>
            </section>

            {/* Section 2: Analysis Checklist */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-blue-100 p-3 rounded-xl">
                        <IconChecklist />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('checklist.title')}
                    </h3>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t('checklist.intro')}
                </p>
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                    <AnalysisChecklist />
                </div>
            </section>

            {/* Section 3: Misinformation Table */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-purple-100 p-3 rounded-xl">
                        <IconWarning />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('misinfo.title')}
                    </h3>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t('misinfo.intro')}
                </p>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <MisinfoTable />
                </div>
                <div className="mt-8 bg-purple-50 border-r-4 border-purple-500 p-6 rounded-xl">
                    <p className="text-purple-900 text-lg italic font-medium">
                        ⚠️ {t('misinfo.tip')}
                    </p>
                </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-3xl border border-green-100 text-center shadow-sm">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">
                    {t('cta.title')}
                </h4>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                    {t('cta.desc')}
                </p>
                <button
                    onClick={() => {
                        const toolsTab = document.querySelector('[data-tab="tools"]') as HTMLButtonElement;
                        toolsTab?.click();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-[#1E8C4E] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#166639] hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                    {t('cta.button')}
                </button>
            </div>
        </div>
    );
}
