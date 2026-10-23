"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { compareWorkouts, sortOptions, TSortKey } from "@/lib/sort";
import EmptyState from "./EmptyState";
import PlanRow from "./PlanRow";

type TTab = "today" | "saved";

export default function MyPlanView() {
  const {
    todayPlan,
    saved,
    isLoaded,
    removeFromToday,
    removeFromSaved,
    markDone,
  } = usePlan();

  const [tab, setTab] = useState<TTab>("today");
  const [sortKey, setSortKey] = useState<TSortKey>("duration");

  const minutes = todayPlan.reduce((sum, item) => sum + item.workout.duration, 0);
  const calories = todayPlan.reduce(
    (sum, item) => sum + item.workout.caloriesBurned,
    0
  );

  const stats = [
    { label: "Exercises", value: todayPlan.length, accent: true },
    { label: "Minutes", value: minutes, accent: false },
    { label: "Calories", value: calories, accent: false },
  ];

  const todayRows = [...todayPlan].sort((a, b) =>
    compareWorkouts(a.workout, b.workout, sortKey)
  );
  const savedRows = [...saved].sort((a, b) => compareWorkouts(a, b, sortKey));

  const tabs: { value: TTab; label: string }[] = [
    { value: "today", label: "Today's Plan" },
    { value: "saved", label: "Saved" },
  ];

  const isEmpty = tab === "today" ? todayPlan.length === 0 : saved.length === 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-surface">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 py-5 sm:px-6">
            <p className="text-xs text-muted">{stat.label}</p>
            <p
              className={`font-display text-3xl font-bold ${
                stat.accent ? "text-accent" : "text-white"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-lg border border-border bg-surface p-1">
          {tabs.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setTab(t.value)}
              className={`rounded-md px-4 py-1.5 text-xs ${
                tab === t.value
                  ? "bg-white/10 font-semibold text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-xs text-muted">
          Sort By
          <span className="relative">
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as TSortKey)}
              className="appearance-none rounded-lg border border-border bg-surface py-1.5 pl-3 pr-8 font-sans text-xs text-white"
            >
              {sortOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-surface"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2"
            />
          </span>
        </label>
      </div>

      {!isLoaded ? (
        <p className="py-16 text-center text-muted">Loading workouts…</p>
      ) : isEmpty ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {tab === "today"
            ? todayRows.map((item) => (
                <PlanRow
                  key={item.workout.id}
                  workout={item.workout}
                  done={item.done}
                  onDone={() => markDone(item.workout.id)}
                  onRemove={() => removeFromToday(item.workout.id)}
                />
              ))
            : savedRows.map((workout) => (
                <PlanRow
                  key={workout.id}
                  workout={workout}
                  onRemove={() => removeFromSaved(workout.id)}
                />
              ))}
        </div>
      )}
    </div>
  );
}