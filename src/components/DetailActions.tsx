"use client";

import { Bookmark, CalendarPlus } from "lucide-react";
import { MAX_PLAN, usePlan } from "@/context/PlanContext";
import { TWorkout } from "@/types";

export default function DetailActions({ workout }: { workout: TWorkout }) {
  const { todayPlan, addToToday, saveForLater } = usePlan();

  const isFull = todayPlan.length >= MAX_PLAN;

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => addToToday(workout)}
        disabled={isFull}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-black hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <CalendarPlus size={16} />
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={() => saveForLater(workout)}
        className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-white hover:border-accent"
      >
        <Bookmark size={16} />
        Save for later
      </button>
    </div>
  );
}