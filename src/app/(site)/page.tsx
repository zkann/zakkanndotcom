import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🎉 New Plan. Lower prices. <span className="ml-2 text-blue-600">Thank AI for the assist</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Top-Tier Fractional CTO &</span>
              <span className="block text-blue-600">AI-Driven Automation</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700 mt-2">
                at a Fraction of the Cost
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Cut costs, crush bottlenecks and ship faster—without hiring a full‑time tech exec.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Book a 15‑min Strategy Call →
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                See Pricing
              </a>
            </div>
            <p className="text-sm text-gray-500 mb-12">
              <span className="font-semibold text-green-600">Results‑backed guarantee:</span> see ROI within 60 days or we work free until you do.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Ribbon */}
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-8">Trusted by</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">MS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Microsoft</p>
                    <p className="text-sm text-gray-500">Former Team Lead</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic">"Exceptional technical leadership and strategic thinking"</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">RC</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">RetailCo</p>
                    <p className="text-sm text-gray-500">COO</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic">"Saved us 12 hrs/week with smart automation"</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">FS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">FinTech Startup</p>
                    <p className="text-sm text-gray-500">Founder</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic">"Paid for itself in under a month"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hiring the Best Tech Leadership is Hard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The best CTOs already have full-time jobs. Recruiting, interviewing, and onboarding wastes months before work even starts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Limited Talent Pool</h3>
              <p className="text-gray-600">The best talent already has full-time jobs, so your hiring pool is severely limited.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Months of Delays</h3>
              <p className="text-gray-600">Interviewing, vetting, and onboarding waste months before any actual work begins.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expensive Overhead</h3>
              <p className="text-gray-600">Full-time CTOs cost $200K+ plus benefits, equity, and management overhead.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hire Top CTO Talent Fractionally
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're talking PhD-level expertise from Microsoft, Google, Apple, and more. These folks are looking to make an impact, innovate, and shake things up.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
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

      {/* How It Works */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">So What's Next?</h2>
            <p className="text-xl text-gray-600">A simple 3-step process to get you started</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book A Demo</h3>
              <h4 className="text-lg font-medium text-gray-700 mb-2">We Audit Your Stack</h4>
              <p className="text-gray-600">Based on your requirements and tech stack, our team assembles, vets, and onboards the talent you need.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">One Week</h3>
              <h4 className="text-lg font-medium text-gray-700 mb-2">Risk-Free Trial</h4>
              <p className="text-gray-600">Try us out for a week, risk-free. If you aren't satisfied with your results, we'll either fix it, or it's on us.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing</h3>
              <h4 className="text-lg font-medium text-gray-700 mb-2">Management</h4>
              <p className="text-gray-600">We join your Slack/Teams to communicate continuously, ensuring ongoing delivery success!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All the advantages. A fraction of the cost.
            </h2>
            <p className="text-xl text-gray-600">Choose the engagement level that works for your business</p>
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
                  href="#contact"
                  className="block w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="border-2 border-blue-600 rounded-lg p-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
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
                  href="#contact"
                  className="block w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
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
                  href="#contact"
                  className="block w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hear From Our Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">JL</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jordan L.</p>
                  <p className="text-sm text-gray-600">Founder, FinTech Startup</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Zak's two‑week pilot shaved five hours off our weekly reporting cycle and paid for itself inside a month."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">BG</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Bryan Garner</p>
                  <p className="text-sm text-gray-600">Partner, White Deer Group</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"We feel like it's a long term relationship. I know I can come back and have them build on what we've made over time."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">DJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">David Jordan</p>
                  <p className="text-sm text-gray-600">COO, Tauxbe Data</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"When you hire people, normally it takes 90 days to get them up to speed - they were able to jump in and start delivering within weeks."</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Zak */}
      <div id="about" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">This isn't our first rodeo.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PhD chemist turned ad‑tech data‑scientist turned 2× SaaS founder. 10+ years building revenue‑driving 
              software and data pipelines. Now helping growth‑stage businesses win with AI and automation.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/zacharykann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Connect on LinkedIn
              </a>
              <span className="text-gray-300">·</span>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
                Read full bio →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div id="contact" className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get started with us 7 days risk-free. Seriously.
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a free 15‑minute consult and get a personalised automation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="mailto:hello@zakann.com"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                Book My Call
              </a>
              <a
                href="mailto:hello@zakann.com"
                className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
              >
                Email Me
              </a>
            </div>
            <p className="text-sm text-blue-200">
              ⚡ Slots fill quickly—secure yours today.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 