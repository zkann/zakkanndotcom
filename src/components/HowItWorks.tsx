"use client";

import React from "react";

export default function HowItWorks() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { setPlay(true); break; }
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-5xl">
      <svg viewBox="0 0 1000 150" className="w-full h-[130px] overflow-visible">
        {/* base track (positions mirror old layout ~6%, 50%, 94%) */}
        <line x1="160" y1="60" x2="400" y2="60" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="600" y1="60" x2="840" y2="60" stroke="#cbd5e1" strokeWidth="1" />

        {/* animated overlay segments (fill left->right) */}
        <line x1="160" y1="60" x2="400" y2="60" stroke="#64748b" strokeWidth="2" strokeLinecap="round"
          className={play ? "[stroke-dasharray:240] [stroke-dashoffset:240] animate-[dash1_6s_ease-in-out_infinite]" : ""} />
        <line x1="600" y1="60" x2="840" y2="60" stroke="#64748b" strokeWidth="2" strokeLinecap="round"
          className={play ? "[stroke-dasharray:240] [stroke-dashoffset:240] animate-[dash2_6s_ease-in-out_infinite]" : ""} />

        {/* numbered nodes with fill-in animation */}
        <g>
          <circle cx="60" cy="60" r="24" fill="#415A77" stroke="#415A77" strokeWidth="2" fillOpacity={1} data-cfill="1" />
          <text x="60" y="66" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight={700}>1</text>
        </g>
        <g>
          <circle cx="500" cy="60" r="24" fill="#415A77" stroke="#415A77" strokeWidth="2" fillOpacity={0} data-cfill="1"
            className={play ? "animate-[c2_6s_linear_infinite_both]" : ""} />
          <text x="500" y="66" textAnchor="middle" fill="#415A77" fontSize="16" fontWeight={700} data-tfill
            className={play ? "animate-[t2_6s_linear_infinite_both]" : ""}>2</text>
        </g>
        <g>
          <circle cx="940" cy="60" r="24" fill="#415A77" stroke="#415A77" strokeWidth="2" fillOpacity={0} data-cfill="1"
            className={play ? "animate-[c3_6s_linear_infinite_both]" : ""} />
          <text x="940" y="66" textAnchor="middle" fill="#415A77" fontSize="16" fontWeight={700} data-tfill
            className={play ? "animate-[t3_6s_linear_infinite_both]" : ""}>3</text>
        </g>

        {/* titles and descriptions centered to circles (old typography feel) */}
        <text x="60" y="112" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight={600}>Book a Free Call</text>
        <text x="60" y="134" textAnchor="middle" fill="#475569" fontSize="14">Identify automation opportunities</text>

        <text x="500" y="112" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight={600}>1‑Week Pilot</text>
        <text x="500" y="134" textAnchor="middle" fill="#475569" fontSize="14">Build your first automation</text>

        <text x="940" y="112" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight={600}>Scale & Optimize</text>
        <text x="940" y="134" textAnchor="middle" fill="#475569" fontSize="14">Continuous improvements</text>

        <style>{`
          @keyframes dash1 { 0%{stroke-dashoffset:240} 8%{stroke-dashoffset:240} 36%{stroke-dashoffset:0} 100%{stroke-dashoffset:0} }
          @keyframes dash2 { 0%{stroke-dashoffset:240} 44%{stroke-dashoffset:240} 76%{stroke-dashoffset:0} 100%{stroke-dashoffset:0} }
          /* circle fill highlight timings aligned with line sweeps; hold until loop restart (smooth fade) */
          @keyframes c1 { 0%{fill-opacity:0} 5%{fill-opacity:0} 7%{fill-opacity:1} 100%{fill-opacity:1} }
          @keyframes c2 { 0%,36%{fill-opacity:0} 40%{fill-opacity:1} 100%{fill-opacity:1} }
          @keyframes c3 { 0%,72%{fill-opacity:0} 76%{fill-opacity:1} 100%{fill-opacity:1} }
          /* number color fades from outline to white in the same window; holds */
          @keyframes t1 { 0%{fill:#415A77} 5%{fill:#415A77} 7%{fill:#ffffff} 100%{fill:#ffffff} }
          @keyframes t2 { 0%,36%{fill:#415A77} 40%{fill:#ffffff} 100%{fill:#ffffff} }
          @keyframes t3 { 0%,72%{fill:#415A77} 76%{fill:#ffffff} 100%{fill:#ffffff} }
          @media (prefers-reduced-motion: reduce){
            line[stroke="#64748b"], circle[data-cfill], text{ animation: none !important }
            circle[data-cfill]{ fill-opacity:1 !important }
            text{ fill:#ffffff !important }
          }
        `}</style>
      </svg>
    </div>
  );
}

