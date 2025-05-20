
import createMiddleware from 'next-intl/middleware';

// Hardcoded for diagnostic purposes
const locales = ['en', 'fr'];
const defaultLocale = 'en';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
  // Removed explicit pathnames: {}
  // Removed explicit localeDetection: false 
  // Let next-intl use its defaults, which might involve reading i18n.ts
});

export const config = {
  // Match only internationalized pathnames
  // Skip middleware for api, _next, static files, and files with extensions (e.g. favicon.ico)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};
