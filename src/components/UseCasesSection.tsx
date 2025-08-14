import Link from 'next/link';

interface UseCase {
  title: string;
  sub: string;
  slug: string;
  a1: string;
}

interface UseCasesSectionProps {
  title?: string;
  useCases?: UseCase[];
  background?: string;
}

const defaultUseCases = [
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
];

export default function UseCasesSection({
  title = "Practical automations that pay for themselves",
  useCases = defaultUseCases,
  background = "bg-white"
}: UseCasesSectionProps) {
  return (
    <div id="use-cases" className={`${background} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-title md:text-4xl font-bold text-slate-900 [text-wrap:balance]">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item) => {
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
  );
} 