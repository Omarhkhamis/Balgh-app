'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function HeroSection() {
    const locale = useLocale();
    const t = useTranslations('landing.hero');

    return (
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white px-4 py-16 overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}></div>

            <div className="container mx-auto max-w-5xl text-center relative z-10">
                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                    {t('title')}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    {t('subtitle')}
                </p>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    {/* Primary CTA - Gradient with Icon */}
                    <Link
                        href={`/${locale}/analyze`}
                        className="group px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3"
                    >
                        <span className="text-xl">⚡</span>
                        <span>{t('cta1')}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>

                    {/* Secondary CTA - Outlined with Icon */}
                    <a
                        href="#services"
                        className="group px-10 py-5 bg-white hover:bg-gray-50 text-green-600 font-bold text-lg rounded-xl border-2 border-green-600 hover:border-green-700 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
                    >
                        <span>{t('cta2')}</span>
                        <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>

                {/* Enhanced Trust Indicators - Card Style */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {/* Card 1: AI */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl mb-3">🤖</div>
                        <h3 className="font-bold text-gray-900 mb-1">ذكاء اصطناعي</h3>
                        <p className="text-sm text-gray-600">تحليل متقدم ودقيق</p>
                    </div>

                    {/* Card 2: Countries */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl mb-3">🌍</div>
                        <h3 className="font-bold text-gray-900 mb-1">9 دول مدعومة</h3>
                        <p className="text-sm text-gray-600">عربية وأوروبية</p>
                    </div>

                    {/* Card 3: Free */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl mb-3">✓</div>
                        <h3 className="font-bold text-gray-900 mb-1">مجاني 100%</h3>
                        <p className="text-sm text-gray-600">آمن ومُشفّر</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
