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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
                      {
              key: "Content-Security-Policy",
              value: [
                "default-src 'self'",
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://www.facebook.com https://www.googletagmanager.com https://www.google-analytics.com https://f.convertkit.com https://assets.calendly.com https://calendly.com https://va.vercel-scripts.com https://*.vercel-scripts.com",
                "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://calendly.com",
                "img-src 'self' data: blob: https: https://www.facebook.com https://www.google-analytics.com https://stats.g.doubleclick.net",
                "connect-src 'self' https: https://connect.facebook.net https://www.facebook.com https://graph.facebook.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://app.kit.com https://api.calendly.com https://calendly.com https://va.vercel-scripts.com https://*.vercel-scripts.com",
                "font-src 'self' data:",
                "frame-src 'self' https://cal.com https://*.cal.com https://calendly.com https://*.calendly.com",
                "frame-ancestors 'self'",
                "upgrade-insecure-requests",
              ].join("; "),
            },
        ],
      },
    ];
  },
  // Removed redirects since we now have a proper /book page
  // that handles the redirect to Calendly
};

export default withContentlayer(nextConfig);
