"use client";

import assets from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Marble & Grove Food Nig Ltd", logo: assets.marble },
  { name: "Transcorp Hilton", logo: assets.transcorp },
  { name: "NIRSAL Microfinance Bank", logo: assets.nirsal },
  { name: "Wells Carlton Hotels & Apartments", logo: assets.wells },
  { name: "Green Economic Zone (GEZ)", logo: assets.gez },
  { name: "SUMOGO Nig Ltd", logo: assets.sumo },
  { name: "Federal Inland Revenue", logo: assets.firs },
  { name: "K K Kingdom Nig Limited", logo: assets.kk },
  { name: "JunkTion Limited", logo: assets.junkTion },
  { name: "Maifaku Nig Ltd", logo: assets.maiAfaku },
  { name: "Borealis", logo: assets.borealis },
];

export default function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden px-6 py-24 text-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary-color)]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary-color)]"
          >
            Our Clients
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-4xl font-bold leading-tight md:text-5xl"
          >
            Trusted by Leading Brands
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base"
          >
            We’re proud to partner with respected businesses, institutions, hotels, and innovative brands across Nigeria.
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--primary-color),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-20" />

              <div className="relative flex h-32 items-center justify-center rounded-xl bg-white/90 p-5">
                <Image src={client.logo} alt={client.name} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
              </div>

              <div className="relative mt-6 text-center">
                <h3 className="text-base font-bold leading-snug text-white">{client.name}</h3>

                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-[var(--primary-color)] transition-all duration-300 group-hover:w-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
