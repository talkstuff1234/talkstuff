"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const perks = ["Free strategy consultation", "Tailored solutions for your business", "No long-term contract for billboard-only bookings"];

const services = ["Digital Marketing", "Social Media", "Content Creation", "Paid Media", "Billboard Advertising", "Web & Design"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section id="contact" className="relative px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold md:text-5xl">Contact Us</h2>

          <p className="mt-6 text-sm text-gray-400">Contact us with one of these ways or fill-up the form</p>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["✉", "Email Us At", "hello@talkstuff.social"],
            ["⌖", "Our Location", "Abuja, Nigeria"],
            ["♧", "Call Us At", "+234 706 123 4567"],
          ].map((item, index) => (
            <motion.div
              key={item[1]}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 text-center backdrop-blur-sm"
            >
              <div className="text-2xl text-[var(--primary-color)]">{item[0]}</div>
              <h3 className="mt-4 text-lg font-bold">{item[1]}</h3>
              <p className="mt-3 text-sm text-gray-500">{item[2]}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold">Get In Touch</h3>
        </div>

        <div className="mt-8">
          {sent ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="mt-3 text-gray-400">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h4 className="mb-6 text-xl font-bold">Let&apos;s Have A Chat</h4>

              <div className="grid gap-6 md:grid-cols-3">
                <label className="text-xs text-white">
                  Full Name
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="mt-2 w-full rounded-full border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[var(--primary-color)]"
                  />
                </label>

                <label className="text-xs text-white">
                  Email Address
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="mt-2 w-full rounded-full border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[var(--primary-color)]"
                  />
                </label>

                <label className="text-xs text-white">
                  Company Name
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="mt-2 w-full rounded-full border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[var(--primary-color)]"
                  />
                </label>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-xs text-white">Choose Your Service</p>

                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="cursor-pointer rounded-full border border-white/10 px-5 py-2 text-xs text-gray-400 transition hover:border-[var(--primary-color)] hover:text-white"
                    >
                      <input type="checkbox" className="hidden" />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <label className="mt-8 block text-xs text-white">
                Your Message
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[var(--primary-color)]"
                />
              </label>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  className="rounded-full bg-[var(--primary-color)] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-80"
                >
                  Request a Proposal →
                </button>

                <div className="space-y-1 text-sm text-gray-500">
                  {perks.map((perk) => (
                    <p key={perk}>✓ {perk}</p>
                  ))}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
