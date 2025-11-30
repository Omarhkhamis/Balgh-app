'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function AppHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations('header');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: `/${locale}/legal`, label: t('nav.legal'), icon: '⚖️', description: locale === 'ar' ? 'آليات التبليغ وفق القانون' : 'Legal reporting mechanisms' },
        { href: `/${locale}/protection`, label: t('nav.protection'), icon: '🛡️', description: locale === 'ar' ? 'كيف تحمي نفسك رقمياً' : 'Digital safety guide' },
        { href: `/${locale}/training`, label: t('nav.training'), icon: '🎓', description: locale === 'ar' ? 'ورش عمل وتدريبات' : 'Workshops and training' },
        { href: `/${locale}/faq`, label: t('nav.faq'), icon: '❓', description: locale === 'ar' ? 'إجابات على أسئلتك' : 'Answers to your questions' },
    ];

    // Full nav links for mobile menu (includes all pages)
    const mobileNavLinks = [
        { href: `/${locale}`, label: t('nav.home'), icon: '🏠', description: locale === 'ar' ? 'الصفحة الرئيسية' : 'Home Page' },
        { href: `/${locale}/about`, label: t('topBar.about'), icon: '👤', description: locale === 'ar' ? 'من نحن' : 'About Us' },
        { href: `/${locale}/vision`, label: t('topBar.vision'), icon: '🎯', description: locale === 'ar' ? 'رؤيتنا' : 'Our Vision' },
        { href: `/${locale}/methodology`, label: t('topBar.methodology'), icon: '🧭', description: locale === 'ar' ? 'المنهجية' : 'Methodology' },
        { href: `/${locale}/legal`, label: t('nav.legal'), icon: '⚖️', description: locale === 'ar' ? 'الإطار القانوني' : 'Legal Framework' },
        { href: `/${locale}/protection`, label: t('nav.protection'), icon: '🛡️', description: locale === 'ar' ? 'الحماية الرقمية' : 'Digital Protection' },
        { href: `/${locale}/training`, label: t('nav.training'), icon: '🎓', description: locale === 'ar' ? 'التدريب' : 'Training' },
        { href: `/${locale}/news`, label: t('nav.news'), icon: '📰', description: locale === 'ar' ? 'الأخبار' : 'News' },
        { href: `/${locale}/faq`, label: t('nav.faq'), icon: '❓', description: locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' },
    ];

    const isActive = (href: string) => {
        if (href === `/${locale}`) {
            return pathname === href || pathname === `/${locale}/`;
        }
        return pathname === href;
    };

    return (
        <header className={`sticky top-0 z-50 bg-white transition-shadow border-b border-gray-100 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
            <div className="container mx-auto px-6">
                <div className={`flex items-center justify-between ${locale === 'en' ? 'flex-row-reverse' : 'flex-row'}`} style={{ height: '60px' }}>
                    {/* Brand Text Only - Enhanced */}
                    <Link href={`/${locale}/`} className={`flex items-center gap-4 hover:opacity-80 transition-all ${locale === 'en' ? 'flex-row-reverse' : ''}`}>
                        <span className="text-2xl md:text-5xl font-bold" style={{ color: '#1E8C4E' }}>
                            بَلِّغ
                        </span>
                        <span className="hidden md:block text-base text-gray-600 font-medium">
                            {t('brand.subtitle')}
                        </span>
                    </Link>

                    {/* Desktop: Language Switcher Only - Enhanced */}
                    <div className="hidden xl:flex items-center gap-3">
                        <button
                            onClick={() => {
                                const newLocale = locale === 'ar' ? 'en' : 'ar';
                                const currentPath = window.location.pathname.replace(`/${locale}`, '');
                                window.location.replace(`/${newLocale}${currentPath || '/'}`);
                            }}
                            className="px-4 py-2 rounded-lg text-sm font-bold text-green-600 hover:text-green-700 transition-colors flex items-center gap-2 hover:bg-green-50"
                            title={locale === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            <span>{locale === 'ar' ? 'EN' : 'AR'}</span>
                        </button>
                    </div>

                    {/* Mobile/Tablet: Menu Button only on mobile, CTA on tablet+ */}
                    <div className="flex xl:hidden items-center gap-3">
                        <Link
                            href={`/${locale}/#analyze`}
                            className="hidden md:block px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-white text-sm md:text-base transition-all hover:shadow-xl shadow-md"
                            style={{ backgroundColor: '#1E8C4E' }}
                        >
                            {t('cta')}
                        </Link>

                        {/* Menu Button - Reduced size */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2.5 rounded-full transition-all hover:bg-gray-100"
                            style={{ backgroundColor: '#F4F6F9' }}
                            aria-label={t('menuLabel')}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Secondary Navigation Bar - Hidden on mobile */}
            <div className="hidden md:block border-t border-gray-100 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center gap-2 py-4 flex-wrap">
                        {[
                            { href: `/${locale}/about`, label: t('topBar.about'), icon: '👤' },
                            { href: `/${locale}/vision`, label: t('topBar.vision'), icon: '🎯' },
                            { href: `/${locale}/methodology`, label: t('topBar.methodology'), icon: '🧭' },
                            { href: `/${locale}/legal`, label: t('nav.legal'), icon: '⚖️' },
                            { href: `/${locale}/protection`, label: t('nav.protection'), icon: '🛡️' },
                            { href: `/${locale}/training`, label: t('nav.training'), icon: '🎓' },
                            { href: `/${locale}/news`, label: t('nav.news'), icon: '📰' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${isActive(link.href)
                                    ? 'text-green-700 bg-green-50 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="text-lg">{link.icon}</span>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer - Enhanced */}
            {isMenuOpen && (
                <nav
                    className="xl:hidden fixed inset-0 bg-white z-40 overflow-y-auto animate-fade-in"
                    style={{ top: '141px', paddingTop: '24px', paddingBottom: '24px' }}
                >
                    <div className="flex flex-col">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 left-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Menu Heading */}
                        <div className="px-6 mb-6 mt-12">
                            <h3 className="text-lg font-bold text-gray-900">{locale === 'ar' ? 'القائمة الرئيسية' : 'Main Menu'}</h3>
                        </div>

                        {/* Main Services */}
                        <div className="mb-4">
                            {mobileNavLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-start gap-4 px-6 py-4 transition-all ${isActive(link.href)
                                        ? 'bg-green-50 border-r-4 border-green-600'
                                        : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="text-2xl flex-shrink-0">{link.icon}</span>
                                    <div className="flex-1">
                                        <div className={`text-base font-semibold ${isActive(link.href) ? 'text-green-700' : 'text-gray-900'}`}>
                                            {link.label}
                                        </div>
                                        <div className="text-sm text-gray-600 mt-0.5">
                                            {link.description}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="mx-6 my-4 border-t border-gray-200"></div>

                        {/* Language Switcher for Mobile */}
                        <div className="px-6 mb-4">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                {locale === 'ar' ? 'اللغة' : 'Language'}
                            </p>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}
