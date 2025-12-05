'use client';

import { useState } from 'react';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import PageHero from '../../../components/PageHero';
import { reports, ReportCategory } from '@/data/reports';
import { useTranslations, useLocale } from 'next-intl';

// Icons
const IconChart = () => (
    <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const IconDownload = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const IconCalendar = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export default function ReportsPage() {
    const t = useTranslations('reports');
    const locale = useLocale() as 'ar' | 'en' | 'ku';
    const [activeTab, setActiveTab] = useState<ReportCategory | 'all'>('all');

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(locale === 'ar' ? 'ar-SY' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const categories: { id: ReportCategory | 'all'; label: string; icon: string }[] = [
        { id: 'all', label: t('categories.all'), icon: '📂' },
        { id: 'initiative', label: t('categories.initiative'), icon: '📊' },
        { id: 'analytical', label: t('categories.analytical'), icon: '📈' },
        { id: 'study', label: t('categories.study'), icon: '📚' },
    ];

    const filteredReports = activeTab === 'all'
        ? reports
        : reports.filter(report => report.category === activeTab);

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <AppHeader />

            <PageHero
                icon="📊"
                title={t('title')}
                subtitle={t('subtitle')}
            />

            <main className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Introduction */}
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <p className="text-xl text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            {t('intro')}
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === category.id
                                    ? 'bg-[#1E8C4E] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#1E8C4E] border border-gray-100'
                                    }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Reports Grid */}
                    <div>
                        {filteredReports.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <IconChart />
                                </div>
                                <p className="text-gray-500 text-xl font-medium">{t('noReports')}</p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-8">
                                {filteredReports.map((item) => {
                                    const title = item.title[locale] || item.title.ar;
                                    const description = item.description[locale] || item.description.ar;

                                    return (
                                        <article
                                            key={item.id}
                                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group"
                                        >
                                            {/* Image */}
                                            {item.image ? (
                                                <div className="relative h-64 bg-gray-200 overflow-hidden">
                                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                                                    <img
                                                        src={item.image}
                                                        alt={title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                                                    <IconChart />
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="p-8 flex-1 flex flex-col">
                                                <div className="text-sm text-[#1E8C4E] font-bold mb-4 flex items-center gap-2 bg-green-50 w-fit px-3 py-1 rounded-full">
                                                    <IconCalendar />
                                                    {formatDate(item.date)}
                                                </div>

                                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1E8C4E] transition-colors line-clamp-2">
                                                    {title}
                                                </h3>

                                                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1 line-clamp-3">
                                                    {description}
                                                </p>

                                                {/* Tags */}
                                                {item.tags && item.tags[locale] && item.tags[locale].length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mb-8">
                                                        {item.tags[locale].map((tag, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="text-xs bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg font-medium border border-gray-100"
                                                            >
                                                                #{tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Download Button */}
                                                <a
                                                    href={item.fileUrl}
                                                    className="w-full bg-white border-2 border-[#1E8C4E] text-[#1E8C4E] hover:bg-[#1E8C4E] hover:text-white font-bold py-4 px-6 rounded-xl transition-all text-center flex items-center justify-center gap-3 group/btn"
                                                >
                                                    <IconDownload />
                                                    <span>{t('download')}</span>
                                                </a>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Call for Submissions */}
                    <div className="bg-gradient-to-br from-blue-900 to-gray-900 p-12 rounded-3xl text-center shadow-lg text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">
                                {t('callForSubmissions.title')}
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                                {t('callForSubmissions.description')}
                            </p>
                            <a
                                href="mailto:info@balagh.org"
                                className="inline-block bg-[#1E8C4E] text-white font-bold py-5 px-10 rounded-xl hover:bg-[#166639] hover:shadow-xl transition-all transform hover:-translate-y-1"
                            >
                                {t('callForSubmissions.button')}
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <AppFooter />
        </div>
    );
}
