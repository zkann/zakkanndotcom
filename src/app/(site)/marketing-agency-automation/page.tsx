import HeroSection from '@/components/HeroSection';
import ResultsBand from '@/components/ResultsBand';
import PainPointSection from '@/components/PainPointSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UseCasesSection from '@/components/UseCasesSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';


export default function MarketingAgencyAutomationPage() {
  // Custom steps for marketing agency automation
  const marketingAgencySteps = [
    {
      icon: 'phone',
      title: "Book a free call",
      subtitle: "Get Your Custom Agency Automation Roadmap",
      headline: "Get Your Custom Agency Automation Roadmap",
      description:
        "In 30 minutes, we'll audit your agency operations and identify your biggest time-wasters and profit leaks. You'll leave with a clear plan for automation, whether you work with us or not.",
      process: [
        "Walk through your client onboarding to reporting workflows",
        "Identify manual tasks costing you the most account management time",
        "Calculate ROI potential for reporting, onboarding, and campaign optimization automations",
        "Answer questions about your service offerings and growth goals",
      ],
      deliverables: [
        "📊 Custom automation roadmap",
        "💰 ROI projections for top 3 opportunities",
        "📋 Prioritized action plan",
      ],
      timeInvestment: "30 minutes",
      successMetric: "3+ automation opportunities identified with projected time savings",
    },
    {
      icon: 'search',
      title: "Deep dive & scope",
      subtitle: "Map Your Operations & Plan Your First Win",
      headline: "Map Your Operations & Plan Your First Win",
      description:
        "We go beyond surface-level to understand how your agency actually delivers client results. By the end of this week, your first automation is fully scoped and ready to build.",
      process: [
        "Document your current martech stack and data sources",
        "Map client onboarding, reporting, and campaign management workflows",
        "Identify the highest-impact automation to build first (usually reporting or onboarding)",
        "Create detailed technical specifications for your platforms and client needs",
      ],
      deliverables: [
        "🗺️ Complete process maps for your agency workflows",
        "📄 Technical project scope",
        "⏱️ Detailed timeline and milestones",
        "🎯 Success criteria and metrics",
      ],
      timeInvestment: "2-3 hours (interviews & system reviews)",
      successMetric: "First automation scoped with clear ROI and timeline",
    },
    {
      icon: 'zap',
      title: "Build & deploy",
      subtitle: "Your First Automation Goes Live",
      headline: "Your First Automation Goes Live",
      description:
        "From concept to working automation in 5 days. You'll see immediate results while we handle all the technical complexity with your existing marketing platforms.",
      process: [
        "Days 1-2: Build in staging environment with your actual client data",
        "Days 3-4: Demo working version for your feedback and client approval",
        "Day 5: Refine based on input and deploy to production",
        "Handover with team training and client presentation templates",
      ],
      deliverables: [
        "⚡ Fully functional automation integrated with your martech stack",
        "🎥 Training video for your team",
        "📖 Documentation and troubleshooting guide",
        "📞 30 days of support included",
      ],
      timeInvestment: "1 hour (feedback and training)",
      successMetric: "Automation saves projected hours within first week",
    },
    {
      icon: 'trending-up',
      title: "Scale & optimize",
      subtitle: "Build Your Automation Pipeline",
      headline: "Build Your Automation Pipeline",
      description:
        "Systematic rollout of new automations every 2-4 weeks, plus continuous optimization of existing workflows based on real performance data from your agency.",
      process: [
        "Sprint planning every 2 weeks for next automation priority",
        "Build and deploy new workflows on schedule",
        "Track performance and optimize based on client feedback and team efficiency",
        "Quarterly strategy reviews for new opportunities as you scale",
      ],
      deliverables: [
        "📈 Real-time performance dashboard",
        "📚 Growing library of automations",
        "📊 Weekly ROI and efficiency reports",
        "🔧 Quarterly optimization recommendations",
      ],
      timeInvestment: "30 minutes weekly (planning & reviews)",
      successMetric: "20-30 hours/week saved across your team within 90 days",
    },
  ];

  // Simple test - use hardcoded backgrounds for now
  const backgrounds = [
    'bg-primary',      // Hero - dark navy (standalone)
    'bg-slate-50',    // Results + Pain Points (problem/solution group)
    'bg-white',    // 
    'bg-slate-50',        // How it works + Value proposition (process group)
    'bg-slate-50',        // 
    'bg-white',    // Use cases + Industry solutions (examples group)
    'bg-slate-50',    // Pricing + FAQ (conversion group)
    'bg-slate-50',        // 
    'bg-primary'       // Final CTA (standalone)
  ];

  return (
    <>
      <HeroSection 
        industry="marketing agency"
        subtitle={[
          { text: "We deliver AI-powered automations that eliminate manual reporting, accelerate client onboarding, and " },
          { text: "boost profit margins", highlight: true },
          { text: " without hiring more account managers." }
        ]}
        ctaText="📅 Book your free call"
        ctaLocation="hero"
        limitedText="Limited to 5 new marketing agency clients per month for quality assurance."
        background={backgrounds[0]}
        image="/marketing-agency-cover.png"
      />
      
      <ResultsBand background={backgrounds[1]} />

      <PainPointSection 
        title="The cost of manual processes is crushing marketing agencies"
        problems={[
          'Account managers spending 15+ hours weekly on client reporting instead of strategy',
          'New client onboarding taking weeks while competitors move faster',
          'Campaign data scattered across platforms making optimization impossible',
          'Profit margins shrinking due to manual account management overhead'
        ]}
        solutions={[
          'Auto-generate client reports from all marketing platforms in minutes',
          'Onboard new clients with automated setup and data collection workflows',
          'Centralize campaign performance data for real-time optimization insights',
          'Free your team to focus on strategy and creative work, not busy work'
        ]}
        background={backgrounds[2]}
      />

      <HowItWorksSection 
        title="How it works"
        ctaText="📅 Book your free call"
        ctaLocation="process"
        background={backgrounds[3]}
        customSteps={marketingAgencySteps}
      />

      <UseCasesSection 
        title="Practical agency automations that pay for themselves"
        useCases={[
          {
            title: 'Multi-platform reporting automation',
            sub: 'Automatically pull data from Google Ads, Facebook, LinkedIn, and analytics platforms into branded client reports.',
            slug: 'multi-platform-reporting-automation',
            a1: `Use case: Multi-platform reporting automation`,
          },
          {
            title: 'Client onboarding workflows',
            sub: 'Automate account setup, access provisioning, and initial campaign launches for faster time-to-value.',
            slug: 'client-onboarding-workflows',
            a1: `Use case: Client onboarding workflows`,
          },
          {
            title: 'Campaign performance monitoring',
            sub: 'Set up automated alerts for budget pacing, performance drops, and optimization opportunities across all accounts.',
            slug: 'campaign-performance-monitoring',
            a1: `Use case: Campaign performance monitoring`,
          },
          {
            title: 'Lead scoring & qualification',
            sub: 'Route and score inbound leads automatically while triggering personalized follow-up sequences.',
            slug: 'lead-scoring-qualification',
            a1: `Use case: Lead scoring & qualification`,
          },
          {
            title: 'Proposal generation & approval',
            sub: 'Auto-populate proposals from discovery calls and streamline approval workflows with e-signatures.',
            slug: 'proposal-generation-approval',
            a1: `Use case: Proposal generation & approval`,
          },
          {
            title: 'Client communication sequences',
            sub: 'Send performance updates, renewal reminders, and check-ins based on campaign milestones and contract dates.',
            slug: 'client-communication-sequences',
            a1: `Use case: Client communication sequences`,
          },
        ]}
        background={backgrounds[4]}
      />

      {/* Industry-specific solutions section */}
      <section className={`py-20 ${backgrounds[5]}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built specifically for marketing agency workflows
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlike generic automation tools, our solutions integrate seamlessly with the platforms you already use.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Advertising Platforms</h3>
              <p className="text-gray-600 text-sm">Google Ads, Facebook Ads, LinkedIn Ads, Microsoft Ads</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Analytics & Tracking</h3>
              <p className="text-gray-600 text-sm">Google Analytics, Adobe Analytics, attribution platforms</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Agency Tools</h3>
              <p className="text-gray-600 text-sm">AgencyAnalytics, Databox, Supermetrics, Optmyzr</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">CRM & Project Management</h3>
              <p className="text-gray-600 text-sm">HubSpot, Pipedrive, Monday.com, Asana</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Reporting Platforms</h3>
              <p className="text-gray-600 text-sm">Google Data Studio, Tableau, custom dashboards</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Custom Integrations</h3>
              <p className="text-gray-600 text-sm">We&apos;ll adapt to your unique martech stack</p>
            </div>
          </div>
        </div>
      </section>

      <PricingSection 
        title="Your automation should pay for itself — fast"
        benefits={[
          '✅ Reduce client reporting time from 15+ hours to 2 hours per week',
          '✅ Cut client onboarding time from 2-3 weeks to 3-5 days',
          '✅ Increase account manager capacity by 40% without additional hires',
          '✅ Improve client retention by 25% through proactive communication',
          '✅ See results in under 2 weeks'
        ]}
        ctaText="Book your free call"
        ctaLocation="pricing"
        subtitle="We'll map out your agency's automation opportunities and give you a custom plan & quote."
        background={backgrounds[6]}
      />

      <FAQSection 
        title="Frequently asked questions"
        faqs={[
          {
            question: 'What does pricing look like for my marketing agency?',
            answer: 'Our projects start at around $3K, but most agencies see $12K–$30K/month in increased profitability through improved efficiency and capacity. For a 10-person agency, that\'s typically 80-120 hours saved monthly across the team. <a href="/book?utm_source=site&utm_medium=faq&utm_campaign=marketing-agency&utm_content=pricing-question" class="text-cta hover:underline font-medium">Book a free call</a>, and we\'ll assess your agency\'s opportunities and provide a custom plan & quote.',
            additionalInfo: 'Plus, we guarantee ROI within 90 days—if your automation doesn\'t increase your team\'s efficiency, we\'ll make it right.'
          },
          {
            question: 'How quickly can I expect results?',
            answer: 'Typically, you\'ll see your first agency automation up and running within 2 weeks. From there, you get weekly updates and added automations each sprint.'
          },
          {
            question: 'What kind of marketing automations do you build?',
            answer: 'We specialize in workflows like:',
            list: [
              'Multi-platform reporting and dashboard creation',
              'Client onboarding and account setup automation',
              'Campaign performance monitoring and alerting',
              'Lead routing and qualification workflows',
              'Proposal generation and approval processes',
              'Client communication and retention sequences'
            ]
          },
          {
            question: 'What marketing platforms and tools do you work with?',
            answer: 'We integrate with major advertising platforms like Google Ads, Facebook Ads, LinkedIn Ads, analytics tools like Google Analytics, and agency management platforms like AgencyAnalytics and HubSpot. We\'ll adapt to your current martech stack, not make you switch platforms.'
          },
          {
            question: 'Do I need technical help on my agency team?',
            answer: 'Nope. We handle the full stack—from scoping and development to deployment and handover. All you need is someone to approve the logic and check that it fits your client deliverables and agency workflows.'
          },
          {
            question: 'How do we measure success?',
            answer: 'We\'ll jointly define outcome metrics—typically hours saved per week, client onboarding speed, or account manager capacity within your first week. Every automation comes with performance tracking so we can optimize continuously.'
          },
          {
            question: 'What about client data privacy and platform compliance?',
            answer: 'All automations are built with marketing platform terms of service and data privacy regulations in mind. We follow best practices for API usage, data handling, and can provide documentation for your client privacy policies.'
          },
          {
            question: 'Will this work with our white-label reporting requirements?',
            answer: 'Absolutely. We can customize all reporting automations to match your agency branding, client presentation formats, and specific KPIs. Your clients will see professional, branded reports that look like your team created them manually.'
          },
          {
            question: 'Can you handle different service offerings (PPC, SEO, social, etc.)?',
            answer: 'Yes. Whether you\'re a full-service agency or specialize in specific channels like PPC or social media marketing, we can tailor automations to your specific service mix and client reporting requirements.'
          }
        ]}
        background={backgrounds[7]}
      />

      <FinalCTASection 
        title="Ready to boost margins & eliminate manual reporting?"
        subtitle="Book your free 30-min call today and get your first agency automation live in 2 weeks or less."
        guarantee="ROI guarantee: If your automation doesn't increase your team's efficiency and client capacity within 90 days, we'll refund the difference. No long-term contracts—pause or cancel anytime."
        ctaText="📅 Book your free 30-min call"
        ctaLocation="final"
        limitedText="⚡ Currently booking 2-3 weeks out due to demand from scaling agencies."
        background={backgrounds[8]}
      />
    </>
  );
}
