'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import { newsItems, NEWS_CATEGORIES } from '../../../data/news';

export default function NewsPage() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredNews = selectedCategory
        ? newsItems.filter(item => item.category === selectedCategory)
        : newsItems;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        📰 الأخبار والأنشطة
                    </h1>
                    <p className="text-xl text-green-50 max-w-3xl mx-auto">
                        تابع آخر أنشطتنا وفعالياتنا في مجال مكافحة خطاب الكراهية وتعزيز السلم المجتمعي
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === null
                                ? 'bg-green-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            📋 الكل
                        </button>
                        {Object.entries(NEWS_CATEGORIES).map(([key, cat]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedCategory(key)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === key
                                    ? 'bg-green-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {cat.icon} {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-6">
                    {filteredNews.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">لا توجد أخبار في هذا التصنيف حالياً</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredNews.map((item) => {
                                const category = NEWS_CATEGORIES[item.category];
                                return (
                                    <article
                                        key={item.id}
                                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 flex flex-col"
                                    >
                                        {/* Image */}
                                        {item.image && (
                                            <div className="relative h-48 bg-gray-200 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

                                        {/* Category Badge */}
                                        <div className="p-4 pb-0">
                                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-${category.color}-100 text-${category.color}-700`}>
                                                <span>{category.icon}</span>
                                                <span>{category.label}</span>
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 flex-1 flex flex-col">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                                                <span>📅</span>
                                                <span>{formatDate(item.date)}</span>
                                            </p>
                                            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                                                {item.description}
                                            </p>

                                            {/* Tags */}
                                            {item.tags && item.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mb-3">
                                                    {item.tags.slice(0, 3).map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Read More Button */}
                                            <button
                                                onClick={() => router.push(`/ar/news/${item.id}`)}
                                                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all text-sm"
                                            >
                                                اقرأ المزيد ←
                                            </button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <AppFooter />
        </div>
    );
}
