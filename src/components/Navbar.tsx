import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import PlanBadges from "./PlanBadges";

export default function Navbar() {
  
 

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
        <PlanBadges />

        
      </nav>
    </header>
  );
}