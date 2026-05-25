"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── PROCESS STEPS — edit/add steps here ──
const STEPS = [
  { num: 1, title: "Discover", desc: "We learn your goals." },
  { num: 2, title: "Strategize", desc: "We build the plan." },
  { num: 3, title: "Create", desc: "We develop assets." },
  { num: 4, title: "Launch", desc: "We go live." },
  { num: 5, title: "Optimize", desc: "We scale growth." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mt-3"
          >
            Building Tomorrow&apos;s Solutions Today
          </motion.h2>
        </div>

        {/* Steps row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-zinc-200 dark:bg-white/10" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="text-center relative"
            >
              {/* Step circle */}
              <motion.div
                whileHover={{ scale: 1.15, backgroundColor: "#ff5b12" }}
                className="w-16 h-16 rounded-full bg-zinc-900 dark:bg-zinc-800
                           border-2 border-orange-500 flex items-center justify-center
                           text-white font-black text-xl mx-auto mb-4 relative z-10
                           transition-colors duration-300"
              >
                {step.num}
              </motion.div>
              <h3 className="text-zinc-900 dark:text-white font-black text-base mb-1">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
