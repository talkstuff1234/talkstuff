"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

// TODO: Replace these with actual client logo images or SVGs
const brands = ["SAMSUNG", "airtel", "paga", "UBA", "Uber", "DStv", "FirstBank"];

export default function LogoStrip() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section style={{
      background: isDark ? "#fff" : "#0a0a0a",
      padding: "24px 0",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <p style={{
          textAlign: "center",
          color: isDark ? "#777" : "rgba(255,255,255,0.5)",
          fontSize: 11,
          fontFamily: "'Courier New', monospace",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 18,
        }}>
          {/* EDIT: Update trust bar label */}
          Trusted by ambitious brands across Africa and beyond
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                fontFamily: "'Georgia', serif",
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: "0.08em",
                color: isDark ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
                cursor: "default",
                transition: "color 0.2s",
              }}
              whileHover={{ scale: 1.05 }}
            >
              {/* TODO: Replace text with <img src={...} alt={brand} style={{height:24, opacity:0.4}} /> for real logos */}
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
