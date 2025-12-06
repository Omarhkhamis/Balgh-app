import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '../../i18n.config';
import '../globals.css';

type Props = {
    children: ReactNode;
    params: Promise<{ locale: Locale }> | { locale: Locale };
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Props) {
    const params = await props.params;
    const messages = await getMessages({ locale: params.locale }) as Record<string, unknown>;

    return {
        title: (messages.metadata as Record<string, string>)?.title || 'بلّغ - مبادرة مكافحة خطاب العنف والكراهية',
        description: (messages.metadata as Record<string, string>)?.description || 'أداة تحليل تعتمد على الذكاء الاصطناعي',
    };
}

export default async function LocaleLayout(props: Props) {
    // Support both promised and plain params (Next passes plain object)
    const resolvedParams = props.params instanceof Promise ? await props.params : props.params;
    const requestedLocale = resolvedParams.locale;

    // Gracefully fallback instead of throwing (notFound not allowed in root layout)
    const locale = locales.includes(requestedLocale) ? requestedLocale : 'ar';

    // Scope SSR to the requested/fallback locale before reading messages
    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <body className={`antialiased bg-gray-50 text-gray-900 font-sans`}>
                <div className="bg-noise"></div>
                <NextIntlClientProvider
                    locale={locale}
                    messages={messages}
                >
                    {props.children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
