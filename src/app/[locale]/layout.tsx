import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Head } from 'next/document';

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
            <Head>
                <meta name="google-site-verification" content="ymYfjvSdKiU-l4BrhY98KgFhOGRcRpehbUUsIKvpaW8" />            </Head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}