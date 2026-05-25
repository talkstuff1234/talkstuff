"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── STATS — edit values and labels here ──
const STATS = [
  { value: "+250%", label: "Average Increase in ROI" },
  { value: "37M+", label: "People Reached" },
  { value: "10M+", label: "Engagements Generated" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" ref={ref} className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-12"
        >
          Proven results that drive business growth
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-zinc-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
