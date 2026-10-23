"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const isWorkout = pathname === "/" || pathname.startsWith("/workouts");
  const isPlan = pathname === "/my-plan";

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/"
        className={`rounded-full px-4 py-1.5 text-sm ${
          isWorkout
            ? "bg-accent/20 font-semibold text-accent"
            : "text-muted hover:text-white"
        }`}
      >
        Workouts
      </Link>
      <Link
        href="/my-plan"
        className={`rounded-full px-4 py-1.5 text-sm ${
          isPlan
            ? "bg-accent/20 font-semibold text-accent"
            : "text-muted hover:text-white"
        }`}
      >
        My Plan
      </Link>
    </div>
  );
}