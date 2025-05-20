import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://static.wixstatic.com/media/967757_d58505fbfb944815b9e2072ccb7fd2d1~mv2.png/v1/fill/w_200,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/new_logo2.png"
            alt="Infonuagix Logo"
            width={160}
            height={64}
            priority
            className="h-10 w-auto sm:h-12"
            data-ai-hint="logo cloud"
          />
        </Link>
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <LanguageSwitcher />
          <Button asChild variant="ghost">
            <Link href="#contact">{t('contactUs')}</Link>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">{t('getAQuote')}</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
