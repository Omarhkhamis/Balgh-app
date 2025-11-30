'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { newsItems, NEWS_CATEGORIES } from '@/data/news';

export default function LatestNews() {
    const locale = useLocale();

    // Get latest 3 news items
    const latestNews = newsItems.slice(0, 3);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        آخر الأخبار والموارد
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        تابع آخر التحديثات والموارد التعليمية
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {latestNews.map((item) => {
                        const category = NEWS_CATEGORIES[item.category];
                        return (
                            <Link
                                key={item.id}
                                href={`/${locale}/news/${item.id}`}
                                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image */}
                                {item.image && (
                                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Video Badge */}
                                        {item.videoUrl && (
                                            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                                <span>▶</span>
                                                <span>فيديو</span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category Badge */}
                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-${category.color}-100 text-${category.color}-700`}>
                                        <span>{category.icon}</span>
                                        <span>{category.label}</span>
                                    </span>

                                    {/* Date */}
                                    <div className="text-sm text-gray-500 mb-2">
                                        {formatDate(item.date)}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {item.description}
                                    </p>

                                    {/* Read More */}
                                    <div className="flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                        <span>اقرأ المزيد</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link
                        href={`/${locale}/news`}
                        className="inline-block px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors"
                    >
                        عرض جميع الأخبار →
                    </Link>
                </div>
            </div>
        </section>
    );
}
