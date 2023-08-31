import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Main", "sans-serif"],
      },
      colors: {
        black: "#101010",
        darkGray: "#232323",
        gray: "#868686",
        whiteShade: "#f3f3f3",
        green: "#9effbf",
        purple: "#7941a7",
        pink: "#e2beff",
        blue: "#1059c8",
      },
    },
  },
  plugins: [],
} satisfies Config;
