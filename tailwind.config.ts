import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: "var(--font-inter)",
        roboto: "var(--font-roboto)",
        montserrat: "var(--font-montserrat)"
      },
      colors: {
        primary: "#002c6d",
        yellow: "#FFDF42",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar"),
    // require("prettier-plugin-tailwindcss"),
  ],
};
export default config;
