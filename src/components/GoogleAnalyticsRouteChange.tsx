'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { shouldEnableAnalytics } from '@/lib/env';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export default function GoogleAnalyticsRouteChange() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Additional safety check - only run when analytics are enabled
    if (!shouldEnableAnalytics) {
      return;
    }

    if (pathname && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: pathname + searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  // Don't render anything if analytics are not enabled
  if (!shouldEnableAnalytics) {
    return null;
  }

  return null;
} 