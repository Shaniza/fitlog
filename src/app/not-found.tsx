import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <p className="font-display text-8xl font-bold text-accent sm:text-9xl">
        404
      </p>
      <h1 className="font-display text-2xl font-bold uppercase sm:text-3xl">
        Page not found
      </h1>
      <p className="max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-black hover:opacity-90"
      >
        Back to workouts
      </Link>
    </section>
  );
}