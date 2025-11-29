'use client';

import { useLocale } from 'next-intl';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    icon?: string;
}

export default function PageHero({ title, subtitle, icon }: PageHeroProps) {
    const locale = useLocale();

    return (
        <div className="bg-gradient-to-br from-green-50 via-blue-50 to-white border-b border-gray-100">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto text-center">
                    {icon && (
                        <div className="text-6xl mb-4 animate-scale-in">
                            {icon}
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
