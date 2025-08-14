interface HeroSectionProps {
  industry?: string;
  subtitle?: string | Array<{ text: string; highlight?: boolean }>;
  ctaText?: string;
  ctaLocation?: string;
  limitedText?: string;
  background?: string;
}

export default function HeroSection({
  industry,
  subtitle = "We deliver AI-powered automations that cut costs, remove bottlenecks, and accelerate SMBs without hiring more people.",
  ctaText = "📅 Book my free 30-min call",
  ctaLocation = "hero",
  limitedText = "Limited to 5 new clients per month for quality assurance.",
  background = "bg-primary"
}: HeroSectionProps) {
  const renderSubtitle = (subtitleContent: string | Array<{ text: string; highlight?: boolean }>) => {
    if (Array.isArray(subtitleContent)) {
      return (
        <>
          {subtitleContent.map((part, index) => (
            part.highlight ? (
              <span key={index} className="text-highlight">{part.text}</span>
            ) : (
              part.text
            )
          ))}
        </>
      );
    }
    
    // Fallback to the old auto-detection for backward compatibility
    const highlightMatch = subtitleContent.match(/accelerate\s+([^,\s]+)/);
    if (highlightMatch) {
      const beforeHighlight = subtitleContent.substring(0, subtitleContent.indexOf('accelerate'));
      const afterHighlight = subtitleContent.substring(subtitleContent.indexOf('accelerate') + highlightMatch[0].length);
      return (
        <>
          {beforeHighlight}<span className="text-highlight">accelerate {highlightMatch[1]}</span>{afterHighlight}
        </>
      );
    }
    return subtitleContent;
  };

  const formatIndustry = (industryName: string) => {
    // Replace spaces with non-breaking spaces within the industry name
    return industryName.replace(/\s+/g, '\u00A0');
  };

  return (
    <div className={`relative ${background} py-24`}>
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5 text-white [text-wrap:balance]">
            <span className="block">
              AI aut
              <span className="relative inline-flex items-center justify-center align-baseline text-highlight text-[0.8em] leading-none animate-spin [animation-duration:5.5s]" aria-hidden="true">⚙️</span>
              <span className="sr-only">o</span>
              mation{industry ? ` for ${formatIndustry(industry)}` : ''} that <span className="text-highlight">pays for itself</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed md:leading-8">
            {renderSubtitle(subtitle)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              data-event="cta_click"
              data-location={ctaLocation}
              className="inline-flex items-center px-7 py-4 text-base md:text-lg font-semibold rounded-lg text-white bg-cta hover:brightness-90 transition-colors shadow-sm w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-primary"
            >
              {ctaText}
            </a>
          </div>
          <div className="text-sm text-white/80 mt-4">{limitedText}</div>
        </div>
      </div>
    </div>
  );
} 