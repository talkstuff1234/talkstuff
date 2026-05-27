"use client";

import assets from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

// ── HERO METRICS — edit numbers/labels here ──
const METRICS = [
  { value: "50+", label: "Brands Served" },
  { value: "100+", label: "Campaigns Delivered" },
  { value: "5+", label: "Years of Impact" },
  { value: "24/7", label: "Support & Care" },
];

// ── TRUSTED BRANDS — add/remove logos here ──
const BRANDS = ["SAMSUNG", "airtel", "paga", "UBA", "Uber", "DStv", "FirstBank"];

// Animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black dark:bg-black light:bg-[#0a0a0a] overflow-hidden flex flex-col">
      {/* Background grid lines — decorative */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange glow blobs — tweak position/size as needed */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-32 left-10 w-72 h-72 bg-orange-600/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — hero copy */}
          <div>
            <motion.span {...fadeUp(0.1)} className="inline-block text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Digital Growth & Outdoor Advertising Partner
            </motion.span>

            {/* ── MAIN HEADLINE — edit here ── */}
            <motion.h1 {...fadeUp(0.2)} className="text-white text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              We Build
              <br />
              Brands. We{" "}
              <span className="text-orange-500">
                Drive
                <br />
                Growth.
              </span>
            </motion.h1>

            {/* ── SUBTITLE — edit here ── */}
            <motion.p {...fadeUp(0.3)} className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              Digital marketing that performs. Billboard advertising that gets you seen. Results that speak for themselves.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex gap-4 flex-wrap mb-12">
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full transition-colors">
                Book a Strategy Call →
              </a>
              <a
                href="#services"
                className="border border-white/30 hover:border-orange-400 text-white/80 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                ◎ Explore Our Services
              </a>
            </motion.div>

            {/* Metrics row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-4 gap-4 border-t border-white/10 pt-8"
            >
              {METRICS.map((m) => (
                <div key={m.label}>
                  <div className="text-white font-black text-2xl">{m.value}</div>
                  <div className="text-white/40 text-xs mt-1">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — visual cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block h-[500px]"
          >
            {/* ── HERO IMAGE — replace src with your image path ── */}
            <Image src={assets.hero} className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[460px] object-contain z-10" alt="Strategist" />

            {/* Mini billboard card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-56 bg-black border border-orange-500/50 p-5 rounded-2xl z-20"
            >
              <p className="text-white font-black text-lg leading-tight">
                BIG IDEAS.
                <br />
                BIGGER REACH.
                <br />
                <span className="text-orange-500">REAL RESULTS.</span>
              </p>
            </motion.div>

            {/* Dashboard card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 w-64 bg-zinc-900 border border-white/10 p-5 rounded-2xl z-20"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/80 text-sm font-bold">Campaign Growth</span>
                <span className="text-orange-400 font-black text-sm">+28%</span>
              </div>
              {/* SVG sparkline chart */}
              <svg viewBox="0 0 100 40" className="w-full h-12">
                <polyline
                  points="2,35 16,30 28,33 41,20 54,16 69,8 82,12 98,2"
                  fill="none"
                  stroke="#ff5b12"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* Phone / social card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-8 right-8 w-36 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden z-20"
            >
              {/* ── Replace with actual social preview image if available ── */}
              <div className="h-24 bg-gradient-to-br from-orange-500/30 to-zinc-800 flex items-center justify-center text-3xl">📱</div>
              <div className="p-3 space-y-2">
                <div className="h-2 bg-white/20 rounded-full w-full" />
                <div className="h-2 bg-white/10 rounded-full w-3/5" />
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-orange-500/20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-orange-500/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* ── BRAND STRIP — edit BRANDS array above ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur py-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/30 text-xs font-bold tracking-widest uppercase mb-5">
            Trusted by ambitious brands across Africa and beyond
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {BRANDS.map((brand) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ opacity: 1, color: "#ff5b12" }}
                className="text-white/25 font-black text-sm tracking-widest hover:text-orange-400 transition-colors cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
