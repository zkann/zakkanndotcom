import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <>
      {/* Hero Section (dark background for contrast) */}
      <div className="relative bg-[#1B263B] py-24">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5 text-white">
              <span className="block">AI Automation That <span className="text-[#F4D35E]">Pays for Itself</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed md:leading-8">
              We deliver AI-powered automations that cut costs, remove bottlenecks, and <span className="text-[#F4D35E]">accelerate SMBs</span> without hiring more people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="inline-flex items-center px-7 py-4 text-base md:text-lg font-semibold rounded-xl text-white bg-[#E63946] hover:brightness-90 transition-colors shadow-sm w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E63946] focus-visible:ring-offset-[#1B263B]"
              >
                📅 Book My Free 30-Min Call
              </a>
            </div>
            <div className="text-sm text-white/80 mt-4">Slots fill fast, so secure yours today.</div>
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
              <div className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">$10k/mo</div>
              <div className="text-sm text-slate-600">Ops costs eliminated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">2 wks</div>
              <div className="text-sm text-slate-600">From idea → production</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">99.9%</div>
              <div className="text-sm text-slate-600">Automation reliability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">110+</div>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#1B263B]">The Cost of Manual Processes is Crushing SMBs</h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Problems */}
            <Card className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-slate-300 before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:bg-rose-500 before:content-['']">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <span className="text-[11px] font-semibold tracking-wide text-slate-600 uppercase">Problems</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[15px] text-slate-700">
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-rose-400/70" />Missed revenue due to slow processes</li>
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-rose-400/70" />Hours wasted on repetitive admin</li>
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-rose-400/70" />Data errors costing real money</li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Automation Fix */}
            <Card className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-slate-300 before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:bg-emerald-500 before:content-['']">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <span className="text-[11px] font-semibold tracking-wide text-slate-600 uppercase">AI Automation Fix</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[15px] text-slate-700">
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-emerald-500/70" />Automate workflows from day one</li>
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-emerald-500/70" />Integrate tools you already use</li>
                  <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-emerald-500/70" />Free your team to focus on growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 3. What You’ll Get (Deliverables) */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Automation That Pays for Itself From Day One</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">In Your First Week</h3>
              <ul className="space-y-2.5 text-gray-700">
                <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-slate-400/60" />1–2 AI-powered automations shipped</li>
                <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-slate-400/60" />Backlog of high-ROI automation ideas</li>
                <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-slate-400/60" />Documentation & handover video</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ongoing</h3>
              <ul className="space-y-2.5 text-gray-700">
                <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-slate-400/60" />New automations each sprint</li>
                <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-slate-400/60" />Weekly updates + performance tracking</li>
                <li className="relative pl-5 leading-6 md:leading-7"><span className="absolute left-0 top-2 size-1.5 rounded-full bg-slate-400/60" />Optional team training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 4. How It Works – 3 Steps */}
      <div id="process" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">How It Works</h2>
          </div>
          {/* New single-SVG timeline */}
          <div className="hidden md:block">
            <HowItWorks />
          </div>
          {/* Mobile fallback: simple stacked steps (unchanged) */}

          {/* Stacked steps (mobile) */}
          <div className="md:hidden space-y-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#415A77] text-white text-sm ring-1 ring-black/5">1</div>
              <h3 className="text-base font-semibold text-slate-900">Book a Free Call</h3>
              <p className="mt-1 text-slate-600 leading-6">Identify automation opportunities</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#415A77] text-white text-sm ring-1 ring-black/5">2</div>
              <h3 className="text-base font-semibold text-slate-900">1‑Week Pilot</h3>
              <p className="mt-1 text-slate-600 leading-6">Build your first automation</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#415A77] text-white text-sm ring-1 ring-black/5">3</div>
              <h3 className="text-base font-semibold text-slate-900">Scale & Optimize</h3>
              <p className="mt-1 text-slate-600 leading-6">Continuous improvements</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="/book"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-md text-white bg-[#E63946] hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E63946]"
            >
              📅 Book My Free 30-Min Call
            </a>
          </div>
        </div>
      </div>

      {/* 5. Common SMB Automations */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Practical Automations That Pay for Themselves</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'CRM updates & lead routing',
                sub: 'Keep reps selling while leads are automatically routed and enriched.',
                slug: 'crm-updates-lead-routing',
                a1: `Use case: CRM updates & lead routing`,
              },
              {
                title: 'Weekly KPI dashboards',
                sub: 'Real-time visibility without manual spreadsheets.',
                slug: 'weekly-kpi-dashboards',
                a1: `Use case: Weekly KPI dashboards`,
              },
              {
                title: 'Invoice generation & reconciliation',
                sub: 'Reduce errors and accelerate cash collection.',
                slug: 'invoice-generation-reconciliation',
                a1: `Use case: Invoice generation & reconciliation`,
              },
              {
                title: 'Customer support triage & tagging',
                sub: 'Route issues to the right person, fast.',
                slug: 'support-triage-tagging',
                a1: `Use case: Support triage & tagging`,
              },
              {
                title: 'Data syncs between tools',
                sub: 'One source of truth with fewer copy-paste mistakes.',
                slug: 'data-syncs-between-tools',
                a1: `Use case: Data syncs between tools`,
              },
              {
                title: 'Slack/Teams workflow bots',
                sub: 'Trigger workflows from chat to speed up ops.',
                slug: 'slack-teams-workflow-bots',
                a1: `Use case: Slack/Teams workflow bots`,
              },
            ].map((item) => {
              // Use internal /book redirect so we don't hardcode Calendly slug; Next.js will forward the query params
              const calendly = `/book?utm_source=site&utm_medium=usecase-card&utm_campaign=booking&utm_content=${item.slug}&a1=${encodeURIComponent(item.a1)}`
              return (
                <Link key={item.title} href={calendly} className="group block rounded-2xl bg-white p-6 text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300">
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

      {/* 6. Pricing & Packages */}
      <div id="pricing" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">Simple, Transparent Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-center">
                <h3 className="text-xs font-semibold tracking-wide text-slate-600 mb-1 uppercase">Starter</h3>
                <p className="text-3xl font-extrabold text-[#1B263B] mb-2">$X/mo</p>
                <p className="text-slate-600 mb-5">1 automation/mo + support</p>
                <a
                  href={`/book?utm_source=site&utm_medium=pricing-card&utm_campaign=booking&utm_content=starter&a1=${encodeURIComponent('Plan interest: Starter')}`}
                  className="block w-full text-white bg-[#E63946] hover:brightness-90 py-3 px-6 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E63946]"
                >
                  Book starter call
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl bg-white p-8 shadow-md ring-2 ring-[#415A77]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-[#415A77] px-3 py-1 text-xs font-medium text-white">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-xs font-semibold tracking-wide text-slate-600 mb-1 uppercase">Growth</h3>
                <p className="text-3xl font-extrabold text-[#1B263B] mb-2">$X/mo</p>
                <p className="text-slate-600 mb-5">2–3 automations/mo + training</p>
                <a
                  href={`/book?utm_source=site&utm_medium=pricing-card&utm_campaign=booking&utm_content=growth&a1=${encodeURIComponent('Plan interest: Growth')}`}
                  className="block w-full text-white bg-[#E63946] hover:brightness-90 py-3 px-6 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E63946]"
                >
                  Book growth call
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-center">
                <h3 className="text-xs font-semibold tracking-wide text-slate-600 mb-1 uppercase">Scale</h3>
                <p className="text-3xl font-extrabold text-[#1B263B] mb-2">$X/mo</p>
                <p className="text-slate-600 mb-5">Unlimited requests, dedicated support</p>
                <a
                  href={`/book?utm_source=site&utm_medium=pricing-card&utm_campaign=booking&utm_content=scale&a1=${encodeURIComponent('Plan interest: Scale')}`}
                  className="block w-full text-white bg-[#E63946] hover:brightness-90 py-3 px-6 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E63946]"
                >
                  Book scale call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Trust & FAQ */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
                    name: 'How do you measure ROI?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We baseline time-on-task and error rates, then track savings, throughput, and error reduction after automation.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What tools do you work with?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We integrate with common SMB stacks (HubSpot/Salesforce, QuickBooks, Stripe, Airtable, Google Workspace, Slack/Teams, Zapier/Make, and APIs).',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How quickly can we start?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Usually within 5 business days.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you sign NDAs?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, ours or yours.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can you train our team?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, handover docs, a video walkthrough, and optional training sessions.',
                    },
                  },
                ],
              }),
            }}
          />
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="font-semibold text-gray-900 mb-2">How do you measure ROI?</h3>
              <p className="text-gray-700">We baseline time-on-task and error rates, then track savings, throughput, and error reduction after automation.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="font-semibold text-gray-900 mb-2">What tools do you work with?</h3>
              <p className="text-gray-700">We integrate with common SMB stacks (HubSpot/Salesforce, QuickBooks, Stripe, Airtable, Google Workspace, Slack/Teams, Zapier/Make, and APIs).</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="font-semibold text-gray-900 mb-2">How quickly can we start?</h3>
              <p className="text-gray-700">Usually within 5 business days.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="font-semibold text-gray-900 mb-2">Do you sign NDAs?</h3>
              <p className="text-gray-700">Yes, ours or yours.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="font-semibold text-gray-900 mb-2">Can you train our team?</h3>
              <p className="text-gray-700">Yes, handover docs, a video walkthrough, and optional training sessions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* removed about section for focused conversion flow */}

      {/* 8. Final CTA (Urgency Push) */}
      <div id="contact" className="bg-[#1B263B]">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Cut Costs & Move Faster?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Book your free 30-min call today and get your first automation live in 7 days or less.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="/book" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#E63946] hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E63946] focus-visible:ring-offset-[#1B263B]">📅 Book My Free 30-Min Call</a>
            </div>
            <p className="text-sm text-white/70">⚡ Slots fill quickly. Secure yours today.</p>
          </div>
        </div>
      </div>
    </>
  );
} 