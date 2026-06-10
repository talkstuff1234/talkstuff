"use client";

import assets from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  type: "page" | "section";
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/", type: "page" },
  { label: "About Us", href: "#about", type: "section" },
  { label: "Our Services", href: "#services", type: "section" },
  { label: "Clients", href: "#clients", type: "section" },
  { label: "Contact Us", href: "#contact", type: "section" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionLinks = navLinks.filter((link) => link.type === "section");

    const sections = sectionLinks.map((link) => document.querySelector(link.href)).filter((section): section is Element => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: "-120px 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  const isActive = (link: NavLink) => {
    if (link.type === "page") {
      return pathname === link.href;
    }

    return pathname === "/" && activeSection === link.href;
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          <Image src={assets.logo} width={30} height={30} alt="Talkstuff logo" />
          Talkstuff
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive(link) ? "text-[var(--primary-color)]" : "text-gray-400 hover:text-[var(--primary-color)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full bg-[var(--primary-color)] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:opacity-80 md:inline-flex"
        >
          Book A Free Call
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "top-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                mobileOpen ? "top-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-white/10 bg-black/80 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-[500px] border-t opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive(link) ? "bg-[var(--primary-color)] text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={closeMobileMenu}
            className="mt-3 rounded-full bg-[var(--primary-color)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-80"
          >
            Book A Free Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
