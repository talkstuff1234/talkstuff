"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/content";
import { getLenis } from "@/lib/smooth";
import NormalLogo from "./logo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hide, setHide] = useState(false);
  const openRef = useRef(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 20);
      if (!openRef.current) setHide(y > last && y > 300);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (next: boolean) => {
    openRef.current = next;
    setOpen(next);
    setHide(false);
    const lenis = getLenis();
    if (lenis) next ? lenis.stop() : lenis.start();
    else document.body.style.overflow = next ? "hidden" : "";
  };

  useEffect(() => {
    if (openRef.current) toggle(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && toggle(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`hdr${solid ? " solid" : ""}${hide ? " hide" : ""}`}>
      <div className="wrap">
        <Link className="logo flex" href="/" aria-label="TalkStuff home">
          <NormalLogo />
          TalkStuff<sup>&reg;</sup>
        </Link>
        <nav className={`nav${open ? " open" : ""}`} id="nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname === n.href ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link className="btn k sm" href="/contact">
          Start a project <i>&rarr;</i>
        </Link>
        <button className="burger" aria-label="Menu" aria-expanded={open} aria-controls="nav" onClick={() => toggle(!open)}>
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}
