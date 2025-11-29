'use client';

import { useParams, useRouter } from 'next/navigation';
import AppHeader from '../../../../components/AppHeader';
import AppFooter from '../../../../components/AppFooter';
import { newsItems, NEWS_CATEGORIES } from '../../../../data/news';

export default function NewsDetailPage() {
    const params = useParams();
    const router = useRouter();
    const newsId = parseInt(params.id as string);

    const newsItem = newsItems.find(item => item.id === newsId);

    if (!newsItem) {
        return (
            <div className="min-h-screen bg-gray-50">
                <AppHeader />
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">الخبر غير موجود</h1>
                    <p className="text-gray-600 mb-6">عذراً، لم نتمكن من العثور على هذا الخبر</p>
                    <button
                        onClick={() => router.push('/ar/news')}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
                    >
                        العودة للأخبار
                    </button>
                </div>
                <AppFooter />
            </div>
        );
    }

    const category = NEWS_CATEGORIES[newsItem.category];

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            {/* Hero Image */}
            {newsItem.image && (
                <div className="relative h-96 bg-gray-900 overflow-hidden">
                    <img
                        src={newsItem.image}
                        alt={newsItem.title}
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
            )}

            {/* Content */}
            <article className="max-w-4xl mx-auto px-6 py-12">
                {/* Back Button */}
                <button
                    onClick={() => router.push('/ar/news')}
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6 transition-colors"
                >
                    <span>←</span>
                    <span>العودة للأخبار</span>
                </button>

                {/* Category Badge */}
                <div className="mb-4">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-${category.color}-100 text-${category.color}-700`}>
                        <span className="text-lg">{category.icon}</span>
                        <span>{category.label}</span>
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {newsItem.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span>{formatDate(newsItem.date)}</span>
                    </div>
                    {newsItem.author && (
                        <div className="flex items-center gap-2">
                            <span>✍️</span>
                            <span>{newsItem.author}</span>
                        </div>
                    )}
                </div>

                {/* Video Section */}
                {newsItem.videoUrl && (
                    <div className="mb-8">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                src={newsItem.videoUrl}
                                title={newsItem.title}
                                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="text-gray-800 leading-relaxed whitespace-pre-line text-lg">
                        {newsItem.content}
                    </div>
                </div>

                {/* Tags */}
                {newsItem.tags && newsItem.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-sm font-bold text-gray-700 mb-3">الوسوم:</h3>
                        <div className="flex flex-wrap gap-2">
                            {newsItem.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">شارك هذا الخبر</h3>
                    <div className="flex gap-3">
                        <button
                            onClick={() => {
                                const url = window.location.href;
                                const text = `${newsItem.title}\n\n`;
                                if (navigator.share) {
                                    navigator.share({ title: newsItem.title, text, url });
                                } else {
                                    navigator.clipboard.writeText(url);
                                    alert('تم نسخ الرابط!');
                                }
                            }}
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all text-sm"
                        >
                            📤 مشاركة
                        </button>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert('تم نسخ الرابط!');
                            }}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-all text-sm"
                        >
                            🔗 نسخ الرابط
                        </button>
                    </div>
                </div>

                {/* Back to News Button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => router.push('/ar/news')}
                        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
                    >
                        عرض المزيد من الأخبار
                    </button>
                </div>
            </article>

            <AppFooter />
        </div>
    );
}
