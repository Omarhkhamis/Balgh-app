'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function FinalCTA() {
    const locale = useLocale();
    const t = useTranslations('landing.finalCta');

    return (
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        {t('title')}
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* Primary CTA */}
                        <Link
                            href={`/${locale}/analyze`}
                            className="px-8 py-4 bg-white hover:bg-gray-100 text-green-700 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                        >
                            {t('primaryButton')} {locale === 'ar' ? '←' : '→'}
                        </Link>

                        {/* Secondary CTA */}
                        <Link
                            href={`/${locale}/about`}
                            className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                        >
                            {t('secondaryButton')}
                        </Link>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-12 flex items-center justify-center gap-2 text-green-100">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{t('trustBadge')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
