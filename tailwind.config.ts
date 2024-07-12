import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        projects: `url("/images/bg-section.png")`,
      },
      gridTemplateColumns: {
        ...defaultTheme.gridTemplateColumns,
        "16": "repeat(16, minmax(0, 1fr))",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
        lora: ["var(--font-lora)"],

        amazon: ["AmazonEmber", "sans-serif"],
        "ibm-plex-sans": ["var(--font-ibm-plex-sans)"],
        "xanh-mono": ["var(--font-xanh-mono)"],
      },
      fontSize: {
        sm: "12px",
        base: "14px",
        xl: "16px",
      },
      keyframes: {},
      animation: {},
      colors: {
        primary: "#292929",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.minHeight,
      },
      maxWidth: {
        ...defaultTheme.width,
        "container-sm": "768px",
        "container-md": "864px",
        "container-lg": "1240px",
        "container-xl": "1440px",
      },
      minWidth: {
        ...defaultTheme.minWidth,
      },
    },
  },
  plugins: [],
};
export default config;
