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

      colors: {
        primary: "#002c6d",
        secondary: "#10a0e8",
        bright: "#00ECD0",
      },
      screens: {
        xs: "370px",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar")
  ],
};
export default config;
