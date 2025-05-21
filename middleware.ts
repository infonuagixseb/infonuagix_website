
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n'; // Import from root i18n.ts

console.log('[Middleware] Attempting to use locales from root i18n.ts:', locales);
console.log('[Middleware] Attempting to use defaultLocale from root i18n.ts:', defaultLocale);

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  // Explicitly provide empty pathnames and disable localeDetection
  // to minimize middleware's reliance on auto-detecting these from a config file.
  pathnames: {},
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  // Skip middleware for api, _next, static files, and files with extensions (e.g. favicon.ico)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};
