import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DetailActions from "@/components/DetailActions";
import { getAllWorkouts, getWorkoutById } from "@/lib/api";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  const workouts = await getAllWorkouts();
  return workouts.map((w) => ({ id: String(w.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) return { title: "Workout not found | FitLog" };

  return {
    title: `${workout.name} | FitLog`,
    description: workout.description,
  };
}

export default async function WorkoutDetails({ params }: Props) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) notFound();

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-5">
        <h1 className="font-display text-3xl font-bold uppercase sm:text-4xl">
          {workout.name}
        </h1>

        <p className="text-sm text-muted">{workout.description}</p>

        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <dl className="divide-y divide-border rounded-xl border border-border bg-surface">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center justify-between px-4 py-3 text-sm"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                {spec.label}
              </dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div>
          <h2 className="mb-3 text-sm font-bold uppercase">Instructions</h2>
          <ol className="space-y-2 text-sm text-muted">
            {workout.instructions.map((step, index) => (
              <li key={index} className="flex gap-2">
                <span>{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <DetailActions workout={workout} />
      </div>
    </section>
  );
}