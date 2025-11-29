'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AppFooter() {
    const locale = useLocale();

    const quickLinks = [
        { href: `/${locale}/about`, label: locale === 'ar' ? 'من نحن' : 'About Us' },
        { href: `/${locale}/vision`, label: locale === 'ar' ? 'الرؤية' : 'Vision' },
        { href: `/${locale}/methodology`, label: locale === 'ar' ? 'المنهجية' : 'Methodology' },
        { href: `/${locale}/legal`, label: locale === 'ar' ? 'الحماية القانونية' : 'Legal Protection' },
    ];

    const servicesLinks = [
        { href: `/${locale}/protection`, label: locale === 'ar' ? 'الحماية الرقمية' : 'Digital Protection' },
        { href: `/${locale}/monitoring`, label: locale === 'ar' ? 'التقارير' : 'Monitoring' },
        { href: `/${locale}/training`, label: locale === 'ar' ? 'التدريبات' : 'Training' },
        { href: `/${locale}/faq`, label: locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' },
    ];

    return (
        <footer className="bg-gray-900 text-white mt-16">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-3xl font-bold mb-4" style={{ color: '#1E8C4E' }}>
                            بَلِّغ
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            {locale === 'ar'
                                ? 'مبادرة مستقلة لمكافحة خطاب الكراهية والعنف في الفضاء الرقمي السوري'
                                : 'Independent initiative to counter hate speech and violence in Syrian digital space'
                            }
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/reportHS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/report.hs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 transition-colors flex items-center justify-center"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">{locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-green-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">{locale === 'ar' ? 'خدماتنا' : 'Our Services'}</h4>
                        <ul className="space-y-2">
                            {servicesLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-green-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">{locale === 'ar' ? 'اتصل بنا' : 'Contact Us'}</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-2">
                                <span>📧</span>
                                <a href="mailto:info@balagh.org" className="hover:text-green-400 transition-colors">
                                    info@balagh.org
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>📱</span>
                                <span>{locale === 'ar' ? 'وسائل التواصل الاجتماعي' : 'Social Media'}</span>
                            </li>
                        </ul>
                        <Link
                            href={`/${locale}/#analyze`}
                            className="mt-4 inline-block px-6 py-2.5 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
                            style={{ backgroundColor: '#1E8C4E' }}
                        >
                            {locale === 'ar' ? 'ابدأ التحليل' : 'Start Analysis'}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            {locale === 'ar'
                                ? '© 2024 مبادرة مكافحة خطاب العنف والكراهية - جميع الحقوق محفوظة'
                                : '© 2024 Counter Hate Speech and Violence Initiative - All Rights Reserved'
                            }
                        </p>
                        <div className="flex gap-4 text-sm">
                            <Link href={`/${locale}/legal`} className="text-gray-500 hover:text-green-400 transition-colors">
                                {locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                            </Link>
                            <Link href={`/${locale}/faq`} className="text-gray-500 hover:text-green-400 transition-colors">
                                {locale === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
