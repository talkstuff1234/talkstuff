"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Digital Marketing",
    desc: "Full-funnel strategies that drive traffic and conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tag: "Strategy",
    details: ["SEO & content strategy", "Email marketing automation", "Funnel design & CRO", "Brand positioning"],
  },
  {
    number: "02",
    title: "Social Media Marketing",
    desc: "Engage, grow, and build loyal communities.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    tag: "Growth",
    details: ["Platform-specific content", "Community management", "Influencer partnerships", "Growth analytics"],
  },
  {
    number: "03",
    title: "Content Creation",
    desc: "Strong visuals and videos that tell your story.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    tag: "Creative",
    details: ["Short & long-form video", "Photography & editing", "Copywriting & scripts", "Brand storytelling"],
  },
  {
    number: "04",
    title: "Paid Media",
    desc: "High-impact ads that deliver maximum ROAS.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tag: "Performance",
    details: ["Google & Meta Ads", "Retargeting campaigns", "A/B creative testing", "Budget optimisation"],
  },
  {
    number: "05",
    title: "Billboard Advertising",
    desc: "High-visibility outdoor ads that put your brand on everybody's radar.",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=800&q=80",
    tag: "Outdoor",
    details: ["Site selection & planning", "Print & digital formats", "High-traffic placements", "Campaign tracking"],
  },
  {
    number: "06",
    title: "Creative Campaigns",
    desc: "Big ideas. Bold execution. Real impact.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    tag: "Branding",
    details: ["Concept development", "Multi-channel rollout", "Visual identity systems", "Launch strategy"],
  },
  {
    number: "07",
    title: "Analytics & Reporting",
    desc: "Track performance and optimize for growth.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    tag: "Insights",
    details: ["Custom dashboards", "KPI tracking & alerts", "Competitor benchmarking", "Monthly deep-dives"],
  },
  {
    number: "08",
    title: "Web & Design",
    desc: "Beautiful, fast and conversion-focused websites.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    tag: "Design",
    details: ["UI/UX design & prototyping", "Next.js & CMS builds", "Speed & SEO optimisation", "Ongoing maintenance"],
  },
];

function ServiceCard({ svc, i, inView, large = false }: { svc: (typeof SERVICES)[0]; i: number; inView: boolean; large?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative overflow-hidden rounded-3xl cursor-default"
      style={{ height: large ? "480px" : "320px" }}
    >
      {/* Background image */}
      <img
        src={svc.image}
        alt={svc.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Default gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-0" />

      {/* Hover gradient — deeper so details are legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Orange sweep line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

      {/* Number */}
      <div className="absolute top-5 left-5">
        <span className="text-[11px] font-black tracking-[0.25em] text-white/40 group-hover:text-orange-400 transition-colors duration-300">
          {svc.number}
        </span>
      </div>

      {/* Tag pill */}
      <div className="absolute top-5 right-5">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
          {svc.tag}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Title + desc — slide up on hover to make room */}
        <div className="transition-transform duration-400 group-hover:-translate-y-1">
          <h3 className="text-white font-black leading-tight mb-1.5 tracking-tight" style={{ fontSize: large ? "1.6rem" : "1.15rem" }}>
            {svc.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">{svc.desc}</p>
        </div>

        {/* Detail bullets — revealed on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 space-y-1.5 overflow-hidden"
            >
              {svc.details.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.055, duration: 0.25 }}
                  className="flex items-center gap-2 text-[13px] text-white/75"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Arrow CTA */}
        <motion.div
          initial={false}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.25, delay: hovered ? 0.15 : 0 }}
          className="mt-4 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [first, ...rest] = SERVICES;
  const middle = rest.slice(0, 3);
  const last = rest.slice(3);

  return (
    <section id="services" ref={ref} className="py-28 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="inline-flex items-center gap-2 text-orange-500 text-xs font-bold tracking-[0.25em] uppercase mb-4"
            >
              <span className="w-6 h-[2px] bg-orange-500" />
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-white font-black leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              End-to-End Solutions
              <br />
              <span className="text-zinc-500">for Modern Brands</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm leading-relaxed max-w-xs md:text-right"
          >
            From strategy to execution — services that build visibility, engage audiences, and drive real business growth.
          </motion.p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
          <div className="lg:col-span-5">
            <ServiceCard svc={first} i={0} inView={inView} large />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {middle.map((svc, i) => (
              <ServiceCard key={svc.title} svc={svc} i={i + 1} inView={inView} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {last.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} i={i + 4} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75 }}
          className="flex items-center justify-between mt-14 pt-10 border-t border-white/10"
        >
          <p className="text-zinc-500 text-sm">8 services · Full-stack marketing</p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:gap-5"
          >
            View All Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
