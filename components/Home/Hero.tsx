"use client";

import assets from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const metrics = [
  { value: "50+", label: "Brands Served" },
  { value: "100+", label: "Campaigns Delivered" },
  { value: "5+", label: "Years of Impact" },
  { value: "24/7", label: "Support & Care" },
];

const brands = ["SAMSUNG", "airtel", "paga", "UBA", "Uber", "DStv", "FirstBank"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-20 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary-color)]"
        >
          Digital Growth & Outdoor Advertising Partner
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl"
        >
          We Build Brands. <br />
          We Drive Growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-400 md:text-base"
        >
          Digital marketing that performs. Billboard advertising that gets you seen. Results that speak for themselves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            href="#contact"
            className="rounded-full bg-[var(--primary-color)] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-80"
          >
            Book a Strategy Call →
          </Link>

          <Link href="#services" className="text-sm font-semibold text-[var(--primary-color)] transition hover:opacity-80">
            Explore Our Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl"
        >
          <Image src={assets.hero} alt="TalkStuff digital advertising" width={1200} height={700} className="h-[420px] w-full object-cover" priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 border-y border-white/10 py-8 md:grid-cols-4"
        >
          {metrics.map((item) => (
            <div key={item.label}>
              <h3 className="text-3xl font-bold text-white md:text-4xl">{item.value}</h3>
              <p className="mt-2 text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* <div className="mt-16">
          <p className="text-sm font-semibold text-gray-400">Trusted by ambitious brands across Africa and beyond</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm font-black tracking-widest text-gray-500 md:gap-12">
            {brands.map((brand) => (
              <span key={brand} className="transition hover:text-[var(--primary-color)]">
                {brand}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
