'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function AppHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'الرئيسية' },
        { href: '/vision', label: 'الرؤية' },
        { href: '/methodology', label: 'المنهجية' },
        { href: '/about', label: 'من نحن' },
        { href: '/legal', label: 'الإطار القانوني' },
    ];

    return (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.jpg"
                            alt="شعار المبادرة"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900">مبادرة بلاغ</span>
                            <span className="text-xs text-gray-600">لمكافحة خطاب الكراهية</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="القائمة"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
