import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      colors: {
        ink: "#09090B",
        panel: "#111827",
        blue: "#2563EB",
        green: "#22C55E",
        violet: "#A855F7"
      },
      boxShadow: {
        glow: "0 0 60px rgba(37, 99, 235, .16)"
      }
    }
  },
  plugins: []
};

export default config;
