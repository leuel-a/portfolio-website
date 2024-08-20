import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--ff-sans)", "sans-serif"],
        serif: ["var(--ff-serif)", "serif"],
        "sans-cond": ["var(--ff-sans-cond)"],
        precious: ["var(--ff-precious)"],
      },
      colors: {
        "dark-blue": "hsl(230 35% 7%)",
        accent: "hsl(231 77% 90%)",
        white: "hsl(0 0% 100%)",
      },
      gridTemplateColumns: {
        home: "2rem repeat(2, minmax(0, 40rem)) 2rem",
      },
      backgroundImage: {
        close: "url('/public/assets/shared/icon-close.svg')",
        burger: "url('/public/assets/shared/icon-hamburger.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
