import type { Config } from "tailwindcss";

const config: Config = {
  // ── DARK MODE — uses "class" strategy so next-themes can control it ──
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── BRAND COLORS — add/edit here ──
      colors: {
        orange: {
          400: "#ff7a3d",
          500: "#ff5b12",
          600: "#e04a00",
        },
      },
      // ── FONTS — add display fonts here after adding them to layout ──
      fontFamily: {
        // display: ["Bebas Neue", "Impact", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
