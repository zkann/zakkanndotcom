import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      // Blog post redirects for shorter, SEO-friendly URLs
      {
        source: '/blog/why-ai-automation-competitive-edge-smbs-2025',
        destination: '/blog/ai-automation-competitive-edge',
        permanent: true,
      },
      {
        source: '/blog/7-most-profitable-ai-automations-for-ecommerce-businesses',
        destination: '/blog/ecommerce-ai-automations',
        permanent: true,
      },
      {
        source: '/blog/5-ai-automations-your-smb-can-launch-in-a-week',
        destination: '/blog/quick-smb-automations',
        permanent: true,
      },
      {
        source: '/blog/7-myths-about-ai-automation-and-the-truth-for-smbs',
        destination: '/blog/ai-automation-myths-debunked',
        permanent: true,
      },
      {
        source: '/blog/best-ai-automation-tools-for-smbs-2025',
        destination: '/blog/best-automation-tools',
        permanent: true,
      },
      {
        source: '/blog/how-to-find-highest-roi-automation-opportunities',
        destination: '/blog/find-high-roi-automations',
        permanent: true,
      },
      {
        source: '/blog/technology-stack-decisions',
        destination: '/blog/tech-stack-automation-guide',
        permanent: true,
      },
      {
        source: '/blog/7-most-profitable-ai-automations-for-service-businesses',
        destination: '/blog/service-business-automations',
        permanent: true,
      },
    ];
  },
  async headers() {
    // Check if we're in production
    const isProduction = process.env.NODE_ENV === 'production';
    
    // Base headers that are always included
    const baseHeaders = [
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ];

    // CSP headers - analytics domains only included in production
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https:",
      "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com",
      "frame-src 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ];

    console.log("isProduction config", isProduction);

    // Add analytics-related domains only in production
    if (isProduction) {
      cspDirectives[1] += " https://connect.facebook.net https://www.facebook.com https://www.googletagmanager.com https://www.google-analytics.com https://f.convertkit.com https://assets.calendly.com https://calendly.com https://va.vercel-scripts.com https://*.vercel-scripts.com";
      cspDirectives[2] += " https://assets.calendly.com https://calendly.com https://fonts.googleapis.com";
      cspDirectives[3] += " https://www.facebook.com https://www.google-analytics.com https://stats.g.doubleclick.net";
      cspDirectives[4] += " https://connect.facebook.net https://www.facebook.com https://graph.facebook.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://app.kit.com https://api.calendly.com https://calendly.com https://va.vercel-scripts.com https://*.vercel-scripts.com";
      cspDirectives[6] += " https://cal.com https://*.cal.com https://calendly.com https://*.calendly.com";
    }

    const cspHeader = {
      key: "Content-Security-Policy",
      value: cspDirectives.join("; "),
    };

    return [
      {
        source: "/:path*",
        headers: [...baseHeaders, cspHeader],
      },
    ];
  },
  // Removed redirects since we now have a proper /book page
  // that handles the redirect to Calendly
};

export default withContentlayer(nextConfig);
