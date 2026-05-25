"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── ABOUT PILLARS — edit labels/descriptions here ──
const PILLARS = [
  { icon: "✦", title: "Strategy", desc: "Data-driven plans" },
  { icon: "✦", title: "Creativity", desc: "Ideas that connect" },
  { icon: "✦", title: "Execution", desc: "Flawless delivery" },
  { icon: "✦", title: "Results", desc: "Growth that lasts" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            About TalkStuff
          </motion.span>

          {/* ── ABOUT HEADLINE — edit here ── */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black leading-tight text-zinc-900 dark:text-white mb-6"
          >
            Your Digital Growth &{" "}
            <span className="text-orange-500">Advertising</span> Partner
          </motion.h2>

          {/* ── ABOUT DESCRIPTION — edit here ── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-10"
          >
            TalkStuff Digital Services is a full-service digital agency helping businesses
            grow their brand, reach the right audience, and drive measurable results
            through smart strategy, creative content, and powerful advertising.
          </motion.p>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="border border-zinc-200 dark:border-white/10 rounded-2xl p-5
                           hover:border-orange-400 dark:hover:border-orange-500 transition-colors group"
              >
                <div className="text-orange-500 text-xl mb-2">{p.icon}</div>
                <div className="font-black text-zinc-900 dark:text-white">{p.title}</div>
                <div className="text-zinc-400 text-sm mt-0.5">{p.desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65 }}
            href="#contact"
            className="inline-flex items-center gap-2 text-zinc-900 dark:text-white font-bold
                       border-b-2 border-orange-500 pb-0.5 hover:text-orange-500 transition-colors"
          >
            Learn More About Us →
          </motion.a>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* ── ABOUT IMAGE — replace with your image ── */}
          <div className="rounded-3xl overflow-hidden bg-zinc-900 h-80 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-zinc-900" />
            {/* Placeholder — replace with: <img src="/images/office-collab.png" className="w-full h-full object-cover" alt="Team at work" /> */}
            <div className="relative z-10 text-center">
              <div className="text-6xl mb-3">🏢</div>
              <p className="text-white/60 text-sm">Add office-collab.png here</p>
            </div>
          </div>

          {/* Building ad overlay card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-4 bg-orange-500 text-white p-6 rounded-2xl shadow-2xl shadow-orange-500/30 max-w-[200px]"
          >
            <p className="font-black text-lg leading-tight">
              YOUR BRAND<br />EVERYWHERE<br />
              <span className="text-black">IT MATTERS.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
