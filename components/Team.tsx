"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── TEAM MEMBERS — add/edit/remove team members here ──
// Replace `image` with actual paths like "/images/team-tolu.png"
const TEAM = [
  { name: "Tolu Adeyemi", role: "CEO & Strategy Lead", image: null, initials: "TA" },
  { name: "Janet Okoro", role: "Head of Marketing", image: null, initials: "JO" },
  { name: "David Nwosu", role: "Creative Director", image: null, initials: "DN" },
  { name: "Amaka Orji", role: "Social Media Lead", image: null, initials: "AO" },
  { name: "Ibrahim Bello", role: "Performance Lead", image: null, initials: "IB" },
  { name: "Chioma Eze", role: "Content Strategist", image: null, initials: "CE" },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase"
          >
            Meet The Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mt-3 mb-3"
          >
            The People Behind the{" "}
            <span className="text-orange-500">Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-400"
          >
            A passionate team of strategists, creatives, and growth experts
            dedicated to your success.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden mb-4 relative">
                {member.image ? (
                  // ── Replace null with "/images/team-xxx.png" to show photo ──
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900
                                  flex items-center justify-center text-white font-black text-lg
                                  group-hover:from-orange-500 group-hover:to-orange-700 transition-all duration-300">
                    {member.initials}
                  </div>
                )}
              </div>
              <h4 className="text-zinc-900 dark:text-white font-bold text-sm">{member.name}</h4>
              <p className="text-zinc-400 text-xs mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
