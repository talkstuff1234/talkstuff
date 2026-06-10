"use client";

import assets from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const checkmarks = [
  "Prime locations across major cities",
  "High-impact designs that stand out",
  "Campaign tracking and performance reports",
  "Perfect for awareness and large-scale reach",
];

export default function BillboardSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Image / Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
          >
            <div className="relative h-[360px] overflow-hidden rounded-xl bg-[#151515]">
              <Image src={assets.billboard} alt="billboard" />
            </div>
          </motion.div>

          {/* Right Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary-color)]"
            >
              New & Powerful
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-xl text-4xl font-bold leading-tight md:text-5xl"
            >
              Billboard Advertising That Gets You Noticed
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-sm leading-7 text-gray-400 md:text-base"
            >
              Our outdoor media puts your brand in high-traffic locations where thousands of eyes can meet you. We handle strategy, design, placement,
              and reporting so your campaign gets maximum visibility.
            </motion.p>

            <div className="mt-8 space-y-4">
              {checkmarks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-xs font-bold text-white">
                    ✓
                  </span>

                  <p className="text-sm text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-9 inline-flex rounded-full bg-[var(--primary-color)] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              Request Billboard Advertising →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
