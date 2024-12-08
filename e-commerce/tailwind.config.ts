import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

    screens: {
      'mob' : {'max':'699'},
      'tab' : '700px',
      'lap' : '1100px',
      'big' : '1440px'
    }
  },
  plugins: [],
};
export default config;
