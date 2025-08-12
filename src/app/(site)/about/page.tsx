import Image from 'next/image';

export const metadata = {
  title: 'About – Zak Kann',
  description:
    'Helping SMBs automate, accelerate, and win — with AI that pays for itself.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
          Helping SMBs Automate, Accelerate, and Win — with AI That Pays for Itself
        </h1>
        <div className="mb-6">
          <Image src="/zakkann.jpg" alt="Zak Kann" width={120} height={120} className="rounded-full object-cover" />
        </div>

        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          I’m Zak Kann — a technologist, founder, and AI automation strategist with over a decade of experience building software that drives measurable business results. I’ve led teams, built SaaS companies from scratch, and implemented AI-driven workflows that have saved clients millions in operating costs.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Today, I work with small and mid-sized businesses to help them identify, design, and deploy high-impact automations — fast. The goal is simple: cut waste, speed up execution, and give you the leverage of a much larger team, without the overhead.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">My Background</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Former SaaS Founder — Scaled products in competitive industries, from concept to acquisition.</li>
            <li>Data Science &amp; Engineering — PhD in computational chemistry with experience in analytics-heavy, high-precision industries.</li>
            <li>Automation Specialist — Designed and shipped 110+ automations across marketing, operations, and customer success.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why I Focus on SMBs</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Large companies have the resources to adopt new technology quickly. SMBs don’t — and they’re the ones who benefit most from automation. I bridge that gap, bringing enterprise-grade automation capabilities to businesses that need them the most.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">My Approach</h2>
          <ol className="list-decimal list-inside text-slate-700 space-y-2">
            <li>
              <span className="font-semibold">Discovery</span> — Identify your biggest automation opportunities in a free strategy call.
            </li>
            <li>
              <span className="font-semibold">Pilot</span> — Ship your first automation in 7 days or less.
            </li>
            <li>
              <span className="font-semibold">Scale</span> — Continually add new automations and measure ROI.
            </li>
          </ol>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Results</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">Clients I work with routinely:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Eliminate $5K–$15K/mo in ops costs.</li>
            <li>Save 10–20 hours/week in manual work.</li>
            <li>See results in under 2 weeks.</li>
          </ul>
        </div>

        <div className="mt-12">
          <a
            href="/book"
            className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-cta hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-white"
          >
            📅 Let’s Talk Automation
          </a>
          <p className="mt-2 text-sm text-slate-600">
            Book a free 30-minute call and see what’s possible for your business.
          </p>
        </div>
      </div>
    </div>
  );
}

