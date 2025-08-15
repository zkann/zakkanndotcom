declare global {
  interface Window {
    fbq: {
      (command: 'init', pixelId: string): void;
      (command: 'track', eventName: string, parameters?: Record<string, unknown>): void;
      (command: 'track', eventName: string): void;
    };
  }
}

// Facebook Pixel event tracking utility
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (parameters) {
      window.fbq('track', eventName, parameters);
    } else {
      window.fbq('track', eventName);
    }
  }
};

// Common event tracking functions
export const trackPageView = () => {
  trackEvent('PageView');
};

export const trackLead = (value?: number, currency?: string) => {
  trackEvent('Lead', value ? { value, currency: currency || 'USD' } : undefined);
};

export const trackPurchase = (value: number, currency: string = 'USD') => {
  trackEvent('Purchase', { value, currency });
};

export const trackAddToCart = (value: number, currency: string = 'USD') => {
  trackEvent('AddToCart', { value, currency });
};

export const trackInitiateCheckout = (value: number, currency: string = 'USD') => {
  trackEvent('InitiateCheckout', { value, currency });
};

export const trackCompleteRegistration = () => {
  trackEvent('CompleteRegistration');
};

export const trackContact = () => {
  trackEvent('Contact');
};

export const trackCustomEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  trackEvent(eventName, parameters);
}; 