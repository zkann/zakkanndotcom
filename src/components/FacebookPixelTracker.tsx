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
    trackCustomEvent: (eventName: string, parameters?: Record<string, unknown>) => {
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

// Client-only button wrapper for tracking
export const TrackingButton = ({ 
  children, 
  eventName, 
  parameters, 
  onClick, 
  ...props 
}: {
  children: React.ReactNode;
  eventName: string;
  parameters?: Record<string, unknown>;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const handleClick = () => {
    // Track the event
    trackEvent(eventName, parameters);
    
    // Call original onClick if it exists
    if (onClick) {
      onClick();
    }
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

// Client-only link wrapper for tracking
export const TrackingLink = ({ 
  children, 
  href, 
  eventName, 
  parameters, 
  onClick, 
  ...props 
}: {
  children: React.ReactNode;
  href: string;
  eventName: string;
  parameters?: Record<string, unknown>;
  onClick?: () => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const handleClick = () => {
    // Track the event
    trackEvent(eventName, parameters);
    
    // Call original onClick if it exists
    if (onClick) {
      onClick();
    }
  };

  return (
    <a {...props} href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

// Higher-order component for tracking button clicks
export const withEventTracking = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  const WrappedComponent = (props: P) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      // Call original onClick if it exists
      if (props && typeof (props as P & { onClick?: (e: React.MouseEvent<HTMLElement>) => void }).onClick === 'function') {
        (props as P & { onClick: (e: React.MouseEvent<HTMLElement>) => void }).onClick(e);
      }
      
      // Track the event
      trackEvent(eventName, parameters);
    };

    return <Component {...props} onClick={handleClick} />;
  };

  WrappedComponent.displayName = `withEventTracking(${Component.displayName || Component.name || 'Component'})`;
  
  return WrappedComponent;
}; 