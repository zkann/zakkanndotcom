'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackEvent } from '@/lib/facebook-pixel';

// Hook for tracking page views on route changes
export const usePageViewTracking = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    // Track page view when route changes
    trackPageView();
  }, [pathname]);
};

// Hook for tracking custom events
export const useEventTracking = () => {
  return {
    trackLead: (value?: number, currency?: string) => {
      trackEvent('Lead', value ? { value, currency: currency || 'USD' } : undefined);
    },
    trackContact: () => {
      trackEvent('Contact');
    },
    trackCustomEvent: (eventName: string, parameters?: Record<string, any>) => {
      trackEvent(eventName, parameters);
    },
    trackButtonClick: (buttonName: string, page?: string) => {
      trackEvent('CustomEvent', {
        event_name: 'ButtonClick',
        button_name: buttonName,
        page: page || window.location.pathname,
      });
    },
    trackFormSubmission: (formName: string, page?: string) => {
      trackEvent('CustomEvent', {
        event_name: 'FormSubmission',
        form_name: formName,
        page: page || window.location.pathname,
      });
    },
  };
};

// Component for automatic page view tracking
export const FacebookPixelTracker = () => {
  usePageViewTracking();
  return null;
};

// Higher-order component for tracking button clicks
export const withEventTracking = <P extends object>(
  Component: React.ComponentType<P>,
  eventName: string,
  parameters?: Record<string, any>
) => {
  return (props: P) => {
    const handleClick = (e: any) => {
      // Call original onClick if it exists
      if (props && typeof (props as any).onClick === 'function') {
        (props as any).onClick(e);
      }
      
      // Track the event
      trackEvent(eventName, parameters);
    };

    return <Component {...props} onClick={handleClick} />;
  };
}; 