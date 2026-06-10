"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Service = {
  number: string;
  title: string;
  desc: string;
  tag: string;
  image: string;
};

type ServiceCardProps = {
  service: Service;
  index: number;
};

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    desc: "Full-funnel strategies that drive traffic and conversions.",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    number: "02",
    title: "Social Media Marketing",
    desc: "Engage, grow, and build loyal communities.",
    tag: "Growth",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  },
  {
    number: "03",
    title: "Content Creation",
    desc: "Strong visuals and videos that tell your story.",
    tag: "Creative",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
  {
    number: "04",
    title: "Billboard Advertising",
    desc: "High-visibility outdoor ads that put your brand on everybody's radar.",
    tag: "Outdoor",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=800&q=80",
  },
  {
    number: "05",
    title: "Creative Campaigns",
    desc: "Big ideas. Bold execution. Real impact.",
    tag: "Branding",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
];

function ServiceCard({ service, index }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${
        index === 0 ? "lg:col-span-2 lg:row-span-2 h-[430px]" : "h-[300px]"
      }`}
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

      <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xs font-bold text-white/60 backdrop-blur-md">
        {service.number}
      </div>

      <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur-md transition group-hover:bg-[var(--primary-color)] group-hover:text-white">
        {service.tag}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold leading-tight text-white">{service.title}</h3>

        <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">{service.desc}</p>

        <motion.div
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-color)]"
        >
          →
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--primary-color)] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary-color)]"
            >
              Our Services
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl"
            >
              End-to-End Solutions For Modern Brands
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl self-end text-sm leading-7 text-gray-400 lg:text-right"
          >
            From strategy to execution — services that build visibility, engage audiences, and drive real business growth.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
