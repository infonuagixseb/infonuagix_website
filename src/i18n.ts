import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
// Import configuration from the root i18n.ts, used by middleware.
import {locales as rootLocales, defaultLocale as rootDefaultLocale} from '../i18n';

// Make locales available for components importing from @/i18n (e.g. LanguageSwitcher)
export const locales = rootLocales;
export const defaultLocale = rootDefaultLocale;

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid according to the known locales
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale, // Add the locale to the returned object
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
