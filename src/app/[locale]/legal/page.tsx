'use client';

import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import LegalTabs from '../../../components/LegalTabs';
import PageHero from '../../../components/PageHero';
import { useTranslations } from 'next-intl';

export default function LegalPage() {
    const t = useTranslations('legal');

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <AppHeader />

            <PageHero
                icon="⚖️"
                title={t('title')}
                subtitle={t('description')}
            />

            <main className="container mx-auto px-4 py-16">
                <LegalTabs />
            </main>

            <AppFooter />
        </div>
    );
}
