import HeroSection from '@/components/HeroSection';
import ResultsBand from '@/components/ResultsBand';
import PainPointSection from '@/components/PainPointSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UseCasesSection from '@/components/UseCasesSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function LawFirmAutomationPage() {
  // Custom steps for law firms automation
  const lawFirmSteps = [
    {
      icon: 'phone',
      title: "Book a free call",
      subtitle: "Get Your Custom Legal Practice Automation Roadmap",
      headline: "Get Your Custom Legal Practice Automation Roadmap",
      description:
        "In 30 minutes, we'll audit your firm's workflows and identify your biggest time-wasters and revenue leaks. You'll leave with a clear plan for automation, whether you work with us or not.",
      process: [
        "Walk through your client-to-close workflows",
        "Identify manual tasks costing you the most billable time",
        "Calculate ROI potential for intake, case management, and billing automations",
        "Answer questions about your practice areas and growth goals",
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
      subtitle: "Map Your Practice & Plan Your First Win",
      headline: "Map Your Practice & Plan Your First Win",
      description:
        "We go beyond surface-level to understand how your legal practice actually operates. By the end of this week, your first automation is fully scoped and ready to build.",
      process: [
        "Document your current legal tech stack and integration points",
        "Map client intake, case management, and billing workflows",
        "Identify the highest-impact automation to build first (usually intake or conflict checking)",
        "Create detailed technical specifications compliant with legal ethics rules",
      ],
      deliverables: [
        "🗺️ Complete process maps for your practice workflows",
        "📄 Technical project scope with ethics compliance",
        "⏱️ Detailed timeline and milestones",
        "🎯 Success criteria and metrics",
      ],
      timeInvestment: "2-3 hours (interviews & system reviews)",
      successMetric: "First automation scoped with clear ROI and compliance framework",
    },
    {
      icon: 'zap',
      title: "Build & deploy",
      subtitle: "Your First Automation Goes Live",
      headline: "Your First Automation Goes Live",
      description:
        "From concept to working automation in 5 days. You'll see immediate results while we handle all the technical complexity with your existing legal software.",
      process: [
        "Days 1-2: Build in secure test environment with sample data",
        "Days 3-4: Demo working version for your feedback and compliance review",
        "Day 5: Refine based on input and deploy to production systems",
        "Handover with team training and documentation",
      ],
      deliverables: [
        "⚡ Fully functional automation integrated with your practice management system",
        "🎥 Training video for attorneys and staff",
        "📖 Documentation and troubleshooting guide",
        "📞 30 days of support included",
      ],
      timeInvestment: "1 hour (feedback and training)",
      successMetric: "Automation recovers projected billable hours within first week",
    },
    {
      icon: 'trending-up',
      title: "Scale & optimize",
      subtitle: "Build Your Automation Pipeline",
      headline: "Build Your Automation Pipeline",
      description:
        "Systematic rollout of new automations every 2-4 weeks, plus continuous optimization of existing workflows based on real performance data from your practice.",
      process: [
        "Sprint planning every 2 weeks for next automation priority",
        "Build and deploy new workflows on schedule",
        "Track performance and optimize based on time tracking and client feedback",
        "Quarterly strategy reviews for new opportunities as your practice grows",
      ],
      deliverables: [
        "📈 Real-time performance dashboard",
        "📚 Growing library of automations",
        "📊 Weekly ROI and efficiency reports",
        "🔧 Quarterly optimization recommendations",
      ],
      timeInvestment: "30 minutes weekly (planning & reviews)",
      successMetric: "8-15 billable hours recovered per attorney per week within 90 days",
    },
  ];

  // Background pattern for sections
  const backgrounds = [
    'bg-primary',      // Hero - dark navy (standalone)
    'bg-slate-50',    // Results + Pain Points (problem/solution group)
    'bg-white',        // 
    'bg-slate-50',    // How it works + Value proposition (process group)
    'bg-slate-50',    // 
    'bg-white',        // Use cases + Industry solutions (examples group)
    'bg-slate-50',    // Pricing + FAQ (conversion group)
    'bg-slate-50',    // 
    'bg-primary'       // Final CTA (standalone)
  ];

  return (
    <>
      <HeroSection 
        industry="law firms"
        subtitle={[
          { text: "We deliver AI-powered automations that eliminate manual client intake, accelerate case management, and " },
          { text: "increase billable hour recovery", highlight: true },
          { text: " without hiring more staff." }
        ]}
        ctaText="📅 Book your free call"
        ctaLocation="hero"
        limitedText="Limited to 5 new law firm clients per month for quality assurance."
        background={backgrounds[0]}
        image="/law-firm-cover.png"
      />
      
      <ResultsBand background={backgrounds[1]} />

      <PainPointSection 
        title="The cost of manual processes is crushing law firms"
        problems={[
          'Potential clients lost during slow intake and conflict checking processes',
          'Attorneys spending billable hours on administrative tasks instead of legal work',
          'Client communication delays hurting satisfaction and retention',
          'Time entry and billing inefficiencies reducing revenue capture'
        ]}
        solutions={[
          'Automate client intake, conflict checks, and engagement letter generation',
          'Streamline case management and document workflows automatically',
          'Trigger client updates and deadline reminders without manual effort',
          'Free your attorneys to focus on practicing law, not paperwork'
        ]}
        background={backgrounds[2]}
      />

      <HowItWorksSection 
        title="How it works"
        ctaText="📅 Book your free call"
        ctaLocation="process"
        background={backgrounds[3]}
        customSteps={lawFirmSteps}
      />

      <UseCasesSection 
        title="Practical law firm automations that pay for themselves"
        useCases={[
          {
            title: 'Client intake & conflict checking',
            sub: 'Automatically collect client information, run conflict checks, and generate engagement letters.',
            slug: 'client-intake-conflict-checking',
            a1: `Use case: Client intake & conflict checking`,
          },
          {
            title: 'Document assembly & management',
            sub: 'Auto-populate legal documents from client data and route for review and signature.',
            slug: 'document-assembly-management',
            a1: `Use case: Document assembly & management`,
          },
          {
            title: 'Calendar & deadline management',
            sub: 'Sync court dates with practice management systems and trigger automatic deadline reminders.',
            slug: 'calendar-deadline-management',
            a1: `Use case: Calendar & deadline management`,
          },
          {
            title: 'Time entry & billing automation',
            sub: 'Capture billable time from emails, calls, and documents automatically for accurate invoicing.',
            slug: 'time-entry-billing-automation',
            a1: `Use case: Time entry & billing automation`,
          },
          {
            title: 'Client communication sequences',
            sub: 'Send case updates, payment reminders, and check-ins based on matter status and deadlines.',
            slug: 'client-communication-sequences',
            a1: `Use case: Client communication sequences`,
          },
          {
            title: 'Discovery & document review workflows',
            sub: 'Organize and route documents for review, with automated privilege logging and production.',
            slug: 'discovery-document-review-workflows',
            a1: `Use case: Discovery & document review workflows`,
          },
        ]}
        background={backgrounds[4]}
      />

      {/* Industry-specific solutions section */}
      <section className={`py-20 ${backgrounds[5]}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built specifically for legal practice workflows
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlike generic automation tools, our solutions integrate seamlessly with the legal software you already use.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Practice Management</h3>
              <p className="text-gray-600 text-sm">Clio, MyCase, PracticePanther, LawPay</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Document Management</h3>
              <p className="text-gray-600 text-sm">NetDocuments, iManage, Worldox</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Time Tracking</h3>
              <p className="text-gray-600 text-sm">TimeSolv, Toggl, built-in PMS timers</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Court Systems</h3>
              <p className="text-gray-600 text-sm">Electronic filing systems, calendar integrations</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Client Communication</h3>
              <p className="text-gray-600 text-sm">LawMatics, Mailchimp, client portals</p>
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
          '✅ Reduce client intake time from 2+ hours to 15 minutes',
          '✅ Recover 5-10 billable hours per attorney per week through automated time capture',
          '✅ Eliminate 90% of missed deadlines with automated calendar management',
          '✅ Increase client satisfaction scores by 25% through proactive communication',
          '✅ See results in under 2 weeks'
        ]}
        ctaText="Book your free call"
        ctaLocation="pricing"
        subtitle="We'll map out your firm's automation opportunities and give you a custom plan & quote."
        background={backgrounds[6]}
      />

      <FAQSection 
        title="Frequently asked questions"
        faqs={[
          {
            question: 'What does pricing look like for my law firm?',
            answer: 'Our projects start at around $3K, but most law firms see $15K–$40K/month in increased billable hour recovery and efficiency gains. For a 5-attorney firm, that\'s typically 25-50 additional billable hours captured monthly. <a href="/book?utm_source=site&utm_medium=faq&utm_campaign=law-firm&utm_content=pricing-question" class="text-cta hover:underline font-medium">Book a free call</a>, and we\'ll assess your firm\'s opportunities and provide a custom plan & quote.',
            additionalInfo: 'Plus, we guarantee ROI within 90 days—if your automation doesn\'t increase your firm\'s billable hour recovery, we\'ll make it right.'
          },
          {
            question: 'How quickly can I expect results?',
            answer: 'Typically, you\'ll see your first legal automation up and running within 2 weeks. From there, you get weekly updates and added automations each sprint.'
          },
          {
            question: 'What kind of legal automations do you build?',
            answer: 'We specialize in workflows like:',
            list: [
              'Client intake and conflict checking automation',
              'Document assembly and template population',
              'Calendar synchronization and deadline management',
              'Automated time entry and billing workflows',
              'Client communication and case update sequences',
              'Discovery document processing and review routing'
            ]
          },
          {
            question: 'What legal software and systems do you work with?',
            answer: 'We integrate with major practice management systems like Clio, MyCase, and PracticePanther, document management systems like NetDocuments and iManage, and court filing systems. We\'ll adapt to your current tech stack, not make you switch systems.'
          },
          {
            question: 'Do I need technical help on my legal team?',
            answer: 'Nope. We handle the full stack—from scoping and development to deployment and handover. All you need is someone to approve the logic and check that it fits your practice workflows and ethics requirements.'
          },
          {
            question: 'How do we measure success?',
            answer: 'We\'ll jointly define outcome metrics—typically billable hours recovered, client intake conversion rates, or deadline compliance within your first week. Every automation comes with performance tracking so we can optimize continuously.'
          },
          {
            question: 'What about legal ethics and confidentiality requirements?',
            answer: 'All automations are built with legal ethics rules and client confidentiality in mind. We follow ABA guidelines for technology use, ensure proper data security, and can provide documentation for your malpractice insurance and ethics compliance.'
          },
          {
            question: 'Will this work with our court\'s electronic filing system?',
            answer: 'Most likely. We\'ve integrated with dozens of state and federal court systems. During our free call, we\'ll verify compatibility with your specific jurisdictions and discuss any unique requirements.'
          },
          {
            question: 'Can you handle multiple practice areas?',
            answer: 'Absolutely. Whether you\'re a general practice or have specialized areas like family law, personal injury, or corporate law, we can tailor automations to your specific practice areas and workflows.'
          }
        ]}
        background={backgrounds[7]}
      />

      <FinalCTASection 
        title="Ready to recover billable hours & eliminate administrative work?"
        subtitle="Book your free 30-min call today and get your first legal automation live in 2 weeks or less."
        guarantee="ROI guarantee: If your automation doesn't increase your firm's billable hour recovery within 90 days, we'll refund the difference. No long-term contracts—pause or cancel anytime."
        ctaText="📅 Book your free 30-min call"
        ctaLocation="final"
        limitedText="⚡ Currently booking 2-3 weeks out due to demand from growing practices."
        background={backgrounds[8]}
      />
    </>
  );
} 