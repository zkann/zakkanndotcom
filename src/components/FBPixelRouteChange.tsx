// app/FBPixelRouteChange.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { shouldEnableTracking } from '@/lib/env';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function FBPixelRouteChange() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Additional safety check - only run when tracking is enabled
    if (!shouldEnableTracking) {
      return;
    }

    // Fire on route + query changes (ignore the very first run if you want—Meta tolerates duplicates)
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  // Don't render anything if tracking is not enabled
  if (!shouldEnableTracking) {
    return null;
  }

  return null;
}