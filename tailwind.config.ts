import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F5ECD7",
        ink: "#2C1A0E",
        heading: "#5C4A1E",
        gold: "#C8922A",
        cta: "#8B3A3A",
        forest: "#3B5E3A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        body: ["var(--font-lora)", "serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
