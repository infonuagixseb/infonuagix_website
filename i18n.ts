// i18n.ts (ROOT) - EXTREMELY MINIMAL DIAGNOSTIC for middleware
console.log('[i18n-EXTREME-MINIMAL-ROOT] ROOT i18n.ts FILE LOADED. Only exporting locales/defaultLocale.');

export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en' as const;

// For this specific diagnostic test, we are NOT exporting getRequestConfig.
// The goal is to see if the middleware can operate with the simplest possible i18n file.
