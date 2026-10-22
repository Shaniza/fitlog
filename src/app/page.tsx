import Hero from "@/components/Hero";
import { getAllWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getAllWorkouts();

  return (
    <>
      <Hero />

      <section id="library" className="mx-auto min-h-[70vh] max-w-6xl px-4 py-12">
        <h2 className="font-display text-3xl font-bold uppercase">
          The Library
        </h2>
        <p className="text-muted">
          Twelve lifts covering every major muscle group.
        </p>
        <p className="mt-4">{workouts.length} workouts loaded</p>
      </section>
    </>
  );
}