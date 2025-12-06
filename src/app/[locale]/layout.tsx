import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '../../i18n.config';
import '../globals.css';

type LayoutParams = { locale: Locale };
type LayoutProps = {
    children: ReactNode;
    // Next.js provides params as a Promise in app layouts
    params: Promise<LayoutParams>;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps) {
    const { locale } = await params;
    const messages = await getMessages({ locale }) as Record<string, unknown>;

    return {
        title: (messages.metadata as Record<string, string>)?.title || 'А?Б?Б?А? - Б?А?А?А?А?А? Б?Б?А?Б?А?А? А?АЗА?А? А?Б?А?Б?Б? Б?А?Б?Б?А?А?Б?Б?А?',
        description: (messages.metadata as Record<string, string>)?.description || 'А°А?А?А? А?А?Б?Б?Б? А?А?А?Б?А? А?Б?Б? А?Б?АЬБ?А?А? А?Б?А?АФАЗБ?А?А?Б?',
    };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
    const { locale: requestedLocale } = await params;

    // Fallback gracefully in root layout (notFound not allowed)
    const locale = locales.includes(requestedLocale) ? requestedLocale : 'ar';

    // Scope SSR to the requested/fallback locale before reading messages
    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <body className="antialiased bg-gray-50 text-gray-900 font-sans">
                <div className="bg-noise"></div>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
