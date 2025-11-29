'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleLanguageSwitch = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';
        const currentPath = window.location.pathname.replace(`/${locale}`, '');

        // Force full page reload to ensure proper direction change
        window.location.replace(`/${newLocale}${currentPath || '/'}`);
    };

    return (
        <button
            onClick={handleLanguageSwitch}
            disabled={isPending}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 hover:bg-green-200 transition-colors font-medium text-sm border border-green-300"
            style={{ color: '#2A8F5A' }}
            title={locale === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
        >
            {locale === 'ar' ? (
                <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span className="font-bold">English</span>
                </>
            ) : (
                <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span className="font-bold">العربية</span>
                </>
            )}
        </button>
    );
}
