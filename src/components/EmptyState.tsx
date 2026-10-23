import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-4 py-16 text-center">
      <h2 className="font-display text-xl font-bold uppercase">
        Nothing here yet
      </h2>
      <p className="max-w-sm text-sm text-muted">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-accent px-5 py-2 text-xs font-bold text-black hover:opacity-90"
      >
        Go to workouts
      </Link>
    </div>
  );
}