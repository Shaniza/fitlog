import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  
  const planCount = 0;
  const savedCount = 0;

  return (
    <header className="border-b border-border bg-surface">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FitLog logo" width={28} height={28} />
          <span className="font-display text-lg font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

        <NavLinks />

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-black"
          >
            Plan <span>{planCount}</span>
          </Link>
          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-full border border-accent px-3 py-1 text-xs font-bold text-accent"
          >
            Saved <span>{savedCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}