import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zakkann.com"),
  title: {
    default: "Zak Kann – AI Automation & Internal Tools",
    template: "%s | Zak Kann",
  },
  description:
    "Cut costs, crush bottlenecks, and ship faster with AI automation and internal tools—without hiring a full-time tech exec. Project-based pricing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Automation & Internal Tools – Zak Kann",
    description:
      "Start risk‑free. Automation and internal tools your team can maintain. Project-based pricing.",
    url: "https://zakkann.com",
    siteName: "Zak Kann",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Internal Tools – Zak Kann",
    description:
      "Cut costs and ship faster with AI automation and internal tools for SMBs.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-white px-3 py-2 rounded">Skip to content</a>
      {/* ConvertKit JS (optional but enables inline success handling and analytics) */}
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="afterInteractive" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zak Kann',
            url: 'https://zakkann.com',
            sameAs: [
              'https://linkedin.com/in/zkann',
              'https://x.com/zrkann',
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Zak Kann',
            url: 'https://zakkann.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://zakkann.com/blog?search={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <Header />
      <main id="main" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 