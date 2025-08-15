# Facebook Pixel Setup & Usage Guide

## Overview
This guide covers the Facebook Pixel implementation for tracking user interactions and conversions on your website.

## Current Implementation

### 1. Base Pixel Code
The Meta Pixel (ID: 635050849636654) is implemented in `src/app/layout.tsx` and will automatically track:
- Page views on initial load
- Page views on route changes (via Next.js navigation)

### 2. Utility Functions
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

### 3. React Hooks
Located in `src/components/FacebookPixelTracker.tsx`:

```typescript
import { useEventTracking } from '@/components/FacebookPixelTracker';

function MyComponent() {
  const { trackLead, trackButtonClick, trackFormSubmission } = useEventTracking();
  
  const handleClick = () => {
    trackButtonClick('My Button', window.location.pathname);
    trackLead();
  };
  
  return <button onClick={handleClick}>Click Me</button>;
}
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

### 1. Form Tracking
```typescript
import { useEventTracking } from '@/components/FacebookPixelTracker';

function ContactForm() {
  const { trackContact, trackFormSubmission } = useEventTracking();
  
  const handleSubmit = () => {
    trackFormSubmission('Contact Form', window.location.pathname);
    trackContact();
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

### 2. Button Click Tracking
```typescript
import { useEventTracking } from '@/components/FacebookPixelTracker';

function CTAButton() {
  const { trackButtonClick, trackLead } = useEventTracking();
  
  const handleClick = () => {
    trackButtonClick('Pricing CTA', window.location.pathname);
    trackLead();
  };
  
  return <button onClick={handleClick}>Get Started</button>;
}
```

### 3. Custom Event Tracking
```typescript
import { trackEvent } from '@/lib/facebook-pixel';

// Track a video view
trackEvent('VideoView', {
  video_title: 'AI Automation Guide',
  video_duration: 300
});

// Track a download
trackEvent('Download', {
  file_name: 'automation-checklist.pdf',
  file_type: 'pdf'
});
```

## Testing & Debugging

### 1. Facebook Pixel Helper
Install the [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedmjlckhbiaopdjkgm) Chrome extension to:
- Verify pixel installation
- Test event firing
- Debug tracking issues

### 2. Test Events Tool
Use Facebook's [Test Events Tool](https://business.facebook.com/events_manager2/test_event) to:
- Send test events
- Verify pixel configuration
- Test conversion tracking

### 3. Common Issues & Solutions

#### Pixel Not Firing
- Check browser console for JavaScript errors
- Verify pixel ID is correct
- Ensure script loads after page is interactive

#### Events Not Tracking
- Verify event names match Facebook's standard events
- Check that parameters are properly formatted
- Ensure tracking code runs after pixel initialization

#### Duplicate Events
- Avoid tracking the same event multiple times
- Use proper event deduplication
- Check for multiple pixel installations

## Best Practices

### 1. Event Naming
- Use consistent, descriptive event names
- Follow Facebook's standard event naming conventions
- Document custom events for team reference

### 2. Parameter Consistency
- Use consistent parameter names across similar events
- Include relevant context (page, location, etc.)
- Avoid sending unnecessary or sensitive data

### 3. Performance
- Don't track every user interaction
- Focus on high-value conversion events
- Use proper event timing (after user intent is clear)

### 4. Privacy Compliance
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

### Performance Issues
1. Limit tracking to essential events only
2. Use proper script loading strategies
3. Implement event debouncing for rapid interactions
4. Monitor page load performance impact

## Support Resources

- [Facebook Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel/)
- [Facebook Business Help Center](https://www.facebook.com/business/help)
- [Facebook Developer Community](https://developers.facebook.com/community/)
- [Meta for Developers](https://developers.facebook.com/)

## Next Steps

1. **Test Current Implementation**: Use Pixel Helper to verify pixel is working
2. **Add Event Tracking**: Implement tracking for key user interactions
3. **Set Up Conversions**: Configure conversion tracking in Facebook Ads Manager
4. **Monitor Performance**: Track conversion rates and optimize accordingly
5. **Expand Tracking**: Add more sophisticated event tracking as needed 