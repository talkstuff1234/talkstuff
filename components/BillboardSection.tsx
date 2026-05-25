"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const checkmarks = [
  "Prime locations across major cities",
  "High-impact designs that stand out",
  "Campaign tracking and performance reports",
  "Perfect for awareness and large-scale reach",
];

export default function BillboardSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section style={{
      background: isDark ? "#0a0a0a" : "#111",
      padding: "80px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background diagonal accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "50%", height: "100%",
        background: "rgba(255,91,18,0.03)",
        clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="billboard-grid">

          {/* Left: billboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            {/* TODO: Replace placeholder with: <img src="/images/billboard-road.png" alt="Billboard advertising" style={{width:"100%",borderRadius:12}} /> */}
            <div style={{
              width: "100%", height: 300,
              background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
              borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              {/* Road illustration placeholder */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
                background: "linear-gradient(180deg, transparent, rgba(255,91,18,0.1))",
              }} />
              <span style={{ color: "rgba(255,255,255,0.15)", fontFamily: "'Courier New', monospace", fontSize: 11 }}>
                [billboard-road.png]
              </span>

              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(255,91,18,0.85), rgba(180,40,0,0.9))",
                borderRadius: 12,
                display: "flex", alignItems: "flex-end", padding: "24px 28px",
              }}>
                <div>
                  <p style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 10, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
                    marginBottom: 6,
                  }}>Billboard Advertising</p>
                  <h3 style={{
                    fontFamily: "'Georgia', serif",
                    fontWeight: 900, fontSize: 26,
                    color: "#fff", lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}>
                    BILLBOARD<br />
                    ADVERTISING<br />
                    <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
                      Be Seen. Be Remembered.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#ff5b12", fontWeight: 700,
                display: "block", marginBottom: 14,
              }}
            >
              New &amp; Powerful
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 900, letterSpacing: "-0.03em",
                lineHeight: 1.05, color: "#fff", marginBottom: 16,
              }}
            >
              Billboard Advertising That Gets You Noticed
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 16, lineHeight: 1.75,
                color: "rgba(255,255,255,0.72)", marginBottom: 24,
              }}
            >
              {/* EDIT: Billboard section description */}
              Our outdoor media puts your brand in high-traffic locations where thousands of eyes can
              meet you. We handle strategy, design, placement and reporting.
            </motion.p>

            {/* Checkmarks */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {checkmarks.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "#ff5b12",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <span style={{ color: "#fff", fontSize: 11, fontWeight: 900 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.82)" }}>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#contact" style={{
                background: "#fff", color: "#0a0a0a",
                textDecoration: "none",
                padding: "13px 24px", borderRadius: 6,
                fontFamily: "'Courier New', monospace", fontSize: 13, fontWeight: 700,
                display: "inline-block",
                transition: "background 0.2s, transform 0.15s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#f0f0ea"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Request Billboard Advertising →
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .billboard-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
