'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * LinkedIn Insight Tag route change tracking
 * Tracks page views when navigating between pages in a Next.js app
 */
export default function LinkedInInsightRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view on route change
    if (typeof window !== 'undefined' && window.lintrk) {
      window.lintrk('track', { conversion_id: 0 });
    }
  }, [pathname]);

  return null;
}

// Extend the Window interface to include LinkedIn tracking
declare global {
  interface Window {
    lintrk: (action: string, data?: { conversion_id?: number }) => void;
  }
}
