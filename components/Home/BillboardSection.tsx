"use client";

import assets from "@/assets/assets";
import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Megaphone, Paintbrush, Wrench } from "lucide-react";
import Image from "next/image";

const checkmarks = [
  "Prime locations across major cities",
  "High-impact designs that stand out",
  "Campaign tracking and performance reports",
  "Perfect for awareness and large-scale reach",
];

const billboardDetails = [
  { label: "Location", value: "Lugbe Airport Road" },
  { label: "Landmark", value: "Shoprite" },
  { label: "Board Type", value: "Double-faced unipole billboard" },
  { label: "Display Size", value: "8m x 7m (56sqm) per face" },
];

const ratePlans = [
  {
    duration: "1 month",
    rate: "NGN 1,350,000",
    discount: "30%",
    discountedRate: "NGN 875,000",
    total: "NGN 875,000",
  },
  {
    duration: "3 months",
    rate: "NGN 1,100,000",
    discount: "30%",
    discountedRate: "NGN 770,000",
    total: "NGN 2,310,000",
  },
  {
    duration: "6 months",
    rate: "NGN 850,000",
    discount: "30%",
    discountedRate: "NGN 630,000",
    total: "NGN 3,780,000",
  },
];

const packageIncludes = [
  "Premium billboard display",
  "Artwork / creative design",
  "Amplification of message online",
  "Periodic sponsored digital advertising",
  "Professional support throughout the display period",
];

const productionCosts = [
  { item: "410gm flex production / printing", price: "NGN 180,000" },
  { item: "610gm flex production / printing", price: "NGN 340,000" },
  { item: "Installation", price: "NGN 150,000" },
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
              <Image src={assets.billboard} alt="TalkStuff billboard display" className="h-full w-full object-cover" />
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
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-white">
                    <Check size={14} strokeWidth={3} />
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
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--primary-color)] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              Request Billboard Advertising
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
        >
          <div className="grid gap-8 border-b border-white/10 p-6 md:p-8 lg:grid-cols-[1fr_1.35fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-color)]/40 bg-[var(--primary-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary-color)]">
                <Megaphone size={14} />
                Outdoor Introductory Rate Card
              </span>

              <h3 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">Lugbe Airport Road Billboard</h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
                Double-faced unipole visibility near Shoprite, built for broad reach with creative support, online amplification, and professional
                campaign assistance included.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {billboardDetails.map((detail) => (
                <div key={detail.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500">{detail.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 p-6 md:p-8 lg:grid-cols-3">
            {ratePlans.map((plan) => (
              <div key={plan.duration} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Occupancy Duration</p>
                    <h4 className="mt-2 text-2xl font-bold text-white">{plan.duration}</h4>
                  </div>

                  <span className="rounded-full bg-[var(--primary-color)] px-3 py-1 text-xs font-bold text-white">{plan.discount} off</span>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                    <span className="text-gray-500">Rate per face</span>
                    <span className="font-semibold text-gray-300">{plan.rate}</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                    <span className="text-gray-500">Discounted rate</span>
                    <span className="font-semibold text-gray-300">{plan.discountedRate}</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-1">
                    <span className="text-gray-400">Total per face</span>
                    <span className="text-lg font-bold text-[var(--primary-color)]">{plan.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 border-t border-white/10 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-color)]/15 text-[var(--primary-color)]">
                  <Paintbrush size={18} />
                </span>
                <h4 className="text-lg font-bold text-white">Package Includes</h4>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {packageIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="mt-0.5 shrink-0 text-[var(--primary-color)]" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-color)]/15 text-[var(--primary-color)]">
                  <Wrench size={18} />
                </span>
                <h4 className="text-lg font-bold text-white">Production & Installation</h4>
              </div>

              <div className="mt-5 space-y-3">
                {productionCosts.map((cost) => (
                  <div key={cost.item} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm last:border-b-0 last:pb-0">
                    <span className="text-gray-400">{cost.item}</span>
                    <span className="font-semibold text-white">{cost.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 bg-black/20 p-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[var(--primary-color)]" size={17} />
              <p>Payment term: upfront. Rate valid until December 31, 2026; all rates are negotiable based on duration.</p>
            </div>

            <a href="#contact" className="inline-flex shrink-0 items-center gap-2 font-semibold text-[var(--primary-color)] transition hover:text-white">
              Book this billboard
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
