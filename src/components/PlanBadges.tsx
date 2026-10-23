"use client";

import Link from "next/link";
import { usePlan } from "@/context/PlanContext";

export default function PlanBadges() {
  const { todayPlan, saved } = usePlan();

  return (
    <div className="flex items-center gap-4">
      <Link
        href="/my-plan"
        className="flex items-center gap-1.5 text-xs text-white"
      >
        Plan
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-black">
          {todayPlan.length}
        </span>
      </Link>

      <Link
        href="/my-plan"
        className="flex items-center gap-1.5 text-xs text-muted"
      >
        Saved
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-accent px-1 text-[10px] font-bold text-accent">
          {saved.length}
        </span>
      </Link>
    </div>
  );
}