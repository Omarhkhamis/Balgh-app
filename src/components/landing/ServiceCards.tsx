'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const services = [
    {
        id: 'legal',
        icon: '⚖️',
        color: 'blue',
        href: '/legal'
    },
    {
        id: 'protection',
        icon: '🛡️',
        color: 'green',
        href: '/protection'
    },
    {
        id: 'training',
        icon: '🎓',
        color: 'orange',
        href: '/training'
    },
    {
        id: 'tool',
        icon: '📊',
        color: 'emerald',
        href: '/analyze'
    }
];

const colorClasses = {
    blue: 'bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700',
    green: 'bg-green-50 hover:bg-green-100 border-green-200 text-green-700',
    orange: 'bg-orange-50 hover:bg-orange-100 border-orange-200 text-orange-700',
    emerald: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700'
};

export default function ServiceCards() {
    const locale = useLocale();
    const t = useTranslations('landing.services');

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
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

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/${locale}${service.href}`}
                            className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${colorClasses[service.color as keyof typeof colorClasses]}`}
                        >
                            {/* Icon */}
                            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-4">
                                {t(`${service.id}.title`)}
                            </h3>

                            {/* Description */}
                            <p className="text-base opacity-90 mb-6 leading-relaxed min-h-[60px]">
                                {t(`${service.id}.description`)}
                            </p>

                            {/* CTA */}
                            <div className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                                <span>{t(`${service.id}.cta`)}</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-4">
                        {t('features')}
                    </p>
                </div>
            </div>
        </section>
    );
}
