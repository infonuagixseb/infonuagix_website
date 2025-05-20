
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css'; // Path relative to this file
import { Toaster } from "@/components/ui/toaster";
import {NextIntlClientProvider} from 'next-intl';
// Removed: import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

// Hardcoded for diagnostic purposes
const locales = ['en', 'fr'];


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Removed generateMetadata function for this diagnostic step.
// export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
//   console.log(`[generateMetadata] Called for locale: ${locale}`);
//   if (!locales.includes(locale)) {
//     console.log(`[generateMetadata] Locale ${locale} not found, calling notFound().`);
//     notFound();
//   }

//   try {
//     const t = await getTranslations({locale, namespace: 'Metadata'});
//     console.log(`[generateMetadata] Successfully got translations for ${locale}. Title: ${t('title')}`);
//     return {
//       title: t('title'),
//       description: t('description'),
//     };
//   } catch (e) {
//     console.error(`[generateMetadata] Error getting translations for locale ${locale}:`, e);
//     return {
//       title: "Error loading title (generateMetadata catch)",
//       description: "Error loading description (generateMetadata catch)",
//     };
//   }
// }

interface RootLayoutProps {
  children: React.ReactNode;
  params: {locale: string};
}

export default function RootLayout({ // Removed async as getMessages is no longer awaited here
  children,
  params: {locale}
}: Readonly<RootLayoutProps>) {
  console.log(`[RootLayout] Rendering for locale: ${locale}`);
  if (!locales.includes(locale)) {
    console.log(`[RootLayout] Locale ${locale} not found, calling notFound().`);
    notFound();
  }
  
  // Directly hardcoding messages for NextIntlClientProvider
  const messages = {
    Metadata: {
      title: "UltraMinimal EN Title (Directly Hardcoded)",
      description: "UltraMinimal EN Description (Directly Hardcoded)."
    },
    Header: {
      contactUs: "UltraMinimal Contact Us (Directly Hardcoded)",
      getAQuote: "UltraMinimal Get a Quote (Directly Hardcoded)"
    },
    HeroSection: {
      titlePart1: "UltraMinimal Innovative Web & Mobile Solutions, (Directly Hardcoded)",
      titlePart2: "UltraMinimal Crafted with Vibe. (Directly Hardcoded)",
      description: "UltraMinimal English hero description. (Directly Hardcoded)",
      ourServices: "UltraMinimal Our Services (Directly Hardcoded)",
      requestAQuote: "UltraMinimal Request a Quote (Directly Hardcoded)"
    },
    Footer: {
      copyright: "UltraMinimal © {currentYear} Infonuagix. All rights reserved. (Directly Hardcoded)",
      operatingTime: "UltraMinimal Operating in EST. Current EST: {estTime} (Directly Hardcoded)"
    },
    LanguageSwitcher: {
      changeLanguage: "UltraMinimal Change language (Directly Hardcoded)",
      english: "UltraMinimal English (Directly Hardcoded)",
      french: "UltraMinimal French (Directly Hardcoded)"
    },
    Chatbot: {
      initialGreeting: "UltraMinimal Hello! English greeting. (Directly Hardcoded)"
    }
  };
  console.log(`[RootLayout] Using DIRECTLY HARDCODED messages for locale ${locale}.`);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
