import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import { TWorkout } from "@/types";

type Props = {
  workout: TWorkout;
  done?: boolean;
  onDone?: () => void;
  onRemove: () => void;
};

export default function PlanRow({ workout, done = false, onDone, onRemove }: Props) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-border bg-surface p-3 sm:flex-row sm:items-center ${
        done ? "opacity-60" : ""
      }`}
    >
      <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3
          className={`font-display text-base font-bold uppercase ${
            done ? "line-through" : ""
          }`}
        >
          {workout.name}
        </h3>
        <p className="text-xs font-semibold text-muted">{workout.equipment}</p>
        <div className="mt-1 flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Clock size={13} className="text-accent" /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={13} className="text-accent" /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={13} className="text-accent" /> {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-border px-4 py-1.5 text-xs hover:border-accent"
        >
          View Details
        </Link>

        {onDone &&
          (done ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent px-4 py-1.5 text-xs font-bold text-accent">
              <Check size={14} /> Done
            </span>
          ) : (
            <button
              type="button"
              onClick={onDone}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-black hover:opacity-90"
            >
              <Check size={14} /> Mark as Done
            </button>
          ))}

        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${workout.name}`}
          className="p-1 text-muted hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}