"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { shouldEnableAnalytics } from '@/lib/env';

export default function AnalyticsEvents() {
  useEffect(() => {
    // Don't set up analytics events if analytics are disabled
    if (!shouldEnableAnalytics) {
      return;
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest<HTMLElement>("[data-event]");
      if (!el) return;
      const { event: name, location, slug, title, a1 } = el.dataset as Record<string, string | undefined>;
      if (!name) return;
      try {
        track(name, {
          ...(location ? { location } : {}),
          ...(slug ? { slug } : {}),
          ...(title ? { title } : {}),
          ...(a1 ? { a1 } : {}),
        });
      } catch {
        // no-op if analytics not available
      }
    };

    document.addEventListener("click", onClick, { passive: true });

    const seenSections = new Set<string>();
    const sectionIdsToObserve = ["process", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIdsToObserve.forEach((id) => {
      const elem = document.getElementById(id);
      if (!elem) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !seenSections.has(id)) {
              seenSections.add(id);
              try {
                track("section_view", { section: id });
              } catch {
                // swallow
              }
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(elem);
      observers.push(observer);
    });

    return () => {
      document.removeEventListener("click", onClick);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // Don't render anything if analytics are disabled
  if (!shouldEnableAnalytics) {
    return null;
  }

  return null;
}