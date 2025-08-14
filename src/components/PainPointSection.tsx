import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface PainPointSectionProps {
  title?: string;
  problems?: string[];
  solutions?: string[];
  background?: string;
}

export default function PainPointSection({
  title = "The cost of manual processes is crushing SMBs",
  problems = [
    'Missed revenue due to slow processes',
    'Hours wasted on repetitive admin',
    'Data errors costing real money'
  ],
  solutions = [
    'Automate workflows from day one',
    'Integrate tools you already use',
    'Free your team to focus on growth'
  ],
  background = "bg-white"
}: PainPointSectionProps) {
  return (
    <div className={`${background} py-20`}>
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
          <h2 className="text-title md:text-4xl font-bold text-slate-900 [text-wrap:balance]">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Problems */}
          <Card className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-slate-300 before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:bg-rose-500 before:content-['']">
            <CardHeader className="pb-2">
              <h3 className="text-lg font-semibold text-slate-900">Problems</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-base text-slate-700">
                {problems.map((problem, index) => (
                  <li key={index} className="relative pl-5 leading-6 md:leading-7">
                    <span className="absolute left-0 top-2 size-1.5 rounded-full bg-rose-400/70" />
                    {problem}
                  </li>
                ))}
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
                {solutions.map((solution, index) => (
                  <li key={index} className="relative pl-5 leading-6 md:leading-7">
                    <span className="absolute left-0 top-2 size-1.5 rounded-full bg-emerald-500/70" />
                    {solution}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 