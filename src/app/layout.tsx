import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from "react";
import "./globals.css";

import FBPixelRouteChange from "@/components/FBPixelRouteChange";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAnalyticsRouteChange from "@/components/GoogleAnalyticsRouteChange";
import LinkedInInsightTag from "@/components/LinkedInInsightTag";
import LinkedInInsightRouteChange from "@/components/LinkedInInsightRouteChange";
import { shouldEnableAnalytics, shouldEnableTracking } from "@/lib/env";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://zakkann.com'),
  title: "AI Automation Services",
  description: "Cut costs, crush bottlenecks, and ship faster with AI automation and internal tools without hiring a full-time tech exec.",
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon-32x32.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png?v=2', type: 'image/png', sizes: '16x16' },
      { url: '/logo-square.png?v=2', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180' },
      { url: '/logo-square.png?v=2' },
    ],
  },
};

const META_PIXEL_ID = "3094116730768349";
const GA_MEASUREMENT_ID = 'G-97FMTHNYXQ';
const LINKEDIN_PARTNER_ID = "7867914";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta Pixel base code - only when tracking is enabled */}
        {shouldEnableTracking && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
        {/* LinkedIn Insight Tag - only when tracking is enabled */}
        {shouldEnableTracking && <LinkedInInsightTag partnerId={LINKEDIN_PARTNER_ID} />}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Meta Pixel noscript fallback - only when tracking is enabled */}
        {shouldEnableTracking && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
        {/* LinkedIn Insight Tag noscript fallback - only when tracking is enabled */}
        {shouldEnableTracking && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
            />
          </noscript>
        )}
        <Suspense fallback={null}>
          {/* Only render analytics components when enabled */}
          {shouldEnableTracking && <FBPixelRouteChange />}
          {shouldEnableTracking && <LinkedInInsightRouteChange />}
          {shouldEnableAnalytics && GA_MEASUREMENT_ID && <GoogleAnalyticsRouteChange />}
        </Suspense>
        {children}
        {/* Vercel Analytics - only when analytics are enabled */}
        {shouldEnableAnalytics && <Analytics />}
        {/* Google Analytics - only when analytics are enabled */}
        {shouldEnableAnalytics && GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
