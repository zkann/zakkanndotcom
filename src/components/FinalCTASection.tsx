interface FinalCTASectionProps {
  title?: string;
  subtitle?: string;
  guarantee?: string;
  ctaText?: string;
  ctaLocation?: string;
  limitedText?: string;
  background?: string;
}

export default function FinalCTASection({
  title = "Ready to cut costs & move faster?",
  subtitle = "Book your free 30-min call today and get your first automation live in 2 weeks or less.",
  guarantee = "If your automation doesn't pay for itself within 90 days, we'll refund the difference. No long-term contracts—pause or cancel anytime.",
  ctaText = "📅 Book my free 30-min call",
  ctaLocation = "final",
  limitedText = "⚡ Limited to 5 new clients per month for quality assurance.",
  background = "bg-primary"
}: FinalCTASectionProps) {
  return (
    <div id="contact" className={background}>
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-0">
          <h2 className="text-title md:text-4xl font-bold text-white [text-wrap:balance]">{title}</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <p className="text-lg text-white/80 mb-8  max-w-2xl mx-auto"><strong>ROI guarantee:</strong> {guarantee}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
            <a href="/book" data-event="cta_click" data-location={ctaLocation} className="inline-flex items-center px-7 py-2 text-base md:text-lg font-semibold rounded-lg text-white bg-cta hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-primary">{ctaText}</a>
          </div>
          <p className="text-sm text-white/70 max-w-2xs mx-auto mt-2 text-center">{limitedText}</p>
        </div>
      </div>
    </div>
  );
} 