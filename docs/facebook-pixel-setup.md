# Facebook Pixel Setup & Usage Guide

## Overview
This guide covers the Facebook Pixel implementation for tracking user interactions and conversions on your website, designed to maximize server-side rendering while maintaining accurate event tracking.

## Architecture

### 1. **Server-Side Rendering First**
- **Content components** render on the server for optimal performance and SEO
- **Tracking components** are client-side only and don't force client rendering
- **Minimal JavaScript** sent to the browser for tracking functionality

### 2. **Base Pixel Code**
The Meta Pixel (ID: 635050849636654) is implemented in `src/app/layout.tsx` and automatically tracks:
- Page views on initial load
- Page views on route changes (via Next.js navigation)

### 3. **Utility Functions**
Located in `src/lib/facebook-pixel.ts`, providing easy-to-use tracking functions:

```typescript
import { trackEvent, trackLead, trackContact } from '@/lib/facebook-pixel';

// Track a lead
trackLead();

// Track a lead with value
trackLead(100, 'USD');

// Track custom events
trackEvent('CustomEvent', { 
  event_name: 'ButtonClick',
  button_name: 'Hero CTA' 
});
```

## Component Usage

### 1. **Server Components (Recommended)**
Use these for content that should render on the server:

```typescript
import { TrackingButton, TrackingLink } from '@/components/FacebookPixelTracker';

// Server component with tracking button
export default function MyPage() {
  return (
    <div>
      <h1>My Content</h1>
      <TrackingButton
        eventName="CustomEvent"
        parameters={{
          event_name: 'ButtonClick',
          button_name: 'My Button',
          page: '/my-page'
        }}
        className="btn btn-primary"
      >
        Click Me
      </TrackingButton>
    </div>
  );
}
```

### 2. **Client Components (When Needed)**
Only use these when you need client-side interactivity beyond tracking:

```typescript
'use client';

import { useEventTracking } from '@/components/FacebookPixelTracker';

function InteractiveComponent() {
  const { trackLead, trackButtonClick } = useEventTracking();
  
  const handleComplexInteraction = () => {
    // Complex client-side logic here
    trackButtonClick('Complex Button', window.location.pathname);
    trackLead();
  };
  
  return <button onClick={handleComplexInteraction}>Complex Action</button>;
}
```

### 3. **Available Tracking Components**

#### TrackingButton
```typescript
<TrackingButton
  eventName="CustomEvent"
  parameters={{
    event_name: 'ButtonClick',
    button_name: 'Hero CTA',
    page: '/',
    location: 'hero'
  }}
  className="btn btn-primary"
>
  Click Me
</TrackingButton>
```

#### TrackingLink
```typescript
<TrackingLink
  href="/contact"
  eventName="CustomEvent"
  parameters={{
    event_name: 'ButtonClick',
    button_name: 'Contact Link',
    page: '/',
    destination: '/contact'
  }}
  className="link link-primary"
>
  Contact Us
</TrackingLink>
```

## Available Events

### Standard Events
- `PageView` - Automatically tracked
- `Lead` - For form submissions, consultations, etc.
- `Contact` - For contact form submissions
- `Purchase` - For completed sales
- `AddToCart` - For e-commerce cart additions
- `InitiateCheckout` - For checkout starts
- `CompleteRegistration` - For user registrations

### Custom Events
- `ButtonClick` - Track button interactions
- `FormSubmission` - Track form submissions
- Any custom event name you specify

## Implementation Examples

### 1. **Form Tracking (Server Component)**
```typescript
import { TrackingButton } from '@/components/FacebookPixelTracker';

function ContactForm() {
  return (
    <form action="/api/contact" method="POST">
      <input name="email" type="email" required />
      <TrackingButton
        type="submit"
        eventName="CustomEvent"
        parameters={{
          event_name: 'FormSubmission',
          form_name: 'Contact Form',
          page: '/contact'
        }}
      >
        Send Message
      </TrackingButton>
    </form>
  );
}
```

### 2. **Button Click Tracking (Server Component)**
```typescript
import { TrackingButton } from '@/components/FacebookPixelTracker';

function CTASection() {
  return (
    <div>
      <h2>Ready to get started?</h2>
      <TrackingButton
        eventName="CustomEvent"
        parameters={{
          event_name: 'ButtonClick',
          button_name: 'Pricing CTA',
          page: '/pricing',
          section: 'cta'
        }}
        className="btn btn-large btn-primary"
      >
        Get Started
      </TrackingButton>
    </div>
  );
}
```

