import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: "32px",
      screens: {
        desktop: "1024px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
};

export default config;
