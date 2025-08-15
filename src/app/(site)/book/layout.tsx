import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Free Call - Zakkann',
  description: 'Book your free 30-minute consultation call to discuss AI automation opportunities for your business.',
  robots: 'noindex, nofollow', // Since this is just a redirect page
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 