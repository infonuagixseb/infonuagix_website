
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server'; // Restored
import {notFound} from 'next/navigation';
import { locales } from '@/i18n'; // Import locales from the central i18n config

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Restored generateMetadata function
export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  if (!locales.includes(locale)) {
    notFound();
  }

  try {
    const t = await getTranslations({locale, namespace: 'Metadata'});
    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (e) {
    console.error(`[generateMetadata] Error getting translations for locale ${locale}:`, e);
    // Fallback metadata in case of an error
    return {
      title: "Error loading title",
      description: "Error loading description",
    };
  }
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {locale: string};
}

export default async function RootLayout({ // Made async
  children,
  params: {locale}
}: Readonly<RootLayoutProps>) {
  if (!locales.includes(locale)) {
    notFound();
  }
  
  let messages;
  try {
    messages = await getMessages({locale}); // Load messages dynamically
  } catch (error) {
    console.error("[RootLayout] Error fetching messages:", error);
    notFound(); // Or handle appropriately, e.g. show a generic error page
  }

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}> {/* Use fetched messages */}
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
