'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  const [estTime, setEstTime] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    const updateEstTime = () => {
      const now = new Date();
      const estFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setEstTime(estFormatter.format(now));
    };

    updateEstTime();
    setCurrentYear(new Date().getFullYear());
    const intervalId = setInterval(updateEstTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="py-8 bg-secondary text-secondary-foreground">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          {currentYear !== null ? t('copyright', {currentYear}) : 'Loading...'}
        </p>
        <p className="text-sm mt-2">
          {estTime !== null ? t('operatingTime', {estTime}) : 'Loading...'}
        </p>
      </div>
    </footer>
  );
}
