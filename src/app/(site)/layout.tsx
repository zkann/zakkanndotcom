import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zakkann.com"),
  title: {
    default: "Zak Kann – Fractional CTO & AI Automation",
    template: "%s | Zak Kann",
  },
  description:
    "Cut costs, crush bottlenecks and ship faster—without hiring a full-time tech exec. Fractional CTO & AI-Driven Automation for SMBs that want to win.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fractional CTO & AI Automation – Zak Kann",
    description:
      "Start risk‑free. Automation and internal tools that your team can maintain.",
    url: "https://zakkann.com",
    siteName: "Zak Kann",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CTO & AI Automation – Zak Kann",
    description:
      "Cut costs and ship faster with automation and technical leadership.",
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
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#1B263B] text-white px-3 py-2 rounded">Skip to content</a>
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