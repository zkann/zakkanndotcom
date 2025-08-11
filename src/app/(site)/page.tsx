import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#1B263B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              <span className="block">Fractional CTO + Automation</span>
              <span className="block text-[#F4D35E]">for SMBs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Start shipping faster and cut costs with practical automations and internal tools. 7‑day risk‑free pilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="/book"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-md text-white bg-[#E63946] hover:brightness-90 transition-colors shadow-lg w-full sm:w-auto justify-center"
              >
                Start Shipping Faster — Book a free strategy call
              </a>
            </div>
            <p className="text-sm text-white/70 mt-2">
              <span className="font-semibold text-[#F4D35E]">Risk‑free:</span> I’ll earn the next month.
            </p>
          </div>
        </div>
      </div>

      {/* About me quick card */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 lg:mt-16 pb-8">
          <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <Image src="/zakkann.jpg" alt="Zak Kann" width={56} height={56} className="rounded-full object-cover" />
            <div className="flex-1">
              <p className="text-gray-900 font-semibold">Zak Kann</p>
              <p className="text-gray-600 text-sm">Fractional CTO helping SMBs cut costs and ship faster with automation and internal tools.</p>
            </div>
            <Link href="/about" className="text-blue-600 hover:text-blue-700 text-sm font-medium">About me →</Link>
          </div>
        </div>
      </div>

      {/* How I work / Focus areas */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How I work</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Outcome‑first; measurable result before we build</li>
                <li>• Simple, durable, maintainable beats shiny</li>
                <li>• Security by default; least‑privilege, auditability</li>
                <li>• Fast feedback; async‑first weekly cadence</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Focus areas</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Ops automation across CRM, billing, reporting, support</li>
                <li>• Data pipelines and analytics for decisions</li>
                <li>• Internal tools: dashboards, scripts, chat bots</li>
                <li>• AI‑assisted workflows where it truly helps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results band */}
      <div id="results" className="bg-[#415A77]/10 py-10 border-b border-[#415A77]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">$10k/mo</div>
              <div className="text-sm text-gray-600">Ops costs eliminated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">2 wks</div>
              <div className="text-sm text-gray-600">From idea → production</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">99.9%</div>
              <div className="text-sm text-gray-600">Automation reliability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">20+ </div>
              <div className="text-sm text-gray-600">Automations shipped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-[#415A77]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">
              Hiring the Best Tech Leadership is Hard
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The best CTOs already have full-time jobs. Recruiting, interviewing, and onboarding wastes months before work even starts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E63946]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Months of Delay</h3>
              <p className="text-gray-600">Vetting and onboarding take time; ops problems pile up in the meantime.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#F4D35E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expensive Overhead</h3>
              <p className="text-gray-600">Full‑time leadership is costly. Fractional lets you move now without the bloat.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution / Services Section */}
      <div id="services" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hire Top CTO Talent Fractionally
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re talking PhD-level expertise from Microsoft, Google, Apple, and more. These folks are looking to make an impact, innovate, and shake things up.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cut Cost & Chaos</h3>
              <p className="text-gray-600">Replace manual busywork with bullet‑proof automations and save $1k–$10k/month.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scale Smarter</h3>
              <p className="text-gray-600">AI‑powered insights let you predict demand, personalise marketing and out‑serve bigger rivals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">On‑Demand CTO</h3>
              <p className="text-gray-600">Executive‑level strategy + hands‑on build time—all for a fraction of a salaried hire.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Common automations */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common automations</h2>
            <p className="text-xl text-gray-600">Practical wins that pay for themselves</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'CRM updates and lead routing',
              'Invoice generation and reconciliation',
              'Weekly KPIs and reporting',
              'Customer support triage and tagging',
              'Data syncs between tools',
              'Slack/Teams bots for ops',
            ].map((item) => (
              <Link key={item} href="/blog" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-5 text-gray-800 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* What you'll get */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What you&apos;ll get</h2>
            <p className="text-xl text-gray-600">Tangible deliverables from day one</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">In the first week (pilot)</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Quick‑win automation scoped and shipped</li>
                <li>Automation backlog and prioritized roadmap</li>
                <li>Documentation and handover video</li>
                <li>Security: least‑privilege access and auditability</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>1–2 production‑ready automations per sprint (by plan)</li>
                <li>Weekly check‑ins and async updates in Slack/Teams</li>
                <li>Optional team training for long‑term maintainability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-[#415A77]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">So What&apos;s Next?</h2>
            <p className="text-xl text-gray-700">A simple 3-step process to get you started</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#415A77] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book a Call</h3>
              <p className="text-gray-600">Share your context, constraints, and outcomes. Confirm fit.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#415A77] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1‑Week Pilot</h3>
              <p className="text-gray-600">Scope a quick‑win, ship it, document it. Plan next steps.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#415A77] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing</h3>
              <p className="text-gray-600">Predictable weekly cadence, async updates, measurable results.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials 
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What clients say</h2>
            <p className="text-xl text-gray-600">Trust built on results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full flex flex-col">
                <p className="text-gray-800 italic mb-4">“Zak quickly identified the highest‑ROI automations and shipped them in days—not months.”</p>
                <div className="mt-auto text-sm text-gray-600">VP Operations, SMB Retailer</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}

      {/* Pricing Section */}
      <div id="pricing" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">
              All the advantages. A fraction of the cost.
            </h2>
            <p className="text-xl text-gray-700">Choose the engagement level that works for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-8 relative">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quarter-Time</h3>
                <p className="text-gray-600 mb-4">Perfect for MVPs or ongoing maintenance</p>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  $4.5K<span className="text-lg font-normal text-gray-600">/mo</span>
                </div>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• 10 hours/week of CTO time</li>
                  <li>• 1 meeting/week + Slack/Teams checkins</li>
                  <li>• Strategic planning & architecture</li>
                  <li>• Code reviews & technical guidance</li>
                </ul>
                <a
                  href="/book"
                  className="block w-full text-white bg-[#E63946] hover:brightness-90 py-3 px-6 rounded-md transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="border-2 border-[#415A77] rounded-lg p-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#415A77] text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Half-Time</h3>
                <p className="text-gray-600 mb-4">Perfect for building new applications and features</p>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  $8K<span className="text-lg font-normal text-gray-600">/mo</span>
                </div>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• 20 hours/week of CTO time</li>
                  <li>• 2 meetings/week + Slack/Teams checkins</li>
                  <li>• Full technology leadership</li>
                  <li>• Team mentoring & development</li>
                  <li>• AI automation implementation</li>
                </ul>
                <a
                  href="/book"
                  className="block w-full text-white bg-[#E63946] hover:brightness-90 py-3 px-6 rounded-md transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-8 relative">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3/4 Time</h3>
                <p className="text-gray-600 mb-4">Lead development + integrate with team</p>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  $12K<span className="text-lg font-normal text-gray-600">/mo</span>
                </div>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• 30 hours/week of CTO time</li>
                  <li>• 3 meetings/week + daily Slack</li>
                  <li>• Full-stack development leadership</li>
                  <li>• Real-time team collaboration</li>
                  <li>• Complete AI transformation</li>
                </ul>
                <a
                  href="/book"
                  className="block w-full text-white bg-[#E63946] hover:brightness-90 py-3 px-6 rounded-md transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
            <p className="text-xl text-gray-600">Straight answers to common questions</p>
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
                    name: 'Do you sign NDAs?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes—ours or yours.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do we measure ROI?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We baseline the current process time and error rate, then track the deltas after automation.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How fast can we start?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Usually within 5 business days.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can you train our team?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes—handover docs, a video walkthrough, and optional workshops.',
                    },
                  },
                ],
              }),
            }}
          />
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you sign NDAs?</h3>
              <p className="text-gray-700">Yes—ours or yours.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How do we measure ROI?</h3>
              <p className="text-gray-700">We baseline the current process time and error rate, then track the deltas after automation.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What tools do you work with?</h3>
              <p className="text-gray-700">HubSpot/Salesforce, Airtable, Google Sheets, Zapier/Make, Slack/Teams, Postgres, and light Node/Python as needed.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How fast can we start?</h3>
              <p className="text-gray-700">Usually within 5 business days.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can you train our team?</h3>
              <p className="text-gray-700">Yes—handover docs, a video walkthrough, and optional workshops.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Zak */}
      <div id="about" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">This isn&apos;t my first rodeo.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PhD chemist turned ad‑tech data‑scientist turned 2× SaaS founder. 10+ years building revenue‑driving 
              software and data pipelines. Now helping growth‑stage businesses win with AI and automation.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/zkann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#415A77] hover:text-[#415A77]/80 font-medium"
              >
                Connect on LinkedIn
              </a>
              <span className="text-gray-300">·</span>
              <Link href="/about" className="text-[#415A77] hover:text-[#415A77]/80 font-medium">
                Read full bio →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div id="contact" className="bg-[#1B263B]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get started 7 days risk-free. Seriously.
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free 30‑minute consult and get a personalised automation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="/book"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#E63946] hover:brightness-90 transition-colors"
              >
                Book My Call
              </a>
              <a
                href="mailto:zak@zakkann.com?subject=New%20inquiry%20via%20zakkann.com"
                className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-[#415A77]/60 transition-colors"
              >
                Email Me
              </a>
            </div>
            <p className="text-sm text-white/70">
              ⚡ Slots fill quickly—secure yours today.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 