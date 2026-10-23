"use client";

import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TWorkout } from "@/types";

export const MAX_PLAN = 5;
const STORAGE_KEY = "fitlog-plan";

export type TPlanItem = { workout: TWorkout; done: boolean };

type TPlanContext = {
  todayPlan: TPlanItem[];
  saved: TWorkout[];
  isLoaded: boolean;
  addToToday: (workout: TWorkout) => void;
  saveForLater: (workout: TWorkout) => void;
  removeFromToday: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markDone: (id: number) => void;
};

const PlanContext = createContext<TPlanContext | null>(null);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [todayPlan, setTodayPlan] = useState<TPlanItem[]>([]);
  const [saved, setSaved] = useState<TWorkout[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Read saved data from localStorage once, right after the page opens.
  // The read is wrapped in setTimeout so setState is not called
  // synchronously inside the effect body.
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const data = JSON.parse(raw);
          setTodayPlan(data.todayPlan ?? []);
          setSaved(data.saved ?? []);
        }
      } catch {
        // broken or missing data: start with empty lists
      }
      setIsLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Write to localStorage whenever the lists change.
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ todayPlan, saved }));
    } catch {
      // storage full or blocked: ignore quietly
    }
  }, [todayPlan, saved, isLoaded]);

  const addToToday = (workout: TWorkout) => {
    if (todayPlan.some((item) => item.workout.id === workout.id)) {
      toast("Already in today's plan");
      return;
    }
    if (todayPlan.length >= MAX_PLAN) {
      toast.error(`Plan is full (max ${MAX_PLAN} lifts)`);
      return;
    }
    setTodayPlan([...todayPlan, { workout, done: false }]);
    toast.success("Added to today's plan");
  };

  const saveForLater = (workout: TWorkout) => {
    if (saved.some((w) => w.id === workout.id)) {
      toast("Already saved");
      return;
    }
    setSaved([...saved, workout]);
    toast.success("Saved for later");
  };

  const removeFromToday = (id: number) => {
    setTodayPlan(todayPlan.filter((item) => item.workout.id !== id));
    toast("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved(saved.filter((w) => w.id !== id));
    toast("Removed from saved");
  };

  const markDone = (id: number) => {
    const updated = todayPlan.map((item) =>
      item.workout.id === id ? { ...item, done: true } : item
    );
    setTodayPlan(updated);
    toast.success("Marked as done");
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        saved,
        isLoaded,
        addToToday,
        saveForLater,
        removeFromToday,
        removeFromSaved,
        markDone,
      }}
    >
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#14171c",
            color: "#ffffff",
            border: "1px solid #262a31",
          },
        }}
      />
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside PlanProvider");
  return ctx;
}