import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Zak Kann - Fractional CTO & AI-Driven Automation",
  description: "Cut costs, crush bottlenecks and ship faster—without hiring a full-time tech exec. Fractional CTO & AI-Driven Automation for SMBs that want to win.",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 