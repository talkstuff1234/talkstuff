"use client";

import assets from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const TEAM = [
  {
    name: "Rachel E. Ogbonna",
    role: "Chief Executive Officer",
    desc: "Visionary leader driving strategic growth and innovation across all business units.",
    image: assets.Rachel,
  },
  {
    name: "Bola Lawal",
    role: "Chief Technology Partnerships Officer",
    desc: "Spearheading technology partnerships and strategic alliances for business expansion.",
    image: assets.Bola,
  },
  {
    name: "Zainab Balogun",
    role: "Chief Accounting Officer",
    desc: "Ensuring financial excellence and strategic financial planning for sustainable growth.",
    image: assets.Zainab,
  },
  {
    name: "Oyewole Olatokun",
    role: "Project Manager",
    desc: "Orchestrating seamless project delivery and client satisfaction across all initiatives.",
    image: assets.Oyewole,
  },
  {
    name: "Emmanuel Olaosebikan",
    role: "Digital Technology Manager",
    desc: "Leading digital transformation and technology implementation strategies.",
    image: assets.Olaosebikan,
  },
  {
    name: "Emmanuel Oladimeji",
    role: "Visual Communication Manager",
    desc: "Crafting compelling visual narratives and brand communication strategies.",
    image: assets.Oladimeji,
  },
  {
    name: "Godwin Oifoh",
    role: "Social Media Manager",
    desc: "Building engaging digital communities and social media presence for brands.",
    image: assets.Godwin,
  },
  {
    name: "Igwebuike Nwobodo",
    role: "Technical Support Engineer",
    desc: "Providing technical excellence and support for all technology solutions.",
    image: assets.Nwobodo,
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="relative overflow-hidden py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-3 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-5"
          >
            <span className="w-10 h-[2px] bg-orange-500" />
            Meet The Team
            <span className="w-10 h-[2px] bg-orange-500" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black leading-tight text-zinc-900 dark:text-white mb-5"
          >
            The People Behind the <span className="text-orange-500">Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed"
          >
            A passionate team of strategists, creatives, and growth experts dedicated to helping brands become more visible and memorable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.06,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[1.75rem] border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-6 py-9 text-center shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-[1.75rem] border border-transparent group-hover:border-orange-500/30 transition-colors duration-300" />

              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h4 className="relative text-zinc-900 dark:text-white font-black text-xl leading-tight">{member.name}</h4>

              <p className="relative text-orange-500 font-bold text-sm md:text-base mt-4 leading-snug">{member.role}</p>

              <p className="relative text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed mt-5">{member.desc}</p>

              <div className="relative mx-auto mt-6 h-1 w-10 rounded-full bg-orange-500 group-hover:w-20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
