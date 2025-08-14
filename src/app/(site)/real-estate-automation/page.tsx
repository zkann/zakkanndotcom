import HeroSection from '@/components/HeroSection';
import ResultsBand from '@/components/ResultsBand';
import PainPointSection from '@/components/PainPointSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UseCasesSection from '@/components/UseCasesSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function RealEstateAutomationPage() {
  // Simple test - use hardcoded backgrounds for now
  const backgrounds = [
    'bg-primary',      // Hero - should be dark navy (custom color)
    'bg-slate-50',    // Results - light gray
    'bg-white',        // Pain points - white
    'bg-slate-50',    // How it works - light gray
    'bg-white',        // Use cases - white
    'bg-slate-50',    // Integrations - light gray
    'bg-white',        // Pricing - white
    'bg-slate-50',    // FAQ - light gray
    'bg-primary'       // Final CTA - dark navy (custom color)
  ];

  return (
    <>
      <HeroSection 
        industry="real estate"
        subtitle={[
          { text: "We deliver AI-powered automations that cut costs, remove bottlenecks, and accelerate " },
          { text: "real estate businesses", highlight: true },
          { text: " without hiring more people." }
        ]}
        ctaText="📅 Book my free 30-min call"
        ctaLocation="hero"
        limitedText="Limited to 5 new real estate clients per month for quality assurance."
        background={backgrounds[0]}
      />
      
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

      <PainPointSection 
        title="The cost of manual processes is crushing real estate teams"
        problems={[
          'Leads going cold during 2+ hour response delays',
          'Agents spending 15+ hours/week on listing updates across platforms',
          'Commission splits delayed by manual transaction paperwork',
          'Hot prospects lost while juggling MLS, CRM, and marketing tools'
        ]}
        solutions={[
          'Respond to leads in under 2 minutes automatically',
          'Sync listings across MLS, Zillow, and social media instantly',
          'Automate commission tracking and transaction workflows',
          'Free your agents to focus on closing deals'
        ]}
        background={backgrounds[2]}
      />

      <HowItWorksSection 
        title="How it works"
        ctaText="📅 Book my free 30-min call"
        ctaLocation="process"
        background={backgrounds[3]}
      />

      <UseCasesSection 
        title="Practical real estate automations that pay for themselves"
        useCases={[
          {
            title: 'Lead routing & CRM updates',
            sub: 'Auto-route leads to the right agent while enriching contact data from MLS and social media.',
            slug: 'lead-routing-crm-updates',
            a1: `Use case: Lead routing & CRM updates`,
          },
          {
            title: 'Listing distribution automation',
            sub: 'Push new listings to MLS, Zillow, Facebook, and your website simultaneously with one click.',
            slug: 'listing-distribution-automation',
            a1: `Use case: Listing distribution automation`,
          },
          {
            title: 'Commission tracking & reporting',
            sub: 'Automatically calculate splits, track pending commissions, and generate agent payout reports.',
            slug: 'commission-tracking-reporting',
            a1: `Use case: Commission tracking & reporting`,
          },
          {
            title: 'Client communication sequences',
            sub: 'Trigger personalized follow-up sequences based on buyer/seller stage and property type.',
            slug: 'client-communication-sequences',
            a1: `Use case: Client communication sequences`,
          },
          {
            title: 'Market analysis reports',
            sub: 'Generate automated CMAs and market reports for listings and buyer consultations.',
            slug: 'market-analysis-reports',
            a1: `Use case: Market analysis reports`,
          },
          {
            title: 'Transaction milestone tracking',
            sub: 'Automatically update all parties on inspection, appraisal, and closing milestones.',
            slug: 'transaction-milestone-tracking',
            a1: `Use case: Transaction milestone tracking`,
          },
        ]}
        background={backgrounds[4]}
      />

      {/* Industry-specific solutions section */}
      <section className={`py-20 ${backgrounds[5]}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built specifically for real estate workflows
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlike generic automation tools, our solutions integrate with the platforms you already use.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">MLS Systems</h3>
              <p className="text-gray-600 text-sm">RMLS, NWMLS, CRMLS, and dozens more</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Real Estate CRMs</h3>
              <p className="text-gray-600 text-sm">KvCORE, Chime, Follow Up Boss, and more</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Transaction Management</h3>
              <p className="text-gray-600 text-sm">Skyslope, DocuSign, dotloop</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Marketing Platforms</h3>
              <p className="text-gray-600 text-sm">Facebook, Zillow, Realtor.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Lead Sources</h3>
              <p className="text-gray-600 text-sm">Zillow Premier, Realtor.com, BoldLeads</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Custom Integrations</h3>
              <p className="text-gray-600 text-sm">We&apos;ll adapt to your unique tech stack</p>
            </div>
          </div>
        </div>
      </section>

      <PricingSection 
        title="Your automation should pay for itself — fast"
        benefits={[
          '✅ Reduce lead response time from 2+ hours to under 2 minutes',
          '✅ Save 10–15 hours/week per agent on listing management',
          '✅ Increase conversion rates by 25-40% with faster follow-up',
          '✅ See results in under 2 weeks'
        ]}
        ctaText="Book your free call"
        ctaLocation="pricing"
        subtitle="We'll map out your brokerage's automation opportunities and give you a custom plan & quote."
        background={backgrounds[6]}
      />

      <FAQSection 
        title="Frequently asked questions"
        faqs={[
          {
            question: 'What does pricing look like for my real estate team?',
            answer: 'Our projects start at around $3K, but most real estate clients see $8K–$20K/month in increased commission income through faster lead response and automated listing management. <a href="/book?utm_source=site&utm_medium=faq&utm_campaign=real-estate&utm_content=pricing-question" class="text-cta hover:underline font-medium">Book a free call</a>, and we\'ll assess your brokerage\'s opportunities and provide a custom plan & quote.',
            additionalInfo: 'Plus, we guarantee ROI within 90 days—if your automation doesn\'t increase your team\'s efficiency, we\'ll make it right.'
          },
          {
            question: 'How quickly can I expect results?',
            answer: 'Typically, you\'ll see your first real estate automation up and running within 2 weeks. From there, you get weekly updates and added automations each sprint.'
          },
          {
            question: 'What kind of real estate automations do you build?',
            answer: 'We specialize in workflows like:',
            list: [
              'MLS-to-CRM lead routing and enrichment',
              'Multi-platform listing distribution',
              'Commission tracking and agent reporting',
              'Client communication sequences',
              'Transaction milestone automation',
              'Market analysis and CMA generation'
            ]
          },
          {
            question: 'What real estate tools do you work with?',
            answer: 'We integrate with most MLS systems, real estate CRMs like KvCORE and Follow Up Boss, transaction platforms like Skyslope and DocuSign, and lead sources like Zillow Premier and Realtor.com. We\'ll adapt to your current tech stack, not make you switch systems.'
          },
          {
            question: 'Do I need to have technical help in my brokerage?',
            answer: 'Nope. We handle the full stack—from scoping and development to deployment and handover. All you need is someone to approve the logic and check that it fits your real estate workflow.'
          },
          {
            question: 'How do we measure success?',
            answer: 'We\'ll jointly define outcome metrics—typically lead response time, hours saved per agent, or commission conversion rates within your first week. Every automation comes with performance tracking so we can optimize continuously.'
          },
          {
            question: 'Will this work with our MLS system?',
            answer: 'Yes. We\'ve integrated with dozens of MLS systems across the US and Canada. During our free call, we\'ll verify compatibility with your specific MLS and discuss any unique requirements.'
          },
          {
            question: 'What about compliance and data security?',
            answer: 'All automations are built with NAR compliance and data protection in mind. We follow industry best practices for handling client data and can provide documentation for your compliance requirements.'
          }
        ]}
        background={backgrounds[7]}
      />

      <FinalCTASection 
        title="Ready to close more deals & eliminate manual work?"
        subtitle="Book your free 30-min call today and get your first real estate automation live in 2 weeks or less."
        guarantee="If your automation doesn't pay for itself within 90 days, we'll refund the difference. No long-term contracts—pause or cancel anytime."
        ctaText="📅 Book my free 30-min call"
        ctaLocation="final"
        limitedText="⚡ Currently booking 2-3 weeks out due to demand from growing brokerages."
        background={backgrounds[8]}
      />
    </>
  );
} 