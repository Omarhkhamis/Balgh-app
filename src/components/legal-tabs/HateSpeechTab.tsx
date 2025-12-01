'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function HateSpeechTab() {
    const t = useTranslations('legal.hateSpeechContent');

    return (
        <div className="space-y-12">
            {/* Legal Definition Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    📖 {t('definitionTitle')}
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        <strong className="text-green-700">{t('definitionTitle')}</strong> {t('definitionText')}
                    </p>
                    <ul className="grid md:grid-cols-3 gap-4 mb-6">
                        {(t.raw('identityCategories') as string[]).map((item, i) => (
                            <li key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                <span className="text-green-600 text-xl">✓</span>
                                <span className="text-gray-800 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg">
                        <p className="text-blue-900 font-medium">
                            💡 <strong>{t('keyElements')}</strong> {t('keyElementsText')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Examples Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* What we follow */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                        ✅ {t('whatWeMonitorTitle')}
                    </h2>
                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100 h-full">
                        <ul className="space-y-4">
                            {(t.raw('whatWeMonitor') as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* What we don't follow */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-red-600 pr-4">
                        ❌ {t('whatWeDoNotTitle')}
                    </h2>
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100 h-full">
                        <ul className="space-y-4">
                            {(t.raw('whatWeDoNot') as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold text-xl mt-1">✗</span>
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>

            {/* Freedom of Speech Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    🗣️ {t('differenceTitle')}
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                                <span>✅</span>
                                <span>{t('protectedTitle')}</span>
                            </h3>
                            <ul className="space-y-3">
                                {(t.raw('protectedItems') as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                                <span>❌</span>
                                <span>{t('notProtectedTitle')}</span>
                            </h3>
                            <ul className="space-y-3">
                                {(t.raw('notProtectedItems') as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg">
                        <p className="text-yellow-900 font-medium">
                            ⚠️ <strong>{t('boundaryTitle')}</strong> {t('boundaryText')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
