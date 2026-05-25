"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── SERVICES LIST — add/edit/remove services here ──
const SERVICES = [
  {
    icon: "🚀",
    title: "Digital Marketing",
    desc: "Full-funnel strategies that drive traffic and conversions.",
  },
  {
    icon: "💬",
    title: "Social Media Marketing",
    desc: "Engage, grow, and build loyal communities.",
  },
  {
    icon: "▶",
    title: "Content Creation",
    desc: "Strong visuals and videos that tell your story.",
  },
  {
    icon: "◎",
    title: "Paid Media",
    desc: "High-impact ads that deliver maximum ROAS.",
  },
  {
    icon: "▣",
    title: "Billboard Advertising",
    desc: "High-visibility outdoor ads that put your brand on everybody's radar.",
  },
  {
    icon: "★",
    title: "Creative Campaigns",
    desc: "Big ideas. Bold execution. Real impact.",
  },
  {
    icon: "↗",
    title: "Analytics & Reporting",
    desc: "Track performance and optimize for growth.",
  },
  {
    icon: "▤",
    title: "Web & Design",
    desc: "Beautiful, fast and conversion-focused websites.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-zinc-950 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-5xl font-black mt-3 mb-4"
          >
            End-to-End Solutions for Modern Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-400"
          >
            From strategy to execution, we deliver services that build visibility,
            engage audiences, and drive real business growth.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -6, borderColor: "rgba(249,115,22,0.6)" }}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-6 cursor-default
                         hover:bg-zinc-800 transition-colors group"
            >
              <div className="text-3xl mb-4">{svc.icon}</div>
              <h3 className="text-white font-black text-base mb-2">{svc.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          {/* ── CTA — update href ── */}
          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            View All Services →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
