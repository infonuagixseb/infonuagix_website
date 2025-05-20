import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // This means the default locale (e.g., 'en') won't have a prefix
});

export const config = {
  // Match only internationalized pathnames
  // Skip middleware for api, _next, static files, and files with extensions (e.g. favicon.ico)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};
