import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <head>
                <meta name="google-site-verification" content="ymYfjvSdKiU-l4BrhY98KgFhOGRcRpehbUUsIKvpaW8" />
                <link rel="canonical" href="https://caps-code.vercel.app/en/services" />
                <link rel="canonical" href="https://caps-code.vercel.app/ar/services" />
                <link rel="canonical" href="https://caps-code.vercel.app/en/projects" />
                <link rel="canonical" href="https://caps-code.vercel.app/ar/projects" />
                <link rel="canonical" href="https://caps-code.vercel.app/en/about-us" />
                <link rel="canonical" href="https://caps-code.vercel.app/ar/about-us" />
            </head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}