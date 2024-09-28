import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Keep the allowedLocales as readonly
  const allowedLocales = routing.locales as readonly ['en', 'ar'];

  if (!allowedLocales.includes(locale as 'en' | 'ar')) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
