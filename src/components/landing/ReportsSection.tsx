'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { reports } from '@/data/reports';

export default function ReportsSection() {
    const locale = useLocale();
    const t = useTranslations('reports');

    // Get latest 2 reports
    const latestReports = reports.slice(0, 2);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Reports Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {latestReports.map((item) => {
                        const title = item.title[locale as 'ar' | 'en'] || item.title.ar;
                        const description = item.description[locale as 'ar' | 'en'] || item.description.ar;

                        return (
                            <div
                                key={item.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row"
                            >
                                {/* Image */}
                                <div className="md:w-2/5 h-48 md:h-auto relative bg-gray-200 overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-4xl">
                                            📊
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                                    <div className="text-sm text-green-600 font-semibold mb-2 flex items-center gap-2">
                                        <span>📅</span>
                                        {formatDate(item.date)}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                                        {title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                                        {description}
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <Link
                                            href={`/${locale}/reports`}
                                            className="text-sm font-bold text-gray-900 hover:text-green-700 transition-colors flex items-center gap-1"
                                        >
                                            {t('readMore')} {locale === 'ar' ? '←' : '→'}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link
                        href={`/${locale}/reports`}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 hover:border-green-600 hover:text-green-700 text-gray-600 font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <span>{t('title')}</span>
                        <span>{locale === 'ar' ? '←' : '→'}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
