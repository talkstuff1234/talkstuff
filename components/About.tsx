"use client";

import assets from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { TrendingUp, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const PILLARS = [
  {
    title: "Strategy",
    desc: "We plan campaigns with clear goals, audience insight, and measurable direction.",
    icon: TrendingUp,
    accent: "from-orange-500 to-orange-600",
  },
  {
    title: "Creativity",
    desc: "We create visuals, stories, and ideas that make people stop, feel, and remember.",
    icon: Lightbulb,
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Execution",
    desc: "We turn ideas into polished digital campaigns, outdoor ads, and brand experiences.",
    icon: Rocket,
    accent: "from-orange-600 to-red-500",
  },
  {
    title: "Results",
    desc: "We focus on visibility, engagement, leads, and long-term business growth.",
    icon: BarChart3,
    accent: "from-orange-500 to-yellow-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-24 bg-white dark:bg-zinc-950">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-zinc-900/5 dark:bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-5"
          >
            <span className="w-10 h-[2px] bg-orange-500" />
            About TalkStuff
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-zinc-900 dark:text-white mb-6"
          >
            Your Digital Growth & <span className="text-orange-500">Advertising</span> Partner
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl"
          >
            TalkStuff Digital Services is a full-service digital agency helping businesses grow their brand, reach the right audience, and drive
            measurable results through smart strategy, creative content, and powerful advertising.
          </motion.p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;

              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-6 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500"
                >
                  {/* subtle background glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-lg mb-5`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.3} />
                  </div>

                  <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2">{p.title}</h3>

                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{p.desc}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="h-1 w-10 rounded-full bg-orange-500 group-hover:w-20 transition-all duration-300" />

                    <span className="text-orange-500 text-sm font-bold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      Learn More →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65 }}
            href="#contact"
            className="inline-flex items-center gap-3 text-zinc-900 dark:text-white font-bold hover:text-orange-500 transition-colors"
          >
            <span className="border-b-2 border-orange-500 pb-1">Learn More About Us</span>→
          </motion.a>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden bg-zinc-900 h-[500px] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-black/70 z-10" />

            <Image src={assets.officeCollab} className="w-full h-full object-cover" alt="Team at work" />

            {/* floating stat card */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl rounded-3xl px-6 py-5 shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">We Build</p>
              <p className="text-zinc-900 dark:text-white font-black text-2xl">Brands That Move</p>
            </div>
          </div>

          {/* floating CTA card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-8 -right-4 bg-orange-500 text-white p-7 rounded-3xl shadow-2xl shadow-orange-500/30 max-w-[240px]"
          >
            <p className="font-black text-xl leading-tight">
              YOUR BRAND
              <br />
              EVERYWHERE
              <br />
              <span className="text-black">IT MATTERS.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
