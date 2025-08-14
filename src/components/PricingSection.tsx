interface PricingSectionProps {
  title?: string;
  benefits?: string[];
  ctaText?: string;
  ctaLocation?: string;
  subtitle?: string;
  background?: string;
}

export default function PricingSection({
  title = "Your automation should pay for itself — fast",
  benefits = [
    '✅ Eliminate $5K–$15K/mo in ops costs',
    '✅ Save 10–20 hours/week in manual work',
    '✅ See results in under 2 weeks'
  ],
  ctaText = "Book your free call",
  ctaLocation = "pricing",
  subtitle = "We'll map out your automation opportunities and give you a custom plan & quote.",
  background = "bg-slate-50"
}: PricingSectionProps) {
  return (
    <div id="pricing" className={`${background} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-title md:text-4xl font-bold text-slate-900 [text-wrap:balance]">{title}</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="text-center">
              <p className="text-base font-semibold text-slate-900 mb-3">Our clients typically:</p>
              <ul className="text-left inline-block text-slate-700 space-y-2 mb-5">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <a
                href={`/book?utm_source=site&utm_medium=pricing-card`}
                data-event="cta_click"
                data-location={ctaLocation}
                className="inline-flex items-center justify-center w-full px-7 py-4 text-base md:text-lg font-semibold rounded-lg text-white bg-cta hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-white"
              >
                {ctaText}
              </a>
              <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 