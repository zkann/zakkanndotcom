interface ResultsBandProps {
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  background?: string;
}

export default function ResultsBand({
  metrics = [
    { value: '$10k/mo', label: 'Ops costs eliminated' },
    { value: '2 wks', label: 'From idea → production' },
    { value: '99.9%', label: 'Automation reliability' },
    { value: '110+', label: 'Automations shipped' }
  ],
  background = "bg-slate-50"
}: ResultsBandProps) {
  return (
    <div id="results" className={`${background} py-12 border-y border-slate-200/70`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{metric.value}</div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 