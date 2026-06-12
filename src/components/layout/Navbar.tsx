"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Internships", "#internships"],
  ["AI Solutions", "#ai-solutions"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0B3D91]/10 bg-white/90 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="#home" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image src="/logo.png" alt="BotMasters AI" width={220} height={80} priority className="h-10 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map(([label, href]) => (
            <Link key={label} href={href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-[#0B3D91]/5 hover:text-[#0B3D91]">
              {label}
            </Link>
          ))}
        </div>

        <Link href="#apply" className="hidden rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-bold text-[#092E6E] shadow-lg shadow-[#D4AF37]/20 transition hover:-translate-y-0.5 hover:bg-[#E2C15B] lg:inline-flex">
          Apply Now
        </Link>

        <button type="button" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} className="grid size-11 place-items-center rounded-xl border border-[#0B3D91]/15 text-[#0B3D91] transition hover:bg-[#0B3D91]/5 lg:hidden" onClick={() => setIsOpen((current) => !current)}>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div id="mobile-menu" className={`overflow-hidden border-t border-[#0B3D91]/10 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
          {navigation.map(([label, href]) => (
            <Link key={label} href={href} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#0B3D91]/5 hover:text-[#0B3D91]" onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="#apply" className="mt-3 rounded-xl bg-[#D4AF37] px-4 py-3 text-center text-sm font-bold text-[#092E6E]" onClick={() => setIsOpen(false)}>
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
