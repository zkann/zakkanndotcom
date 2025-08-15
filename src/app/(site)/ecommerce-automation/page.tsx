import HeroSection from '@/components/HeroSection';
import ResultsBand from '@/components/ResultsBand';
import PainPointSection from '@/components/PainPointSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UseCasesSection from '@/components/UseCasesSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';


export default function EcommerceAutomationPage() {
  // Custom steps for ecommerce automation
  const ecommerceSteps = [
    {
      icon: 'phone',
      title: "Book a free call",
      subtitle: "Get Your Custom Ecommerce Automation Roadmap",
      headline: "Get Your Custom Ecommerce Automation Roadmap",
      description:
        "In 30 minutes, we'll audit your store operations and identify your biggest time-wasters and profit leaks. You'll leave with a clear plan for automation, whether you work with us or not.",
      process: [
        "Walk through your order-to-fulfillment workflows",
        "Identify manual tasks costing you the most time and money",
        "Calculate ROI potential for inventory, pricing, and customer service automations",
        "Answer questions about your growth goals and current pain points",
      ],
      deliverables: [
        "📊 Custom automation roadmap",
        "💰 ROI projections for top 3 opportunities",
        "📋 Prioritized action plan",
      ],
      timeInvestment: "30 minutes",
      successMetric: "3+ automation opportunities identified with projected savings",
    },
    {
      icon: 'search',
      title: "Deep dive & scope",
      subtitle: "Map Your Operations & Plan Your First Win",
      headline: "Map Your Operations & Plan Your First Win",
      description:
        "We go beyond surface-level to understand how your ecommerce operations actually work. By the end of this week, your first automation is fully scoped and ready to build.",
      process: [
        "Document your current tech stack and integration points",
        "Map inventory, order, and customer service workflows",
        "Identify the highest-impact automation to build first (usually inventory sync or order fulfillment)",
        "Create detailed technical specifications for your platforms",
      ],
      deliverables: [
        "🗺️ Complete process maps for your store operations",
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
        "From concept to working automation in 5 days. You'll see immediate results while we handle all the technical complexity with your existing platforms.",
      process: [
        "Days 1-2: Build in staging environment with your actual data",
        "Days 3-4: Demo working version for your feedback and testing",
        "Day 5: Refine based on input and deploy to production",
        "Handover with team training and documentation",
      ],
      deliverables: [
        "⚡ Fully functional automation integrated with your store",
        "🎥 Training video for your team and VAs",
        "📖 Documentation and troubleshooting guide",
        "📞 30 days of support included",
      ],
      timeInvestment: "1 hour (feedback and training)",
      successMetric: "Automation saves projected time/money within first week",
    },
    {
      icon: 'trending-up',
      title: "Scale & optimize",
      subtitle: "Build Your Automation Pipeline",
      headline: "Build Your Automation Pipeline",
      description:
        "Systematic rollout of new automations every 2-4 weeks, plus continuous optimization of existing workflows based on real performance data from your store.",
      process: [
        "Sprint planning every 2 weeks for next automation priority",
        "Build and deploy new workflows on schedule",
        "Track performance and optimize based on sales data and usage",
        "Quarterly strategy reviews for new opportunities as you scale",
      ],
      deliverables: [
        "📈 Real-time performance dashboard",
        "📚 Growing library of automations",
        "📊 Weekly ROI and efficiency reports",
        "🔧 Quarterly optimization recommendations",
      ],
      timeInvestment: "30 minutes weekly (planning & reviews)",
      successMetric: "15-25 hours/week saved within 90 days",
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
        industry="ecommerce"
        subtitle={[
          { text: "We deliver AI-powered automations that eliminate manual inventory management, accelerate order fulfillment, and " },
          { text: "boost profit margins", highlight: true },
          { text: " without hiring more people." }
        ]}
        ctaText="📅 Book your free call"
        ctaLocation="hero"
        limitedText="Limited to 5 new ecommerce clients per month for quality assurance."
        background={backgrounds[0]}
        image="/ecommerce-cover.png"
      />
      
      <ResultsBand background={backgrounds[1]} />

      <PainPointSection 
        title="The cost of manual processes is crushing ecommerce stores"
        problems={[
          'Stockouts and overstock costing thousands in lost sales and storage fees',
          'Hours spent manually updating inventory across multiple channels',
          'Customer service drowning in "Where\'s my order?" inquiries',
          'Profit margins shrinking due to manual pricing and promotion management'
        ]}
        solutions={[
          'Sync inventory across all channels in real-time automatically',
          'Automate order fulfillment and customer communication sequences',
          'Dynamic pricing optimization based on demand and competition',
          'Free your team to focus on growth and customer experience'
        ]}
        background={backgrounds[2]}
      />

      <HowItWorksSection 
        title="How it works"
        ctaText="📅 Book your free call"
        ctaLocation="process"
        background={backgrounds[3]}
        customSteps={ecommerceSteps}
      />

      <UseCasesSection 
        title="Practical ecommerce automations that pay for themselves"
        useCases={[
          {
            title: 'Multi-channel inventory sync',
            sub: 'Keep stock levels accurate across Shopify, Amazon, eBay, and social commerce automatically.',
            slug: 'multi-channel-inventory-sync',
            a1: `Use case: Multi-channel inventory sync`,
          },
          {
            title: 'Order fulfillment automation',
            sub: 'Route orders to the right fulfillment center and trigger shipping notifications automatically.',
            slug: 'order-fulfillment-automation',
            a1: `Use case: Order fulfillment automation`,
          },
          {
            title: 'Customer service triage',
            sub: 'Auto-categorize support tickets and route to specialists while sending instant order status updates.',
            slug: 'customer-service-triage',
            a1: `Use case: Customer service triage`,
          },
          {
            title: 'Dynamic pricing optimization',
            sub: 'Adjust prices based on inventory levels, competitor pricing, and demand patterns in real-time.',
            slug: 'dynamic-pricing-optimization',
            a1: `Use case: Dynamic pricing optimization`,
          },
          {
            title: 'Abandoned cart recovery sequences',
            sub: 'Trigger personalized email and SMS sequences based on cart value and customer behavior.',
            slug: 'abandoned-cart-recovery-sequences',
            a1: `Use case: Abandoned cart recovery sequences`,
          },
          {
            title: 'Review and feedback automation',
            sub: 'Automatically request reviews, respond to feedback, and escalate negative reviews for manual attention.',
            slug: 'review-feedback-automation',
            a1: `Use case: Review and feedback automation`,
          },
        ]}
        background={backgrounds[4]}
      />

      {/* Industry-specific solutions section */}
      <section className={`py-20 ${backgrounds[5]}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built specifically for ecommerce workflows
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlike generic automation tools, our solutions integrate seamlessly with:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Ecommerce platforms</h3>
              <p className="text-gray-600 text-sm">Shopify, WooCommerce, Magento, BigCommerce</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Marketplaces</h3>
              <p className="text-gray-600 text-sm">Amazon, eBay, Etsy, Facebook Marketplace</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Fulfillment</h3>
              <p className="text-gray-600 text-sm">ShipStation, Fulfillment by Amazon, 3PLs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Customer service</h3>
              <p className="text-gray-600 text-sm">Zendesk, Gorgias, Freshdesk</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Marketing tools</h3>
              <p className="text-gray-600 text-sm">Klaviyo, Mailchimp, SMS platforms</p>
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
          '✅ Eliminate 90% of inventory sync errors across channels',
          '✅ Reduce order processing time from hours to minutes',
          '✅ Cut customer service volume by 40% through proactive communication',
          '✅ Increase profit margins 15-30% through dynamic pricing',
          '✅ See results in under 2 weeks'
        ]}
        ctaText="Book your free call"
        ctaLocation="pricing"
        subtitle="We'll map out your store's automation opportunities and give you a custom plan & quote."
        background={backgrounds[6]}
      />

      <FAQSection 
        title="Frequently asked questions"
        faqs={[
          {
            question: 'What does pricing look like for my ecommerce store?',
            answer: 'Our projects start at around $3K, but most ecommerce clients see $10K–$25K/month in increased profit through reduced errors, faster fulfillment, and optimized pricing. <a href="/book?utm_source=site&utm_medium=faq&utm_campaign=ecommerce&utm_content=pricing-question" class="text-cta hover:underline font-medium">Book a free call</a>, and we\'ll assess your store\'s opportunities and provide a custom plan & quote.',
            additionalInfo: 'Plus, we guarantee ROI within 90 days—if your automation doesn\'t increase your store\'s efficiency, we\'ll make it right.'
          },
          {
            question: 'How quickly can I expect results?',
            answer: 'Typically, you\'ll see your first ecommerce automation up and running within 2 weeks. From there, you get weekly updates and added automations each sprint.'
          },
          {
            question: 'What kind of ecommerce automations do you build?',
            answer: 'We specialize in workflows like:',
            list: [
              'Multi-channel inventory synchronization',
              'Order fulfillment and shipping automation',
              'Customer service triage and auto-responses',
              'Dynamic pricing and promotion management',
              'Review collection and reputation management',
              'Abandoned cart recovery sequences'
            ]
          },
          {
            question: 'What ecommerce platforms and tools do you work with?',
            answer: 'We integrate with major platforms like Shopify, WooCommerce, Amazon, eBay, and tools like ShipStation, Klaviyo, Zendesk, and most 3PL providers. We\'ll adapt to your current tech stack, not make you switch platforms.'
          },
          {
            question: 'Do I need technical help on my team?',
            answer: 'Nope. We handle the full stack—from scoping and development to deployment and handover. All you need is someone to approve the logic and check that it fits your store operations.'
          },
          {
            question: 'How do we measure success?',
            answer: 'We\'ll jointly define outcome metrics—typically time saved, error reduction, or profit margin improvement within your first week. Every automation comes with performance tracking so we can optimize continuously.'
          },
          {
            question: 'Will this work with my 3PL or fulfillment setup?',
            answer: 'Yes. We\'ve integrated with dozens of 3PLs and fulfillment services. During our free call, we\'ll verify compatibility with your specific setup and discuss any unique requirements.'
          },
          {
            question: 'What about handling peak seasons like Black Friday?',
            answer: 'Our automations are built to scale with your volume. We can also implement seasonal rules for pricing, inventory management, and customer communication to handle traffic spikes automatically.'
          }
        ]}
        background={backgrounds[7]}
      />

      <FinalCTASection 
        title="Ready to boost profits & eliminate manual work?"
        subtitle="Book your free 30-min call today and get your first ecommerce automation live in 2 weeks or less."
        guarantee="ROI guarantee: If your automation doesn't improve your store's efficiency and profitability within 90 days, we'll refund the difference. No long-term contracts—pause or cancel anytime."
        ctaText="📅 Book your free 30-min call"
        ctaLocation="final"
        limitedText="⚡ Currently booking 2-3 weeks out due to demand from scaling stores."
        background={backgrounds[8]}
      />
    </>
  );
} 