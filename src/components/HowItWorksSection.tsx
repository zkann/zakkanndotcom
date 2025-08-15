import ProcessSteps from '@/components/ProcessSteps';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon | string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  process: string[];
  deliverables: string[];
  timeInvestment: string;
  successMetric: string;
}

interface HowItWorksSectionProps {
  title?: string;
  ctaText?: string;
  ctaLocation?: string;
  background?: string;
  customSteps?: Step[];
}

export default function HowItWorksSection({
  title = "How it works",
  ctaText = "📅 Book my free 30-min call",
  ctaLocation = "process",
  background = "bg-slate-50",
  customSteps
}: HowItWorksSectionProps) {
  return (
    <div id="process" className={`${background} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-title md:text-4xl font-bold text-slate-900">{title}</h2>
        </div>

        <div className="mt-12">
          <ProcessSteps customSteps={customSteps} />
        </div>
        <div className="mt-10 text-center">
          <a
            href="/book"
            data-event="cta_click"
            data-location={ctaLocation}
            className="inline-flex items-center px-7 py-2 text-base md:text-lg font-semibold rounded-lg text-white bg-cta hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-white"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
} 