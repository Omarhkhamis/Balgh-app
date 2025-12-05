'use client';

import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import ProtectionTabs from '../../../components/ProtectionTabs';
import PageHero from '../../../components/PageHero';
import { useTranslations } from 'next-intl';

export default function ProtectionPage() {
    const t = useTranslations('protection');

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <AppHeader />

            <PageHero
                icon="🛡️"
                title={t('title')}
                subtitle={t('subtitle')}
            />

            <main className="container mx-auto px-4 py-16">
                <ProtectionTabs />
            </main>

            <AppFooter />
        </div>
    );
}
