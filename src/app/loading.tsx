export default function Loading() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      {/* উপরে spinner আর লেখা */}
      <div className="flex flex-col items-center justify-center gap-3 py-10">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-accent" />
        <p className="text-sm text-muted">Loading workouts…</p>
      </div>

      {/* নিচে ১২টা skeleton card (ঝিলিমিলি) */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
          >
            <div className="h-40 w-full bg-white/10" />
            <div className="space-y-3 p-4">
              <div className="flex gap-2">
                <div className="h-4 w-14 rounded-full bg-white/10" />
                <div className="h-4 w-14 rounded-full bg-white/10" />
              </div>
              <div className="h-5 w-3/4 rounded bg-white/10" />
              <div className="h-3 w-1/2 rounded bg-white/10" />
              <div className="h-3 w-2/3 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}