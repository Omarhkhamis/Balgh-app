'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

// Icons
const IconBook = () => (
    <svg className="w-8 h-8 text-[#1E8C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const IconCheck = () => (
    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const IconCross = () => (
    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const IconBulb = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const IconWarning = () => (
    <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

export default function HateSpeechTab() {
    const t = useTranslations('legal.hateSpeechContent');

    return (
        <div className="space-y-12">
            {/* Legal Definition Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-green-100 p-3 rounded-xl">
                        <IconBook />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        {t('definitionTitle')}
                    </h2>
                </div>

                <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                        <strong className="text-[#1E8C4E]">{t('definitionTitle')}</strong> {t('definitionText')}
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {(t.raw('identityCategories') as string[]).map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                                <IconCheck />
                                <span className="text-gray-800 font-bold">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-xl flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0">
                            <IconBulb />
                        </div>
                        <p className="text-blue-900 text-lg leading-relaxed">
                            <strong>{t('keyElements')}</strong> {t('keyElementsText')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Examples Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* What we follow */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="bg-green-100 p-2 rounded-lg"><IconCheck /></span>
                        {t('whatWeMonitorTitle')}
                    </h2>
                    <ul className="space-y-4">
                        {(t.raw('whatWeMonitor') as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-3 bg-green-50/50 p-3 rounded-lg">
                                <span className="text-green-600 font-bold text-lg mt-0.5">✓</span>
                                <span className="text-gray-800 font-medium leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* What we don't follow */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="bg-red-100 p-2 rounded-lg"><IconCross /></span>
                        {t('whatWeDoNotTitle')}
                    </h2>
                    <ul className="space-y-4">
                        {(t.raw('whatWeDoNot') as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-3 bg-red-50/50 p-3 rounded-lg">
                                <span className="text-red-600 font-bold text-lg mt-0.5">✗</span>
                                <span className="text-gray-800 font-medium leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Freedom of Speech Section */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gray-100 p-3 rounded-xl text-gray-700">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        {t('differenceTitle')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2 border-b border-green-100 pb-2">
                            <IconCheck />
                            <span>{t('protectedTitle')}</span>
                        </h3>
                        <ul className="space-y-4">
                            {(t.raw('protectedItems') as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                    <span className="text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2 border-b border-red-100 pb-2">
                            <IconCross />
                            <span>{t('notProtectedTitle')}</span>
                        </h3>
                        <ul className="space-y-4">
                            {(t.raw('notProtectedItems') as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                    <span className="text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-xl flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                        <IconWarning />
                    </div>
                    <p className="text-yellow-900 text-lg leading-relaxed">
                        <strong>{t('boundaryTitle')}</strong> {t('boundaryText')}
                    </p>
                </div>
            </section>
        </div>
    );
}
