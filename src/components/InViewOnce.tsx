"use client";

import React from "react";

type InViewOnceProps = {
  className?: string;
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
};

export default function InViewOnce({ className, children, rootMargin = "0px", threshold = 0.25 }: InViewOnceProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, rootMargin, threshold]);

  return (
    <div ref={ref} className={inView ? `inview ${className ?? ""}` : className}>
      {children}
    </div>
  );
}

