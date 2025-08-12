"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SearchBoxProps = {
  initialSearch?: string;
};

export default function SearchBox({ initialSearch = "" }: SearchBoxProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [value, setValue] = useState(initialSearch);

  // Keep local value in sync with URL changes (e.g., clicking Clear link)
  const currentSearchParam = params?.get("search") ?? "";
  useEffect(() => {
    // Only update if URL-derived value differs from local input
    if (currentSearchParam !== value) {
      setValue(currentSearchParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSearchParam]);

  // Build a URL with updated search param and reset page
  const buildUrl = useMemo(() => {
    return (nextSearch: string) => {
      const next = new URLSearchParams(params?.toString() || "");
      if (nextSearch && nextSearch.trim().length > 0) {
        next.set("search", nextSearch.trim());
      } else {
        next.delete("search");
      }
      next.delete("page");
      const qs = next.toString();
      return qs ? `${pathname}?${qs}` : `${pathname}`;
    };
  }, [params, pathname]);

  // Debounce URL updates
  useEffect(() => {
    const handle = setTimeout(() => {
      const url = buildUrl(value);
      router.replace(url, { scroll: false });
    }, 300);
    return () => clearTimeout(handle);
  }, [value, buildUrl, router]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const url = buildUrl(value);
      router.replace(url, { scroll: false });
    }
  };

  const onClear = () => {
    setValue("");
    const url = buildUrl("");
    router.replace(url, { scroll: false });
  };

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search"
        aria-label="Search posts"
        className="flex-1 min-w-0 w-full border border-gray-300 rounded-md pl-3 pr-12 py-2 bg-white focus:outline-none focus:border-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
      />
      {value ? (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
            <path fillRule="evenodd" d="M6.72 6.72a.75.75 0 0 1 1.06 0L12 10.94l4.22-4.22a.75.75 0 1 1 1.06 1.06L13.06 12l4.22 4.22a.75.75 0 1 1-1.06 1.06L12 13.06l-4.22 4.22a.75.75 0 1 1-1.06-1.06L10.94 12 6.72 7.78a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}