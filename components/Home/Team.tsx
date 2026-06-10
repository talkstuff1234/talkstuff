"use client";

import assets from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
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
  return (
    <section id="team" className="relative overflow-hidden px-6 py-24 text-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary-color)]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <span className="mb-4 inline-flex rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary-color)]">
            Meet The Team
          </span>

          <h2 className="text-3xl font-bold leading-tight md:text-4xl">Meet Our Professional Team</h2>
        </motion.div>

        <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-white/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="h-[270px] w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-sm font-bold text-white">{member.name}</h3>

              <p className="mt-3 text-sm text-gray-500">{member.role}</p>

              <p className="mt-3 hidden text-sm leading-6 text-gray-400 group-hover:block">{member.desc}</p>

              <div className="mt-4 h-1 w-8 rounded-full bg-[var(--primary-color)] transition-all duration-300 group-hover:w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
