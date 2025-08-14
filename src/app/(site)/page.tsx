import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import ProcessSteps from '@/components/ProcessSteps';

export default function Home() {
  return (
    <>
      {/* Hero Section (dark background for contrast) */}
      <div className="relative bg-primary py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,.6), rgba(255,255,255,.6) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, rgba(255,255,255,.6), rgba(255,255,255,.6) 1px, transparent 1px, transparent 28px)",
              maskImage: "radial-gradient(60% 50% at 50% 30%, black, transparent)",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5 text-white [text-wrap:balance]">
              <span className="block">
                AI aut
                <span className="relative inline-flex items-center justify-center align-baseline text-highlight text-[0.8em] leading-none animate-spin [animation-duration:5.5s]" aria-hidden="true">⚙️</span>
                <span className="sr-only">o</span>
                mation that <span className="text-highlight">pays for itself</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed md:leading-8">
              We deliver AI-powered automations that cut costs, remove bottlenecks, and <span className="text-highlight">accelerate SMBs</span> without hiring more people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                data-event="cta_click"
                data-location="hero"
                className="inline-flex items-center px-7 py-4 text-base md:text-lg font-semibold rounded-lg text-white bg-cta hover:brightness-90 transition-colors shadow-sm w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-primary"
              >
                📅 Book my free 30-min call
              </a>
            </div>
            <div className="text-sm text-white/80 mt-4">Limited to 5 new clients per month for quality assurance.</div>
          </div>
        </div>
      </div>

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
      
      {/* Results band (moved just under hero) */}
      <div id="results" className="bg-slate-50 py-12 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-primary">$10k/mo</div>
              <div className="text-sm text-slate-600">Ops costs eliminated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-primary">2 wks</div>
              <div className="text-sm text-slate-600">From idea → production</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-primary">99.9%</div>
              <div className="text-sm text-slate-600">Automation reliability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-primary">110+</div>
              <div className="text-sm text-slate-600">Automations shipped</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Pain Point Section – Why They Need This */}
      <div className="bg-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* clay-style decorative background */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* gradient blobs */}
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-300/40 via-indigo-300/30 to-purple-300/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-rose-300/40 via-orange-300/30 to-amber-200/20 blur-3xl" />
            {/* subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #0f172a, #0f172a 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, #0f172a, #0f172a 1px, transparent 1px, transparent 24px)",
                maskImage:
                  "radial-gradient(60% 50% at 50% 35%, black, transparent)",
              }}
            />
          </div>
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-title md:text-4xl font-bold text-slate-900 [text-wrap:balance]">The cost of manual processes is crushing SMBs</h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Problems */}
            <Card className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-slate-300 before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:bg-rose-500 before:content-['']">
            <CardHeader className="pb-2">
              <h3 className="text-lg font-semibold text-slate-900">Problems</h3>
            </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base text-slate-700">
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-rose-400/70" />Missed revenue due to slow processes</li>
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-rose-400/70" />Hours wasted on repetitive admin</li>
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-rose-400/70" />Data errors costing real money</li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Automation Fix */}
            <Card className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-slate-300 before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:bg-emerald-500 before:content-['']">
            <CardHeader className="pb-2">
              <h3 className="text-lg font-semibold text-slate-900">AI automation fix</h3>
            </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base text-slate-700">
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-emerald-500/70" />Automate workflows from day one</li>
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-emerald-500/70" />Integrate tools you already use</li>
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-emerald-500/70" />Free your team to focus on growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 3.  How It Works – 3 Steps */}
      <div id="process" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-title md:text-4xl font-bold text-slate-900">How it works</h2>
          </div>


          <div className="mt-12">
            <ProcessSteps />
          </div>
          <div className="mt-10 text-center">
            <a
              href="/book"
              data-event="cta_click"
              data-location="process"
              className="inline-flex items-center px-7 py-4 text-base md:text-lg font-semibold rounded-lg text-white bg-cta hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-white"
            >
              📅 Book my free 30-min call
            </a>
          </div>
        </div>
      </div>

      {/* 4. Common SMB Automations */}
      <div id="use-cases" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-title md:text-4xl font-bold text-slate-900 [text-wrap:balance]">Practical automations that pay for themselves</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'CRM updates & lead routing',
                sub: 'Keep reps selling while leads are routed in under 2 minutes vs 2+ hours manually. Auto-enrich with 90% accuracy.',
                slug: 'crm-updates-lead-routing',
                a1: `Use case: CRM updates & lead routing`,
              },
              {
                title: 'Weekly KPI dashboards',
                sub: 'Get real-time KPI visibility in 30 seconds vs 4+ hours building spreadsheets weekly. 100% data accuracy guaranteed.',
                slug: 'weekly-kpi-dashboards',
                a1: `Use case: Weekly KPI dashboards`,
              },
              {
                title: 'Invoice generation & reconciliation',
                sub: 'Cut invoice processing from 4 hours to 15 minutes per batch. Reduce errors from 15% to under 1%. Speed up collections by 40%.',
                slug: 'invoice-generation-reconciliation',
                a1: `Use case: Invoice generation & reconciliation`,
              },
              {
                title: 'Customer support triage & tagging',
                sub: 'Route support tickets to the right team in 30 seconds vs 20+ minutes manually. Reduce resolution time by 60%.',
                slug: 'support-triage-tagging',
                a1: `Use case: Support triage & tagging`,
              },
              {
                title: 'Data syncs between tools',
                sub: 'Eliminate 10+ hours weekly of manual data entry. Sync 500+ records instantly with 99.9% accuracy vs error-prone copy-paste.',
                slug: 'data-syncs-between-tools',
                a1: `Use case: Data syncs between tools`,
              },
              {
                title: 'Slack/Teams workflow bots',
                sub: 'Trigger approvals, updates, and reports instantly from chat. Cut workflow completion from hours to seconds.',
                slug: 'slack-teams-workflow-bots',
                a1: `Use case: Slack/Teams workflow bots`,
              },
            ].map((item) => {
              // Use internal /book redirect so we don't hardcode Calendly slug; Next.js will forward the query params
              const calendly = `/book?utm_source=site&utm_medium=usecase-card&utm_campaign=booking&utm_content=${item.slug}&a1=${encodeURIComponent(item.a1)}`
              return (
                <Link
                  key={item.title}
                  href={calendly}
                  data-event="usecase_click"
                  data-location="use-cases"
                  data-slug={item.slug}
                  data-title={item.title}
                  data-a1={item.a1}
                  className="group block rounded-2xl bg-white p-6 text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-semibold">{item.title}</div>
                    <svg aria-hidden="true" className="h-4 w-4 text-slate-400 transition group-hover:text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                  <div className="mt-1.5 text-sm text-slate-600 leading-6">{item.sub}</div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* removed old deliverables section */}

      {/* removed duplicate process section */}

      {/* removed testimonials section for streamlined flow */}

      {/* 5. Pricing */}
      <div id="pricing" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-title md:text-4xl font-bold text-slate-900 [text-wrap:balance]">Your automation should pay for itself — fast</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-center">
                <p className="text-base font-semibold text-slate-900 mb-3">Our clients typically:</p>
                <ul className="text-left inline-block text-slate-700 space-y-2 mb-5">
                  <li>✅ Eliminate $5K–$15K/mo in ops costs</li>
                  <li>✅ Save 10–20 hours/week in manual work</li>
                  <li>✅ See results in under 2 weeks</li>
                </ul>
                <a
                  href={`/book?utm_source=site&utm_medium=pricing-card`}
                  data-event="cta_click"
                  data-location="pricing"
                  className="inline-flex items-center justify-center w-full px-7 py-4 text-base md:text-lg font-semibold rounded-lg text-white bg-cta hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-white"
                >
                  Book your free call
                </a>
                <p className="mt-2 text-sm text-slate-600">We’ll map out your automation opportunities and give you a custom plan & quote.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Trust & FAQ */}
      <div id="faq" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-title md:text-4xl font-bold text-slate-900">Frequently asked questions</h2>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What does pricing look like for my business?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Our projects start at around $3K, but the real value lies in the ROI we deliver. Most SMB clients see $5K–$15K/month in operating cost savings and reclaim 10–20 hours/week of manual effort. Book a free call, and we'll assess your opportunities and provide a custom plan & quote.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How quickly can I expect results?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Typically, you'll see your first automation up and running within 2 weeks. From there, you get weekly updates and added automations each sprint.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What kind of automations do you build?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We specialize in workflows like CRM updates & lead routing; Weekly KPI dashboards; Invoice generation & reconciliation; Customer support tagging & triage; Tool integrations (e.g., Slack, Teams, Zapier). If you\'re using it—it\'s automatable.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What tools do you work with?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We integrate with most modern tools and platforms that SMBs use—CRMs like HubSpot, Pipedrive; ticketing tools like Zendesk; communication platforms like Slack/Teams; spreadsheets, email, and more. We’ll adapt to your ecosystem, not make you adapt to ours.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do I need to have technical help in-house?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Nope. We handle the full stack—from scoping and development to deployment and handover. All you need is someone to approve the logic and check that it fits your workflow.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do we measure success?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We will jointly define outcome metrics—typically cost saved, hours reclaimed, or workflow throughput within your first week. Every automation comes with performance tracking so we can optimize continuously.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What if our processes are too unique to automate?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Every business thinks their processes are unique—and often they are! That's why we don't use cookie-cutter solutions. Our 1-week pilot specifically maps your unique workflows before building custom automations that fit exactly how you work.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do we ensure the automated data is accurate?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We build in validation checkpoints and error handling from day one. Plus, you get full audit trails and can set up approval workflows for critical processes. Most clients see data accuracy improve from ~85% (manual entry) to 99%+ (automated).',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What if our team resists using the new automations?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Change management is built into our process. We involve your team in designing the workflows, provide hands-on training, and make automations feel like helpful assistants rather than replacements. The 10-20 hours/week they save usually wins them over quickly.',
                    },
                  },
                ],
              }),
            }}
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-1" className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200">
              <AccordionItem value="item-1" className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  What does pricing look like for my business?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p>Our projects start at around $3K, but the real value lies in the ROI we deliver. Most SMB clients see $5K–$15K/month in operating cost savings and reclaim 10–20 hours/week of manual effort. <a href="/book" data-event="cta_click" data-location="faq" className="text-cta underline underline-offset-4">Book a free call</a>, and we&apos;ll assess your opportunities and provide a custom plan &amp; quote.</p>
                  <p className="mt-2">Plus, we guarantee ROI within 90 days—if your automation doesn&apos;t save its cost, we&apos;ll make it right.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  How quickly can I expect results?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p>Typically, you&apos;ll see your first automation up and running within 2 weeks. From there, you get weekly updates and added automations each sprint.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  What kind of automations do you build?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div>
                    <p>We specialize in workflows like:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>CRM updates &amp; lead routing</li>
                      <li>Weekly KPI dashboards</li>
                      <li>Invoice generation &amp; reconciliation</li>
                      <li>Customer support tagging &amp; triage</li>
                      <li>Tool integrations (e.g., Slack, Teams, Zapier, etc.)</li>
                    </ul>
                    <p className="mt-2">If you&apos;re using it—it&apos;s automatable.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  What tools do you work with?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p>We integrate with most modern tools and platforms that SMBs use—CRMs like HubSpot, Pipedrive; ticketing tools like Zendesk; communication platforms like Slack/Teams; spreadsheets, email, and more. We&apos;ll adapt to your ecosystem, not make you adapt to ours.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  Do I need to have technical help in-house?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p>Nope. We handle the full stack—from scoping and development to deployment and handover. All you need is someone to approve the logic and check that it fits your workflow.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  How do we measure success?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p>We&apos;ll jointly define outcome metrics—typically cost saved, hours reclaimed, or workflow throughput within your first week. Every automation comes with performance tracking so we can optimize continuously.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  What if our processes are too unique to automate?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p>Every business thinks their processes are unique—and often they are! That&apos;s why we don&apos;t use cookie-cutter solutions. Our 1-week pilot specifically maps your unique workflows before building custom automations that fit exactly how you work.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  How do we ensure the automated data is accurate?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p>We build in validation checkpoints and error handling from day one. Plus, you get full audit trails and can set up approval workflows for critical processes. Most clients see data accuracy improve from ~85% (manual entry) to 99%+ (automated).</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9" className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger>
                  What if our team resists using the new automations?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p>Change management is built into our process. We involve your team in designing the workflows, provide hands-on training, and make automations feel like helpful assistants rather than replacements. The 10-20 hours/week they save usually wins them over quickly.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      

      {/* removed about section for focused conversion flow */}

      {/* 8. Final CTA (Urgency Push) */}
      <div id="contact" className="bg-primary">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-0">
            <h2 className="text-title md:text-4xl font-bold text-white [text-wrap:balance]">Ready to cut costs & move faster?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Book your free 30-min call today and get your first automation live in 2 weeks or less.</p>
            <p className="text-xl text-white/80 mb-8  max-w-2xl mx-auto"><strong>ROI guarantee:</strong> If your automation doesn&apos;t save its cost within 90 days, we&apos;ll refund the difference. No long-term contracts—pause or cancel anytime.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="/book" data-event="cta_click" data-location="final" className="inline-flex items-center px-7 py-4 text-base md:text-lg font-semibold rounded-lg text-white bg-cta hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-primary">📅 Book my free 30-min call</a>
            </div>
            <p className="text-sm text-white/70">⚡ Limited to 5 new clients per month for quality assurance.</p>
          </div>
        </div>
      </div>
    </>
  );
} 