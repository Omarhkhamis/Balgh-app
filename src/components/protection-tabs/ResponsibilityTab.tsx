'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Icons
const IconHeart = () => (
    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const IconStop = () => (
    <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);

const IconCommunity = () => (
    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export default function ResponsibilityTab() {
    const t = useTranslations('protection.content.responsibility');

    return (
        <div className="space-y-16">
            {/* Introduction */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                    {t('intro')}
                </p>
            </div>

            {/* Section 1: Protect Others */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-green-100 p-3 rounded-xl">
                        <IconHeart />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('protectOthers.title')}
                    </h3>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t('protectOthers.intro')}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all text-center group">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
                            <span className="text-4xl">💚</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{t('protectOthers.support.title')}</h4>
                        <p className="text-gray-600 leading-relaxed">
                            {t('protectOthers.support.desc')}
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all text-center group">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
                            <span className="text-4xl">📢</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{t('protectOthers.reporting.title')}</h4>
                        <p className="text-gray-600 leading-relaxed">
                            {t('protectOthers.reporting.desc')}
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-r-4 border-green-500">
                    <p className="text-green-900 text-lg font-medium leading-relaxed">
                        {t('protectOthers.note')}
                    </p>
                </div>
            </section>

            {/* Section 2: Don't Be a Bystander */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-orange-100 p-3 rounded-xl">
                        <IconStop />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('bystander.title')}
                    </h3>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t('bystander.intro')}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:shadow-md transition-all text-center">
                        <span className="text-5xl mb-4 block">🛑</span>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{t('bystander.stop.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('bystander.stop.desc')}</p>
                    </div>
                    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:shadow-md transition-all text-center">
                        <span className="text-5xl mb-4 block">⚠️</span>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{t('bystander.warn.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('bystander.warn.desc')}</p>
                    </div>
                    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:shadow-md transition-all text-center">
                        <span className="text-5xl mb-4 block">✨</span>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{t('bystander.positive.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('bystander.positive.desc')}</p>
                    </div>
                </div>

                <div className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-xl">
                    <p className="text-orange-900 text-lg italic font-medium">
                        {t('bystander.note')}
                    </p>
                </div>
            </section>

            {/* Section 3: Make Space Safe */}
            <section className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-purple-100 p-3 rounded-xl">
                        <IconCommunity />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {t('safeSpace.title')}
                    </h3>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t('safeSpace.intro')}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all text-center">
                        <span className="text-6xl mb-6 block">🛑</span>
                        <p className="text-gray-800 font-bold text-lg">{t('safeSpace.reduce')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all text-center">
                        <span className="text-6xl mb-6 block">📚</span>
                        <p className="text-gray-800 font-bold text-lg">{t('safeSpace.share')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all text-center">
                        <span className="text-6xl mb-6 block">💚</span>
                        <p className="text-gray-800 font-bold text-lg">{t('safeSpace.create')}</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-10 rounded-2xl text-white text-center shadow-lg">
                    <p className="text-2xl leading-relaxed font-bold opacity-90">
                        "{t('safeSpace.quote')}"
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl text-center shadow-lg text-white">
                <h3 className="text-3xl font-bold mb-6">{t('cta.title')}</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t('cta.desc')}</p>
                <Link
                    href="/#analyze"
                    className="inline-block bg-[#1E8C4E] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#166639] hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                    {t('cta.button')}
                </Link>
            </div>
        </div>
    );
}