### 3. **Custom Event Tracking (Client Component)**
```typescript
'use client';

import { trackEvent } from '@/lib/facebook-pixel';

function VideoPlayer() {
  const handleVideoView = () => {
    trackEvent('VideoView', {
      video_title: 'AI Automation Guide',
      video_duration: 300
    });
  };
  
  return (
    <video onPlay={handleVideoView}>
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
}
```

## Performance Benefits

### 1. **Server-Side Rendering**
- ✅ **Faster initial page load** - Content renders on server
- ✅ **Better SEO** - Search engines see full content immediately
- ✅ **Improved Core Web Vitals** - Better LCP, FID, CLS scores
- ✅ **Reduced JavaScript bundle** - Only tracking code is client-side

### 2. **Client-Side Tracking**
- ✅ **Accurate event tracking** - Events fire when user interacts
- ✅ **Minimal overhead** - Only tracking components are client-side
- ✅ **Flexible tracking** - Easy to add/remove tracking without affecting content

## Testing & Debugging

### 1. **Facebook Pixel Helper**
Install the [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedmjlckhbiaopdjkgm) Chrome extension to:
- Verify pixel installation
- Test event firing
- Debug tracking issues

### 2. **Test Events Tool**
Use Facebook's [Test Events Tool](https://business.facebook.com/events_manager2/test_event) to:
- Send test events
- Verify pixel configuration
- Test conversion tracking

### 3. **Common Issues & Solutions**

#### Pixel Not Firing
- Check browser console for JavaScript errors
- Verify pixel ID is correct
- Ensure script loads after page is interactive

#### Events Not Tracking
- Verify event names match Facebook's standard events
- Check that parameters are properly formatted
- Ensure tracking code runs after pixel initialization

#### Server-Side Rendering Issues
- Ensure tracking components are properly imported
- Check that server components don't use client-side hooks
- Verify build process completes successfully

## Best Practices

### 1. **Component Architecture**
- Use **server components** for static content and layouts
- Use **tracking components** for interactive elements that need tracking
- Use **client components** only when complex client-side logic is required

### 2. **Event Naming**
- Use consistent, descriptive event names
- Follow Facebook's standard event naming conventions
- Document custom events for team reference

### 3. **Parameter Consistency**
- Use consistent parameter names across similar events
- Include relevant context (page, location, etc.)
- Avoid sending unnecessary or sensitive data

### 4. **Performance**
- Minimize client-side JavaScript for tracking
- Use server-side rendering for content when possible
- Implement proper event timing (after user intent is clear)

### 5. **Privacy Compliance**
- Ensure compliance with GDPR, CCPA, and other privacy laws
- Implement proper consent management
- Respect user privacy preferences

## Troubleshooting

### Pixel Helper Shows "Not Activated"
1. Check that the pixel code is properly loaded
2. Verify the pixel ID is correct
3. Ensure events are being fired after pixel initialization
4. Test with Facebook's Test Events Tool

### Events Not Appearing in Facebook
1. Check pixel helper for successful event firing
2. Verify pixel is active in Facebook Business Manager
3. Check for ad blocker interference
4. Ensure proper event parameter formatting

### Server-Side Rendering Issues
1. Verify all tracking components are properly imported
2. Check that server components don't use client-side hooks
3. Ensure build process completes without errors
4. Test that content renders correctly on initial page load

### Performance Issues
1. Use server components for static content
2. Limit client-side JavaScript to tracking only
3. Implement proper event debouncing for rapid interactions
4. Monitor page load performance impact

## Support Resources

- [Facebook Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel/)
- [Facebook Business Help Center](https://www.facebook.com/business/help)
- [Facebook Developer Community](https://developers.facebook.com/community/)
- [Meta for Developers](https://developers.facebook.com/)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)

## Next Steps

1. **Test Current Implementation**: Use Pixel Helper to verify pixel is working
2. **Add Event Tracking**: Implement tracking for key user interactions using tracking components
3. **Set Up Conversions**: Configure conversion tracking in Facebook Ads Manager
4. **Monitor Performance**: Track conversion rates and optimize accordingly
5. **Expand Tracking**: Add more sophisticated event tracking as needed
6. **Optimize for SEO**: Ensure all content renders server-side for better search performance 