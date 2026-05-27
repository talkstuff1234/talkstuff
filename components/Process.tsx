"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Palette, Rocket, TrendingUp } from "lucide-react";

const STEPS = [
  {
    num: 1,
    title: "Discover",
    desc: "We understand your business goals, audience, market position, and opportunities before making strategic decisions.",
    icon: Search,
  },
  {
    num: 2,
    title: "Strategize",
    desc: "We create a clear roadmap, campaign structure, and messaging system aligned with your objectives.",
    icon: Map,
  },
  {
    num: 3,
    title: "Create",
    desc: "We design compelling visuals, campaigns, brand assets, and digital experiences built for impact.",
    icon: Palette,
  },
  {
    num: 4,
    title: "Launch",
    desc: "Your campaigns go live across the right platforms with smooth, coordinated execution and delivery.",
    icon: Rocket,
  },
  {
    num: 5,
    title: "Optimize",
    desc: "We monitor performance, refine weak points, and scale what drives measurable business growth.",
    icon: TrendingUp,
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="relative overflow-hidden py-24 bg-white dark:bg-zinc-950">
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-3 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-5"
          >
            <span className="w-10 h-[2px] bg-orange-500" />
            Our Process
            <span className="w-10 h-[2px] bg-orange-500" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black leading-tight text-zinc-900 dark:text-white mb-5"
          >
            Building Tomorrow&apos;s <span className="text-orange-500">Solutions Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed"
          >
            A streamlined process designed to move your business from concept to measurable growth.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {STEPS.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.2 + i * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 min-h-[420px] shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
              >
                {/* glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl group-hover:bg-orange-500/20 transition-all duration-500" />

                {/* top visual */}
                <div className="relative h-[220px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent">
                  <motion.div
                    animate={inView ? { y: [0, -10, 0] } : {}}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <div className="w-36 h-36 rounded-[2.5rem] bg-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/30 group-hover:scale-105 transition-transform duration-500">
                      <Icon className="w-16 h-16 text-white" strokeWidth={2} />
                    </div>

                    {/* step number */}
                    <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-black text-base shadow-xl">
                      {String(step.num).padStart(2, "0")}
                    </div>
                  </motion.div>
                </div>

                {/* content */}
                <div className="relative px-8 pb-8">
                  <h3 className="text-3xl font-black text-zinc-900 dark:text-white mb-5">{step.title}</h3>

                  <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">{step.desc}</p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-1 w-12 rounded-full bg-orange-500 group-hover:w-24 transition-all duration-300" />

                    <span className="text-orange-500 font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Step {step.num}
                    </span>
                  </div>
                </div>

                {/* hover border */}
                <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-orange-500/20 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
