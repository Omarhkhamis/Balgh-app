'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import InteractiveLegalMap from '../InteractiveLegalMap';

export default function LawsTab() {
    const t = useTranslations('legal.lawsContent');

    return (
        <div className="space-y-12">
            {/* Introduction */}
            <section>
                <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 rounded-2xl shadow-sm border-2 border-gray-200">
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-5xl">📜</span>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                {t('title')}
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                {t('description')}
                            </p>
                            <p className="text-base text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('sectionInfo') }} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                            <span className="text-3xl">🇸🇾</span>
                            <div>
                                <div className="font-bold text-gray-900">{t('syria')}</div>
                                <div className="text-sm text-gray-600">{t('syriaLaw')}</div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                            <span className="text-3xl">🇪🇺</span>
                            <div>
                                <div className="font-bold text-gray-900">{t('europe')}</div>
                                <div className="text-sm text-gray-600">{t('europeCount')}</div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                            <span className="text-3xl">🌍</span>
                            <div>
                                <div className="font-bold text-gray-900">{t('otherCountries')}</div>
                                <div className="text-sm text-gray-600">{t('otherList')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Map */}
            <section>
                <InteractiveLegalMap />
            </section>
        </div>
    );
}
