'use client';

import { useState, useEffect } from 'react';

export function Footer() {
  const [estTime, setEstTime] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    const updateEstTime = () => {
      const now = new Date();
      const estFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit', // Optional: remove seconds for cleaner display
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
          &copy; {currentYear !== null ? currentYear : '2024'} Infonuagix Digital Solutions. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Operating in EST (Eastern Standard Time). Current EST: {estTime !== null ? estTime : 'Loading...'}
        </p>
      </div>
    </footer>
  );
}
