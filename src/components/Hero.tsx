import Image from "next/image";
import { ArrowDown } from "lucide-react";


export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8">
      <div className="grid items-center gap-8 rounded-2xl border border-border bg-surface p-6 md:grid-cols-2 md:p-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-widest text-accent">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>

          <p className="max-w-md text-muted">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-black hover:opacity-90"
          >
            BROWSE WORKOUTS
            <ArrowDown size={16} />
          </a>
        </div>

        <Image
             src="/banner.png"
             alt="Athlete training in the gym"
             width={600}
             height={600}
             priority
             className="mx-auto h-auto w-full max-w-sm md:max-w-md"
/>
      </div>
    </section>
  );
}