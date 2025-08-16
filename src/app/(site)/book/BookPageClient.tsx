"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function BookPageClient() {
  useEffect(() => {
    // Log lead event to Meta pixel
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "Book Consultation",
        content_category: "Consultation",
        value: 0,
        currency: "USD"
      });
    }

    // Redirect after a short delay to ensure the event is logged
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://calendly.com/zakkann/30min';
    }, 100);

    return () => clearTimeout(redirectTimer);
  }, []);

  // This component doesn't render anything visible
  return null;
} 