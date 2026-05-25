"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// ── CONTACT PERKS — edit bullet points here ──
const PERKS = [
  "Free strategy consultation",
  "Tailored solutions for your business",
  "No long-term contract for billboard-only bookings",
];

// ── FORM FIELDS — add/remove fields here ──
// type: "input" | "textarea"
const FIELDS = [
  { name: "name", placeholder: "Full Name", type: "input" },
  { name: "email", placeholder: "Email Address", type: "input" },
  { name: "company", placeholder: "Company Name", type: "input" },
  { name: "service", placeholder: "Service Needed", type: "input" },
  { name: "message", placeholder: "Tell us about your project...", type: "textarea" },
] as const;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // ── FORM STATE — extend if you add server-side handling ──
  const [form, setForm] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleChange = (name: string, value: string) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = () => {
    // ── ADD YOUR FORM SUBMISSION LOGIC HERE ──
    // e.g. fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    console.log("Form submitted:", form);
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-zinc-950 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="bg-gradient-to-br from-zinc-900 to-black border border-white/10
                        rounded-3xl p-8 md:p-14 grid lg:grid-cols-2 gap-12"
        >
          {/* Left copy */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-white text-3xl md:text-4xl font-black mb-4"
            >
              Ready to <span className="text-orange-500">Grow Your Brand?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-white/60 leading-relaxed mb-8"
            >
              Let&apos;s talk about how we can help you attract more customers, increase visibility and drive real results.
            </motion.p>

            {/* Perks */}
            <div className="space-y-3">
              {PERKS.map((perk, i) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <span className="text-orange-500 font-black">✓</span>
                  <span className="text-sm">{perk}</span>
                </motion.div>
              ))}
            </div>

            {/* ── CONTACT INFO — update phone/email/location ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-10 space-y-2 text-white/40 text-sm"
            >
              <p>📞 +234 706 123 4567</p>
              <p>✉️ hello@talkstuff.social</p>
              <p>📍 Abuja, Nigeria</p>
            </motion.div>
          </div>

          {/* Right form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            {sent ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-white font-black text-xl mb-2">Message Sent!</h3>
                  <p className="text-zinc-400">We&apos;ll be in touch within 24 hours.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {FIELDS.map((field) =>
                  field.type === "textarea" ? (
                    <textarea
                      key={field.name}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                                 text-white placeholder-white/30 text-sm outline-none
                                 focus:border-orange-500 transition-colors resize-none"
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                  ) : (
                    <input
                      key={field.name}
                      type={field.name === "email" ? "email" : "text"}
                      placeholder={field.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                                 text-white placeholder-white/30 text-sm outline-none
                                 focus:border-orange-500 transition-colors"
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                  ),
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold
                             py-3.5 rounded-xl transition-colors mt-2"
                >
                  Request a Proposal →
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
