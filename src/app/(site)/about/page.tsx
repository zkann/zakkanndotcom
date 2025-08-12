import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About – Zak Kann',
  description:
    'Founder and AI automation consultant helping SMBs cut costs and ship faster with automation and internal tools.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">About Zak Kann</h1>
        <div className="mb-6">
          <Image src="/zakkann.jpg" alt="Zak Kann" width={120} height={120} className="rounded-full object-cover" />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I’m a PhD chemist turned data scientist and 2× SaaS founder. Over the last decade I’ve
          led teams building revenue-driving software, data platforms, and AI-powered automations
          for startups and growth-stage companies.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Today I partner with SMBs to design and deliver AI automations and internal tools—reducing operating costs, eliminating bottlenecks, and shipping faster.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="/book"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#E63946] hover:brightness-90 transition-colors"
          >
            📅 Book my free 30-min call
          </a>
          <a
            href="https://linkedin.com/in/zkann"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Connect on LinkedIn
          </a>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Read the blog
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What I’m great at</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Automating repeatable ops across CRM, billing, reporting, and support</li>
            <li>Building internal tools and dashboards that teams actually use</li>
            <li>Designing pragmatic data pipelines for decision‑making</li>
            <li>Choosing simple, maintainable architectures that scale sensibly</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to work together</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Book a call to align on goals and fit</li>
            <li>Optional 1‑week pilot to ship a quick‑win and plan the backlog</li>
            <li>Ongoing delivery with clear SLAs and weekly cadence</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

