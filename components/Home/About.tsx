"use client";

import assets from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const pillars = [
  {
    title: "Strategy",
    desc: "We plan campaigns with clear goals, audience insight, and measurable direction.",
    icon: TrendingUp,
  },
  {
    title: "Creativity",
    desc: "We create visuals, stories, and ideas that make people stop, feel, and remember.",
    icon: Lightbulb,
  },
  {
    title: "Execution",
    desc: "We turn ideas into polished digital campaigns, outdoor ads, and brand experiences.",
    icon: Rocket,
  },
  {
    title: "Results",
    desc: "We focus on visibility, engagement, leads, and long-term business growth.",
    icon: BarChart3,
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Top About Area */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary-color)]"
            >
              About TalkStuff
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl text-4xl font-bold leading-tight md:text-5xl"
            >
              Your Digital Growth & Advertising Partner
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-sm leading-7 text-gray-400 md:text-base"
            >
              TalkStuff Digital Services is a full-service digital agency helping businesses grow their brand, reach the right audience, and drive
              measurable results through smart strategy, creative content, and powerful advertising.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 inline-flex rounded-full bg-[var(--primary-color)] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              Learn More About Us →
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <Image src={assets.officeCollab} alt="Team at work" className="h-[360px] w-full object-cover" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 right-6 rounded-2xl bg-[var(--primary-color)] px-6 py-5 shadow-2xl shadow-black/30"
            >
              <p className="text-xl font-black leading-tight text-white">
                YOUR BRAND <br />
                EVERYWHERE <br />
                IT MATTERS.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Us Area */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)]/10 px-3 py-1 text-xs text-[var(--primary-color)]"
            >
              Why Us?
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-xl text-3xl font-bold leading-tight md:text-4xl"
            >
              Why You Should Choose Us To Help Your Business?
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-sm leading-7 text-gray-400"
          >
            We combine strategy, creativity, execution, and results to help your business stand out in a crowded digital world. From online campaigns
            to outdoor advertising, we build brand experiences that attract attention and support long-term business growth.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-color)]">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h4 className="text-xl font-bold text-white">{pillar.title}</h4>

                <p className="mt-3 text-sm leading-6 text-gray-400">{pillar.desc}</p>

                <div className="mt-5 h-1 w-10 rounded-full bg-[var(--primary-color)] transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
