// ── FOOTER — edit links, columns, contact info here ──

// Footer column data
const FOOTER_COLS = [
  {
    title: "Quick Links",
    links: ["About Us", "Services", "Case Studies", "Contact"],
  },
  {
    title: "Services",
    links: ["Digital Marketing", "Social Media", "Billboard Advertising", "Web & Design"],
  },
  {
    title: "Resources",
    links: ["Blog", "FAQs", "Privacy Policy", "Terms"],
  },
];

// ── SOCIAL LINKS — add your actual URLs ──
const SOCIALS = [
  { label: "Twitter/X", href: "#", icon: "𝕏" },
  { label: "Instagram", href: "#", icon: "IG" },
  { label: "LinkedIn", href: "#", icon: "in" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-white font-black text-2xl">
                Talk<span className="text-orange-500">Stuff</span>
              </span>
              <span className="text-white/30 text-[9px] font-bold tracking-widest ml-2">
                DIGITAL SERVICES
              </span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              We build visibility that drives results. Digital. Outdoor. Everywhere.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center
                             justify-center text-white/50 hover:border-orange-500 hover:text-orange-400
                             text-xs font-black transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-orange-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* ── COPYRIGHT — update year/company name ── */}
          <p className="text-zinc-500 text-sm">
            © 2026 TalkStuff Digital Services. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-zinc-500 hover:text-white text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 hover:text-white text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
