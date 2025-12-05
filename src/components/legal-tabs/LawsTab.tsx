'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import InteractiveLegalMap from '../InteractiveLegalMap';

// Icons
const IconScroll = () => (
    <svg className="w-10 h-10 text-[#1E8C4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const IconSyria = () => (
    <span className="text-4xl">🇸🇾</span>
);

const IconEU = () => (
    <span className="text-4xl">🇪🇺</span>
);

const IconGlobal = () => (
    <span className="text-4xl">🌍</span>
);

export default function LawsTab() {
    const t = useTranslations('legal.lawsContent');
    const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);

    return (
        <div className="space-y-12">
            {/* Introduction */}
            <section>
                <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                        <div className="bg-green-50 p-4 rounded-2xl flex-shrink-0">
                            <IconScroll />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {t('title')}
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                {t('description')}
                            </p>
                            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none bg-gray-50 p-6 rounded-xl border border-gray-100" dangerouslySetInnerHTML={{ __html: t.raw('sectionInfo') }} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <button
                            onClick={() => setSelectedCountry('Syria')}
                            className="bg-white p-6 rounded-2xl border border-gray-200 flex items-center gap-4 hover:border-[#1E8C4E] hover:shadow-lg hover:-translate-y-1 transition-all text-right w-full group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-1 h-full bg-gray-200 group-hover:bg-[#1E8C4E] transition-colors"></div>
                            <IconSyria />
                            <div>
                                <div className="font-bold text-xl text-gray-900 group-hover:text-[#1E8C4E] transition-colors">{t('syria')}</div>
                                <div className="text-sm text-gray-500 mt-1">{t('syriaLaw')}</div>
                            </div>
                        </button>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4 opacity-80">
                            <IconEU />
                            <div>
                                <div className="font-bold text-xl text-gray-900">{t('europe')}</div>
                                <div className="text-sm text-gray-500 mt-1">{t('europeCount')}</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4 opacity-80">
                            <IconGlobal />
                            <div>
                                <div className="font-bold text-xl text-gray-900">{t('otherCountries')}</div>
                                <div className="text-sm text-gray-500 mt-1">{t('otherList')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Map */}
            <section className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-8 border-b border-gray-100 bg-gray-50">
                    <h3 className="text-2xl font-bold text-gray-900 text-center">
                        🗺️ الخارطة القانونية التفاعلية
                    </h3>
                    <p className="text-center text-gray-600 mt-2">
                        اضغط على الدولة لعرض القوانين الخاصة بها
                    </p>
                </div>
                <div className="p-4">
                    <InteractiveLegalMap
                        selectedCountry={selectedCountry}
                        onSelectCountry={setSelectedCountry}
                    />
                </div>
            </section>
        </div>
    );
}
