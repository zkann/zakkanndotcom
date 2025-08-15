# Google Analytics Setup Guide

## Overview
This site now includes Google Analytics 4 (GA4) integration with automatic page view tracking and route change detection.

## Setup Steps

### 1. Create Google Analytics Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Set up a GA4 property (not Universal Analytics)
4. Note your Measurement ID (format: G-XXXXXXXXXX)

### 2. Environment Configuration
Create a `.env.local` file in your project root with:

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URL (if not already set)
SITE_URL=https://zakkann.com
```

**Important:** Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID.

### 3. Verify Installation
1. Start your development server
2. Open browser developer tools
3. Check the Network tab for requests to `googletagmanager.com`
4. Verify the `gtag` function is available in the console

### 4. Testing
- Navigate between pages to ensure route changes are tracked
- Check Google Analytics Real-Time reports to see live data
- Verify page views appear in your GA4 dashboard

## Features

### Automatic Tracking
- **Page Views**: Every page load is automatically tracked
- **Route Changes**: Navigation between pages is tracked without full page reloads
- **Performance**: Uses Next.js Script component with `afterInteractive` strategy

### Components Added
- `GoogleAnalytics.tsx`: Main GA4 initialization and configuration
- `GoogleAnalyticsRouteChange.tsx`: Tracks route changes for SPA navigation

### Environment Variables
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics Measurement ID
- Must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser

## Privacy & Compliance
- Google Analytics respects user privacy settings
- Consider adding a cookie consent banner if serving EU users
- Review Google Analytics data retention and privacy policies

## Troubleshooting

### Common Issues
1. **No data appearing**: Check that your Measurement ID is correct
2. **Script not loading**: Verify the environment variable is set
3. **Route changes not tracked**: Ensure the component is properly imported

### Debug Mode
Add this to your browser console to test:
```javascript
gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'debug'
});
```

## Support
For Google Analytics issues, refer to:
- [Google Analytics Help Center](https://support.google.com/analytics/)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/10089681) 