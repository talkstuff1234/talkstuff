"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

// ── NAV LINKS — add/remove items here ──
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-black/80 dark:bg-black/80 backdrop-blur-lg border-b border-white/10 py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* ── LOGO — edit brand name here ── */}
          <a href="#" className="flex items-center gap-1 group">
            <span className="text-white font-black text-2xl tracking-tight">
              Talk<span className="text-orange-500">Stuff</span>
            </span>
            <span className="text-white/40 text-[9px] font-bold tracking-widest ml-1 hidden sm:block">
              DIGITAL SERVICES
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-white/75 hover:text-white text-sm font-medium transition-colors relative group"
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            {/* ── CTA BUTTON — update href/label ── */}
            <motion.a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Strategy Call →
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="text-white text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-5 lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-white/80 hover:text-orange-400 text-lg font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              className="bg-orange-500 text-white text-center font-bold py-3 rounded-full mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Book a Strategy Call →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
