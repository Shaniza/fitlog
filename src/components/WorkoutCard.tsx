import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { TWorkout } from "@/types";

export default function WorkoutCard({ workout }: { workout: TWorkout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition hover:border-accent"
    >
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-2 p-4">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-display text-lg font-bold uppercase leading-tight">
          {workout.name}
        </h3>

        <p className="text-sm text-muted">{workout.equipment}</p>

        <div className="flex items-center gap-4 pt-1 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} /> {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}