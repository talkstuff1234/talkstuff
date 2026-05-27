"use client";

import assets from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const CLIENTS = [
  {
    name: "Marble & Grove Food Nig Ltd",
    logo: assets.marble,
  },
  {
    name: "Transcorp Hilton",
    logo: assets.transcorp,
  },
  {
    name: "NIRSAL Microfinance Bank",
    logo: assets.nirsal,
  },
  {
    name: "Wells Carlton Hotels & Apartments",
    logo: assets.wells,
  },
  {
    name: "Green Economic Zone (GEZ)",
    logo: assets.gez,
  },
  {
    name: "SUMOGO Nig Ltd",
    logo: assets.sumo,
  },
  {
    name: "Federal Inland Revenue",
    logo: assets.firs,
  },
  {
    name: "K K Kingdom Nig Limited",
    logo: assets.kk,
  },
  {
    name: "JunkTion Limited",
    logo: assets.junkTion,
  },
  {
    name: "Maifaku Nig Ltd",
    logo: assets.maiAfaku,
  },
  {
    name: "Borealis",
    logo: assets.borealis,
  },
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="clients" ref={ref} className="relative overflow-hidden py-24 bg-white dark:bg-zinc-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-3 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-5"
          >
            <span className="w-10 h-[2px] bg-orange-500" />
            Our Clients
            <span className="w-10 h-[2px] bg-orange-500" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black leading-tight text-zinc-900 dark:text-white mb-5"
          >
            Trusted by <span className="text-orange-500">Leading Brands</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed"
          >
            We’re proud to partner with respected businesses, institutions, hotels, and innovative brands across Nigeria.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.25 + i * 0.06,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[230px] rounded-[1.75rem] border border-zinc-200 dark:border-white/10 bg-transparent p-3 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-shadow duration-500"
            >
              <div className="absolute inset-0 rounded-[1.75rem] border border-transparent group-hover:border-orange-500/30 transition-colors duration-300" />

              <motion.div
                animate={inView ? { y: [0, -5, 0] } : {}}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.18,
                  ease: "easeInOut",
                }}
                className="relative w-full h-36 flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="w-[85%] h-[85%] object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <div className="relative px-2 pb-4 text-center">
                <h3 className="text-zinc-900 dark:text-white text-base md:text-lg font-bold leading-snug">{client.name}</h3>

                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-orange-500 group-hover:w-20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
