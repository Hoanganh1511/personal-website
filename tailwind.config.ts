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
      transitionTimingFunction: {
        "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-down": {
          "0%": { opacity: "0", transform: "translateY(-80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "content-blur": {
          "0%": { filter: "blur(0.3rem)" },
          "100%": { filter: "blur(0)" },
        },
      },
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
        poppins: ["var(--font-poppins)"],
        "poppins-medium": ["var(--font-poppins-medium)"],
        "poppins-bold": ["var(--font-poppins-bold)"],

        amazon: ["AmazonEmber", "sans-serif"],
        "ibm-plex-sans": ["var(--font-ibm-plex-sans)"],
        "xanh-mono": ["var(--font-xanh-mono)"],
      },
      fontSize: {
        sm: "12px",
        base: "16px",
        xl: "24px",
        "2xl": "30px",
        "3xl": "36px",
      },
      animation: {},
      colors: {
        primary: "rgba(161,161,170,1)",
        "custom-blue": "#0037A5",
        "custom-blue-light": "#0c5dff",
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
