import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CTO Services",
  description: "Expert fractional CTO services for growing companies",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 