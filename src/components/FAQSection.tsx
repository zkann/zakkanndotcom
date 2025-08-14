import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
  list?: string[];
  additionalInfo?: string;
}

interface FAQSectionProps {
  title?: string;
  faqs?: FAQ[];
  background?: string;
}

const defaultFaqs = [
  {
    question: 'What does pricing look like for my business?',
    answer: 'Our projects start at around $3K, but the real value lies in the ROI we deliver. Most SMB clients see $5K–$15K/month in operating cost savings and reclaim 10–20 hours/week of manual effort. <a href="/book?utm_source=site&utm_medium=faq&utm_campaign=home&utm_content=pricing-question" class="text-cta hover:underline font-medium">Book a free call</a>, and we\'ll assess your opportunities and provide a custom plan & quote.',
    additionalInfo: 'Plus, we guarantee ROI within 90 days—if your automation doesn\'t save its cost, we\'ll make it right.'
  },
  {
    question: 'How quickly can I expect results?',
    answer: 'Typically, you\'ll see your first automation up and running within 2 weeks. From there, you get weekly updates and added automations each sprint.'
  },
  {
    question: 'What kind of automations do you build?',
    answer: 'We specialize in workflows like CRM updates & lead routing; Weekly KPI dashboards; Invoice generation & reconciliation; Customer support tagging & triage; Tool integrations (e.g., Slack, Teams, Zapier). If you\'re using it—it\'s automatable.',
    list: [
      'CRM updates & lead routing',
      'Weekly KPI dashboards',
      'Invoice generation & reconciliation',
      'Customer support tagging & triage',
      'Tool integrations (e.g., Slack, Teams, Zapier, etc.)'
    ]
  },
  {
    question: 'What tools do you work with?',
    answer: 'We integrate with most modern tools and platforms that SMBs use—CRMs like HubSpot, Pipedrive; ticketing tools like Zendesk; communication platforms like Slack/Teams; spreadsheets, email, and more. We\'ll adapt to your ecosystem, not make you adapt to ours.'
  },
  {
    question: 'Do I need to have technical help in-house?',
    answer: 'Nope. We handle the full stack—from scoping and development to deployment and handover. All you need is someone to approve the logic and check that it fits your workflow.'
  },
  {
    question: 'How do we measure success?',
    answer: 'We will jointly define outcome metrics—typically cost saved, hours reclaimed, or workflow throughput within your first week. Every automation comes with performance tracking so we can optimize continuously.'
  },
  {
    question: 'What if our processes are too unique to automate?',
    answer: 'Every business thinks their processes are unique—and often they are! That\'s why we don\'t use cookie-cutter solutions. Our 1-week pilot specifically maps your unique workflows before building custom automations that fit exactly how you work.'
  },
  {
    question: 'How do we ensure the automated data is accurate?',
    answer: 'We build in validation checkpoints and error handling from day one. Plus, you get full audit trails and can set up approval workflows for critical processes. Most clients see data accuracy improve from ~85% (manual entry) to 99%+ (automated).'
  },
  {
    question: 'What if our team resists using the new automations?',
    answer: 'Change management is built into our process. We involve your team in designing the workflows, provide hands-on training, and make automations feel like helpful assistants rather than replacements. The 10-20 hours/week they save usually wins them over quickly.'
  }
];

export default function FAQSection({
  title = "Frequently asked questions",
  faqs = defaultFaqs,
  background = "bg-white"
}: FAQSectionProps) {
  return (
    <div id="faq" className={`${background} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-title md:text-4xl font-bold text-slate-900">{title}</h2>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-1" className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200">
            {faqs.map((faq, index) => (
              <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`} className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    {faq.list && (
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        {faq.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {faq.additionalInfo && (
                      <p className="mt-2">{faq.additionalInfo}</p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
} 