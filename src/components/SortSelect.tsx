"use client";

import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { sortOptions, TSortKey } from "@/lib/sort";

export default function SortSelect({ current }: { current: TSortKey }) {
  const router = useRouter();

  return (
    <label className="flex items-center gap-2 text-sm text-muted">
      Sort By
      <span className="relative">
        <select
          value={current}
          onChange={(e) =>
            router.replace(`/?sort=${e.target.value}#library`, {
              scroll: false,
            })
          }
          className="appearance-none rounded-full border border-border bg-surface py-1.5 pl-4 pr-9 text-sm text-white"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value} className="bg-surface">
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
        />
      </span>
    </label>
  );
}