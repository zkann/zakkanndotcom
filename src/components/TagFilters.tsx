"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type TagFiltersProps = {
  tags: string[];
  activeTag?: string;
  initialVisible?: number;
};

export default function TagFilters({ tags, activeTag, initialVisible = 5 }: TagFiltersProps) {
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
    <div className="flex flex-wrap gap-2 max-w-full">
      {visibleTags.map((t) => (
        <Link
          key={t}
          href={t === activeTag ? "/blog" : `/blog?tag=${encodeURIComponent(t)}`}
          className={`px-3 py-1 rounded-full text-sm font-medium border ${
            t === activeTag
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          }`}
        >
          {t}
        </Link>
      ))}

      {shouldShowToggle && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="p-0 text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline bg-transparent border-0"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show less" : "Show all"}
        </button>
      )}
    </div>
  );
}

