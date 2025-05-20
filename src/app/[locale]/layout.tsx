import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css'; // Path relative to this file
import { Toaster } from "@/components/ui/toaster";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { locales } from '@/i18n';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  if (!locales.includes(locale)) {
    notFound();
  }
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t('title'),
    description: t('description'),
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {locale: string};
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<RootLayoutProps>) {
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

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
