// src/i18n.ts (Ultra-Ultra-Minimal Diagnostic in SRC)
import {getRequestConfig} from 'next-intl/server';

// This log is CRITICAL. If it doesn't appear in server logs, next-intl is not loading this file.
console.log('[i18n-ULTRA-MINIMAL-SRC] src/i18n.ts FILE LOADED. THIS IS A TEST FROM SRC.');

export default getRequestConfig(() => {
  // This log is also CRITICAL.
  console.log('[i18n-ULTRA-MINIMAL-SRC] getRequestConfig EXECUTED. Serving hardcoded EN messages FROM SRC.');
  
  // Return a minimal structure.
  // No dynamic import, always return English for this diagnostic.
  return {
    messages: {
      Metadata: {
        title: "UltraMinimal EN Title FROM SRC CONFIG",
        description: "UltraMinimal EN Description FROM SRC CONFIG."
      },
      Header: {
        contactUs: "UltraMinimal Contact Us",
        getAQuote: "UltraMinimal Get a Quote"
      },
      HeroSection: {
        titlePart1: "UltraMinimal Innovative Web & Mobile Solutions,",
        titlePart2: "UltraMinimal Crafted with Vibe.",
        description: "UltraMinimal English hero description.",
        ourServices: "UltraMinimal Our Services",
        requestAQuote: "UltraMinimal Request a Quote"
      },
      Footer: {
        copyright: "UltraMinimal © {currentYear} Infonuagix. All rights reserved.",
        operatingTime: "UltraMinimal Operating in EST. Current EST: {estTime}"
      },
      LanguageSwitcher: {
        changeLanguage: "UltraMinimal Change language",
        english: "UltraMinimal English",
        french: "UltraMinimal French"
      },
      Chatbot: {
        initialGreeting: "UltraMinimal Hello! English greeting."
      }
    }
  };
});
