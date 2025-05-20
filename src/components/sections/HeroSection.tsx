import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('HeroSection');
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              {t('titlePart1')}
              <span className="block text-foreground">{t('titlePart2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#services">{t('ourServices')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Link href="#contact">{t('requestAQuote')}</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="https://static.wixstatic.com/media/967757_638a08988b54477ebb8d3617b9af8890~mv2.jpg/v1/fill/w_404,h_531,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SGP_9296_ppSoniaGuertin.jpg"
              alt="Portrait of Sonia Guertin"
              width={404}
              height={531}
              className="rounded-lg shadow-2xl"
              data-ai-hint="portrait person"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
