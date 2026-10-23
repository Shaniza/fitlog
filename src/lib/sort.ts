import { TWorkout } from "@/types";

export type TSortKey = "duration" | "calories" | "rating";

export const sortOptions: { value: TSortKey; label: string }[] = [
  { value: "duration", label: "Duration" },
  { value: "calories", label: "Calories" },
  { value: "rating", label: "Rating" },
];

export function compareWorkouts(a: TWorkout, b: TWorkout, key: TSortKey) {
  if (key === "duration") return a.duration - b.duration;
  if (key === "calories") return b.caloriesBurned - a.caloriesBurned;
  return b.rating - a.rating;
}