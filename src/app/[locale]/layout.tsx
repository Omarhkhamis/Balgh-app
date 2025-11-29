import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale } from '../../../i18n.config';
import '../globals.css';

type Props = {
    children: ReactNode;
    params: Promise<{ locale: Locale }>;
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
    const params = await props.params;
    const locale = params.locale;

    // Validate locale - if invalid, default to 'ar'
    const validLocale = locales.includes(locale) ? locale : 'ar';

    const messages = await getMessages({ locale: validLocale });

    return (
        <html lang={validLocale} dir={validLocale === 'ar' ? 'rtl' : 'ltr'}>
            <body className="antialiased bg-gray-50 text-gray-900">
                <NextIntlClientProvider
                    locale={validLocale}
                    messages={messages}
                >
                    {props.children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
