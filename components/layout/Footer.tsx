"use client";

import assets from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const footerCols = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Clients", href: "#clients" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Digital Marketing", href: "#services" },
      { label: "Social Media Marketing", href: "#services" },
      { label: "Content Creation", href: "#services" },
      { label: "Billboard Advertising", href: "#services" },
      { label: "Web & Design", href: "#services" },
    ],
  },
];

const socials = [
  {
    label: "Twitter",
    href: "#",
    icon: "𝕏",
  },
  {
    label: "Instagram",
    href: "#",
    icon: "IG",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "in",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 pt-20 pb-8 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold flex gap-2 tracking-tight">
                <Image src={assets.logo} width={30} alt="logo" />
                TalkStuff
              </h2>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              We build visibility that drives results. Digital marketing, outdoor advertising, content creation, and web experiences that help brands
              grow and stay memorable.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-gray-400 transition hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">{col.title}</h3>

              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 transition hover:text-[var(--primary-color)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">Email</p>
              <p className="mt-2 text-sm text-white">hello@talkstuff.social</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">Phone</p>
              <p className="mt-2 text-sm text-white">+234 706 123 4567</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
              <p className="mt-2 text-sm text-white">Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} TalkStuff Digital Services. All rights reserved.</p>

          <p className="text-sm text-gray-500">Built with strategy, creativity and technology.</p>
        </div>
      </div>
    </footer>
  );
}
