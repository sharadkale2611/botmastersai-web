"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", hash: "#home" },
  { label: "Technologies", hash: "#technologies" },
  { label: "About", hash: "#about" },
  { label: "Services", hash: "#services" },
  { label: "Internships", hash: "#internships" },
  { label: "AI Solutions", hash: "#ai-solutions" },
  { label: "Projects", hash: "#projects" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Home page?
  const isHomePage = pathname === "/";

  /*
    Any page except "/" will initially have dark navbar.

    Examples:
      /apply
      /privacy-policy
      /terms
      /services/web-development

    If you want some pages to behave like home page, modify this:

    const darkNavbarPages = ["/apply", "/privacy-policy"];
    const navbarDark = darkNavbarPages.includes(pathname) && !scrolled;

  */
  const navbarDark = !isHomePage && !scrolled;

  return (
    <header
      className={`
        w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "fixed inset-x-0 top-0 bg-blue-50/80 backdrop-blur-xl shadow-lg shadow-[#0B3D91]/10"
            : navbarDark
            ? "absolute inset-x-0 top-0 bg-transparent"
            : "absolute inset-x-0 top-0 bg-transparent"
        }
      `}
    >
      <nav
        aria-label="Main navigation"
        className={`
          mx-auto flex max-w-7xl items-center justify-between
          px-4 sm:px-5 lg:px-6 xl:px-8
          transition-all duration-300
          ${scrolled ? "py-2" : "py-3.5"}
        `}
      >
        {/* Logo */}
        <Link
          href="/#home"
          className="group flex shrink-0 items-center"
          onClick={() => setIsOpen(false)}
        >
<Image
  src={navbarDark ? "/logo_horizontal_dark.png" : "/logo_horizontal.png"}
  alt="BotMasters AI"
  width={350}
  height={100}
  priority
  className={`
    h-auto transition-all duration-300
    ${
      scrolled
        ? "w-[120px] md:w-[150px] xl:w-[180px]"
        : "w-[180px] md:w-[240px] xl:w-[320px]"
    }
    group-hover:scale-[1.02]
  `}
/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-0.5">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={pathname === "/" ? item.hash : `/${item.hash}`}
              className={`
                rounded-full px-3 py-2 text-sm font-medium
                transition duration-200
                hover:-translate-y-0.5
                ${
                  navbarDark
                    ? "text-white hover:bg-white/10"
                    : "text-slate-600 hover:bg-[#0B3D91]/5 hover:text-[#0B3D91]"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Apply Button */}
        <Link
          href="/apply"
          className={`
            hidden xl:inline-flex
            rounded-full bg-[#D4AF37]
            text-sm font-bold text-[#092E6E]
            shadow-lg shadow-[#D4AF37]/20
            transition-all duration-300
            hover:-translate-y-0.5 hover:bg-[#E2C15B]
            ${scrolled ? "px-4 py-2" : "px-5 py-2.5"}
          `}
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`
            grid size-11 place-items-center rounded-xl border transition xl:hidden
            ${
              navbarDark
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-[#0B3D91]/15 text-[#0B3D91] hover:bg-[#0B3D91]/5"
            }
          `}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`
          overflow-hidden border-t border-[#0B3D91]/10 bg-white
          transition-[max-height,opacity] duration-300 xl:hidden
          ${isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={pathname === "/" ? item.hash : `/${item.hash}`}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#0B3D91]/5 hover:text-[#0B3D91]"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/apply"
            className="mt-3 rounded-xl bg-[#D4AF37] px-4 py-3 text-center text-sm font-bold text-[#092E6E]"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}