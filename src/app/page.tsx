import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import { getAllWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getAllWorkouts();

  return (
    <>
      <Hero />

      <section id="library" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-3xl font-bold uppercase">
          The Library
        </h2>
        <p className="mb-6 text-muted">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </section>
    </>
  );
}