'use client';

import AppHeader from '../../../components/AppHeader';
import LegalTabs from '../../../components/LegalTabs';
import { useTranslations } from 'next-intl';

export default function LegalPage() {
    const t = useTranslations('legal');

    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            {/* Hero Section */}
            <section className="py-16 bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        ⚖️ {t('title')}
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
                        {t('description')}
                    </p>
                </div>
            </section>

            {/* Tabbed Content */}
            <main className="py-12">
                <LegalTabs />
            </main>
        </div>
    );
}
