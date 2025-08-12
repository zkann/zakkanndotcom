"use client";
import { useEffect, useMemo, useState } from 'react';

type TocHeading = { id: string; text: string; level: number };

export default function Toc() {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('article h2, article h3'));
    const hs: TocHeading[] = nodes
      .filter((el) => el.id)
      .map((el) => ({ id: el.id, text: el.textContent || '', level: el.tagName === 'H2' ? 2 : 3 }));
    setHeadings(hs);

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the top-most visible heading as active
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0]) setActiveId((visible[0].target as HTMLElement).id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 1] }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const hasHeadings = useMemo(() => headings.length > 0, [headings]);
  if (!hasHeadings) return null;

  return (
    <nav aria-label="Table of contents" className="hidden lg:block sticky top-24 w-64">
      <div className="border border-gray-200 rounded-lg p-4 bg-white">
        <p className="text-sm font-semibold text-gray-900 mb-2">On this page</p>
        <ul className="space-y-1 text-sm">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={
                  `block truncate transition-colors ${
                    activeId === h.id ? 'text-secondary font-medium' : 'text-gray-700 hover:text-secondary'
                  } ${h.level === 3 ? 'pl-4' : ''}`
                }
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

