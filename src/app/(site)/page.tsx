import HeroSection from '@/components/HeroSection';
import ResultsBand from '@/components/ResultsBand';
import PainPointSection from '@/components/PainPointSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UseCasesSection from '@/components/UseCasesSection';
import IndustrySolutionsSection from '@/components/IndustrySolutionsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function Home() {
  // Define alternating backgrounds for the home page sections
  const backgrounds = [
    'bg-primary',      // Hero - dark navy (standalone)
    'bg-slate-50',    // Results + Pain Points (problem/solution group)
    'bg-white',    // 
    'bg-slate-50',        // How it works + Use cases (process group)
    'bg-slate-50',        // 
    'bg-white',    // Industry solutions (standalone)
    'bg-slate-50',        // Pricing + FAQ (conversion group)
    'bg-slate-50',        // 
    'bg-primary'       // Final CTA (standalone)
  ];

  return (
    <>
      <HeroSection background={backgrounds[0]} />
      
      {/* Trusted by logos row */}
      {/*
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 -mt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-80">
            <div className="h-6 w-24 rounded bg-slate-200" aria-label="Logo" />
            <div className="h-6 w-24 rounded bg-slate-200" aria-label="Logo" />
            <div className="h-6 w-24 rounded bg-slate-200" aria-label="Logo" />
            <div className="h-6 w-24 rounded bg-slate-200" aria-label="Logo" />
            <div className="h-6 w-24 rounded bg-slate-200" aria-label="Logo" />
            <div className="h-6 w-24 rounded bg-slate-200" aria-label="Logo" />
          </div>
        </div>
      </div>
      */}
      
      <ResultsBand background={backgrounds[1]} />

      <PainPointSection background={backgrounds[2]} />

      <HowItWorksSection background={backgrounds[3]} />

      <UseCasesSection background={backgrounds[4]} />

      <IndustrySolutionsSection background={backgrounds[5]} />

      <PricingSection background={backgrounds[6]} />

      <FAQSection background={backgrounds[7]} />

      <FinalCTASection background={backgrounds[8]} />
    </>
  );
} 