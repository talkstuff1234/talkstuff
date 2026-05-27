"use client";

import assets from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// ── BILLBOARD FEATURES — edit checkmarks here ──
const CHECKS = [
  "Prime locations across major cities",
  "High-impact designs that stand out",
  "Campaign tracking and performance reports",
  "Perfect for awareness and large-scale reach",
];

export default function Billboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-black dark:bg-black relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)",
      }}
    >
      {/* Decorative glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Billboard mock visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden h-72 lg:h-96"
        >
          <Image src={assets.billboardPortrait} alt="billboard portrait" className="w-full h-full object-cover object-[center_20%]" />

          {/* Overlay text */}
          <div className="absolute inset-0 billboard-overlay flex items-end p-8">
            <div>
              <p className="text-white font-black text-2xl leading-tight">
                BILLBOARD
                <br />
                ADVERTISING
              </p>
              <p className="text-orange-300 text-sm font-semibold mt-1">Be Seen. Be Remembered.</p>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            New & Powerful
          </motion.span>

          {/* ── SECTION HEADLINE — edit here ── */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-5xl font-black leading-tight mb-5"
          >
            Billboard Advertising That Gets You Noticed
          </motion.h2>

          {/* ── SECTION DESCRIPTION — edit here ── */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/60 leading-relaxed mb-7"
          >
            Our outdoor media puts your brand in high-traffic locations where thousands of eyes can meet you. We handle strategy, design, placement
            and reporting.
          </motion.p>

          {/* Checklist */}
          <div className="space-y-3 mb-10">
            {CHECKS.map((check, i) => (
              <motion.div
                key={check}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="flex items-center gap-3 text-white/80"
              >
                <span className="text-orange-500 font-black text-lg">✓</span>
                <span>{check}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65 }}
            href="#contact"
            className="inline-block border-2 border-white hover:bg-white hover:text-black
                       text-white font-bold px-7 py-3.5 rounded-full transition-all"
          >
            Request Billboard Advertising →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
