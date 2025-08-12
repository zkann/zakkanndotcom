"use client";

import React from "react";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export default function HowItWorks() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const thresholdsRef = React.useRef<{ start: number; end: number } | null>(null);
  const [progress, setProgress] = React.useState(0);
  const hasPlayedRef = React.useRef(false);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setProgress(1);
      hasPlayedRef.current = true;
      return;
    }

    const computeThresholds = () => {
      const rect = el.getBoundingClientRect();
      const elementTop = window.scrollY + rect.top;
      const start = elementTop - window.innerHeight; // start when bottom of viewport meets top of section
      const endAtCenter = elementTop + rect.height / 2 - window.innerHeight / 2; // finish when section center aligns with viewport center
      const end = Math.max(start + 1, endAtCenter); // ensure end > start
      thresholdsRef.current = { start, end };
    };

    computeThresholds();

    const onScroll = () => {
      if (hasPlayedRef.current) return;
      const t = thresholdsRef.current;
      if (!t) return;
      const y = window.scrollY;
      const p = clamp((y - t.start) / (t.end - t.start));
      setProgress(p);
      if (p >= 1) {
        hasPlayedRef.current = true;
        setProgress(1);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      }
    };

    const onResize = () => {
      computeThresholds();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // run once in case we mount mid-viewport
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Map overall progress [0..1] to segment progresses
  const line1Progress = clamp(progress / 0.4); // 0..0.4 of the scroll animates first segment
  const line2Progress = clamp((progress - 0.6) / 0.4); // 0.6..1 animates second segment

  const dashLength = 240; // matches visual segment length
  const line1DashOffset = dashLength * (1 - line1Progress);
  const line2DashOffset = dashLength * (1 - line2Progress);

  const circle2Visible = progress >= 0.5 ? 1 : 0;
  const circle3Visible = progress >= 0.9 ? 1 : 0;

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-5xl">
      <svg viewBox="0 0 1000 150" className="w-full h-[130px] overflow-visible">
        {/* base track */}
        <line x1="160" y1="60" x2="400" y2="60" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="600" y1="60" x2="840" y2="60" stroke="#cbd5e1" strokeWidth="1" />

        {/* scroll-linked overlay segments */}
        <line
          x1="160"
          y1="60"
          x2="400"
          y2="60"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={dashLength}
          strokeDashoffset={line1DashOffset}
        />
        <line
          x1="600"
          y1="60"
          x2="840"
          y2="60"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={dashLength}
          strokeDashoffset={line2DashOffset}
        />

        {/* numbered nodes */}
        <g>
          <circle cx="60" cy="60" r="24" fill="#415A77" stroke="#415A77" strokeWidth="2" fillOpacity={1} />
          <text x="60" y="66" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight={700}>1</text>
        </g>
        <g>
          <circle cx="500" cy="60" r="24" fill="#415A77" stroke="#415A77" strokeWidth="2" fillOpacity={circle2Visible} />
          <text x="500" y="66" textAnchor="middle" fill={circle2Visible ? "#ffffff" : "#415A77"} fontSize="16" fontWeight={700}>2</text>
        </g>
        <g>
          <circle cx="940" cy="60" r="24" fill="#415A77" stroke="#415A77" strokeWidth="2" fillOpacity={circle3Visible} />
          <text x="940" y="66" textAnchor="middle" fill={circle3Visible ? "#ffffff" : "#415A77"} fontSize="16" fontWeight={700}>3</text>
        </g>

        {/* titles and descriptions */}
        <text x="60" y="112" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight={600}>Book a free call</text>
        <text x="60" y="134" textAnchor="middle" fill="#475569" fontSize="14">Identify automation opportunities</text>

        <text x="500" y="112" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight={600}>1‑week pilot</text>
        <text x="500" y="134" textAnchor="middle" fill="#475569" fontSize="14">Build your first automation</text>

        <text x="940" y="112" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight={600}>Scale & optimize</text>
        <text x="940" y="134" textAnchor="middle" fill="#475569" fontSize="14">Continuous improvements</text>
      </svg>
    </div>
  );
}

