'use client';

import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import PageHero from '../../../components/PageHero';
import { useTranslations, useLocale } from 'next-intl';

// Icons
const IconGraduation = () => (
    <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
);

const IconChart = () => (
    <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const IconShield = () => (
    <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const IconSearch = () => (
    <svg className="w-12 h-12 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const IconSparkles = () => (
    <svg className="w-12 h-12 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

const IconFaceToFace = () => (
    <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const IconOnline = () => (
    <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const IconLightning = () => (
    <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const IconTarget = () => (
    <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export default function TrainingPage() {
    const t = useTranslations('training');
    const locale = useLocale();

    const programs = [
        {
            icon: IconGraduation,
            key: 'hateSpeech',
            color: 'blue'
        },
        {
            icon: IconChart,
            key: 'narrative',
            color: 'green'
        },
        {
            icon: IconShield,
            key: 'digitalProtection',
            color: 'purple'
        },
        {
            icon: IconSearch,
            key: 'monitoring',
            color: 'orange'
        },
        {
            icon: IconSparkles,
            key: 'counterSpeech',
            color: 'pink'
        }
    ];

    const formats = [
        { icon: IconFaceToFace, key: 'faceToFace' },
        { icon: IconOnline, key: 'online' },
        { icon: IconLightning, key: 'shortSessions' },
        { icon: IconTarget, key: 'trainers' }
    ];

    const audiences = ['civilSociety', 'media', 'youth'];

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <AppHeader />

            <PageHero
                icon="🎓"
                title={t('title')}
                subtitle={t('subtitle')}
            />

            <main className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto space-y-20">

                    {/* Quote */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-10 rounded-3xl border border-green-100 text-center shadow-sm">
                        <p className="text-2xl font-bold text-gray-800 leading-relaxed italic">
                            &quot;{t('quote')}&quot;
                        </p>
                    </div>

                    {/* Programs */}
                    <div>
                        <div className="flex items-center gap-4 mb-10 justify-center">
                            <span className="bg-blue-100 p-3 rounded-xl text-2xl">📚</span>
                            <h2 className="text-4xl font-bold text-gray-900">{t('programsTitle')}</h2>
                        </div>
                        <div className="grid gap-8">
                            {programs.map((program, index) => (
                                <div key={index} className={`bg-white p-8 rounded-2xl shadow-sm border border-${program.color}-100 hover:shadow-lg hover:border-${program.color}-300 transition-all group`}>
                                    <div className="flex flex-col md:flex-row items-start gap-8">
                                        <div className={`bg-${program.color}-50 p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                                            <program.icon />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1E8C4E] transition-colors">
                                                {t(`programs.${program.key}.title`)}
                                            </h3>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {t(`programs.${program.key}.description`)}
                                            </p>
                                            <div className="flex flex-wrap gap-6 text-sm">
                                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                                                    <span className="text-xl">⏱️</span>
                                                    <div>
                                                        <span className="font-bold text-gray-900 block">{t('durationLabel')}</span>
                                                        <span className="text-gray-600">{t(`programs.${program.key}.duration`)}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                                                    <span className="text-xl">👥</span>
                                                    <div>
                                                        <span className="font-bold text-gray-900 block">{t('targetLabel')}</span>
                                                        <span className="text-gray-600">{t(`programs.${program.key}.target`)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Training Formats */}
                    <div>
                        <div className="flex items-center gap-4 mb-10 justify-center">
                            <span className="bg-purple-100 p-3 rounded-xl text-2xl">🛠️</span>
                            <h2 className="text-4xl font-bold text-gray-900">{t('formatsTitle')}</h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6">
                            {formats.map((format, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all">
                                    <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <format.icon />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t(`formats.${format.key}.title`)}</h3>
                                    <p className="text-gray-600">{t(`formats.${format.key}.desc`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Target Audience */}
                    <div>
                        <div className="flex items-center gap-4 mb-10 justify-center">
                            <span className="bg-orange-100 p-3 rounded-xl text-2xl">🎯</span>
                            <h2 className="text-4xl font-bold text-gray-900">{t('audienceTitle')}</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {audiences.map((audienceKey, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                                        {t(`audience.${audienceKey}.title`)}
                                    </h3>
                                    <ul className="space-y-4">
                                        {(t.raw(`audience.${audienceKey}.items`) as string[]).map((item: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</span>
                                                <span className="mt-0.5">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Important */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('importanceTitle')}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {(t.raw('importance') as string[]).map((item: string, index: number) => (
                                <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                                    <span className="text-green-600 text-2xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-[#1E8C4E] to-[#166639] p-12 rounded-3xl text-center shadow-lg text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/pattern.svg')]"></div>
                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold mb-6">{t('ctaTitle')}</h3>
                            <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">{t('ctaSubtitle')}</p>
                            <a href="mailto:info@balagh.org" className="inline-block bg-white text-[#1E8C4E] px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-50 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                {t('ctaButton')}
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <AppFooter />
        </div>
    );
}
