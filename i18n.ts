
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// Define locales and default locale
export const locales = ['en', 'fr'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Dynamically import messages based on locale
  // The `@/` alias should still point to the `src` directory
  return {
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});
