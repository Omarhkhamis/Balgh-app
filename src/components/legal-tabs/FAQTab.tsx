'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function FAQTab() {
    const t = useTranslations('legal.faqContent');

    return (
        <div className="space-y-12">
            {/* Common Mistakes Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-red-600 pr-4">
                    ⚠️ {t('mistakesTitle')}
                </h2>
                <div className="space-y-4">
                    {(t.raw('mistakes') as any[]).map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 text-3xl">❌</span>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-red-700 mb-2">{item.mistake}</h3>
                                    <p className="text-gray-700 flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>{t.raw('solutionLabel') || 'الحل:'}</strong> {item.solution}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* When is it a Crime Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    ⚖️ {t('crimeTitle')}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Clear Cases */}
                    <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                        <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                            <span>🚫</span>
                            <span>{t('clearCrimeTitle')}</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {(t.raw('clearCrimeList') as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-red-600 mt-0.5">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Gray Area */}
                    <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                        <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
                            <span>⚠️</span>
                            <span>{t('grayAreaTitle')}</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {(t.raw('grayAreaList') as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-yellow-600 mt-0.5">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-yellow-900 mt-4 font-medium">
                            💡 {t('grayAreaTip')}
                        </p>
                    </div>

                    {/* Not a Crime */}
                    <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                        <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                            <span>✅</span>
                            <span>{t('notCrimeTitle')}</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {(t.raw('notCrimeList') as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-green-600 mt-0.5">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* General FAQs */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    ❓ {t('faqTitle')}
                </h2>
                <div className="space-y-4">
                    {(t.raw('faqs') as any[]).map((faq, i) => (
                        <details key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 group">
                            <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                <span className="flex items-center gap-3">
                                    <span className="text-green-600">❓</span>
                                    <span>{faq.q}</span>
                                </span>
                                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed pr-10">
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Need More Help */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-gray-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('helpTitle')}</h3>
                <p className="text-gray-700 mb-6">
                    {t('helpText')}
                </p>
                <a
                    href="/ar/about#contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg"
                >
                    {t('contactButton')}
                </a>
            </section>
        </div>
    );
}
