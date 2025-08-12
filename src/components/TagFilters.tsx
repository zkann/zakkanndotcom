"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type TagFiltersProps = {
  tags: string[];
  activeTag?: string;
  initialVisible?: number;
  search?: string;
};

export default function TagFilters({ tags, activeTag, initialVisible = 5, search }: TagFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { visibleTags, shouldShowToggle } = useMemo(() => {
    const uniqueTags = Array.from(new Set(tags));
    const collapsed = uniqueTags.slice(0, Math.max(0, initialVisible));

    const ensureActiveIncluded =
      !isExpanded && activeTag && !collapsed.includes(activeTag)
        ? [...collapsed, activeTag]
        : collapsed;

    const finalVisible = isExpanded ? uniqueTags : ensureActiveIncluded;

    return {
      visibleTags: finalVisible,
      shouldShowToggle: uniqueTags.length > initialVisible,
    };
  }, [tags, activeTag, initialVisible, isExpanded]);

  return (
    <div className="max-w-full">
      <div className="flex flex-wrap gap-2">
        {visibleTags.map((t) => (
          <Link
            key={t}
            href={(() => {
              if (t === activeTag) {
                // Clicking the active tag clears it; preserve current search if present
                return search && search.length > 0
                  ? `/blog?${new URLSearchParams({ search }).toString()}`
                  : "/blog";
              }
              const params = new URLSearchParams();
              params.set("tag", t);
              if (search && search.length > 0) params.set("search", search);
              return `/blog?${params.toString()}`;
            })()}
            className={`px-3 py-1 rounded-full text-sm font-medium border ${
              t === activeTag
                ? "bg-secondary text-white border-secondary"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {t}
          </Link>
        ))}
      </div>

      {shouldShowToggle && (
        <div className="mt-2">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-0 text-sm font-medium text-secondary hover:opacity-80 hover:underline bg-transparent border-0"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show less" : "Show all"}
          </button>
        </div>
      )}
    </div>
  );
}

