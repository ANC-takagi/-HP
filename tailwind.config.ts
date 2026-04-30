import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EAF2FA",
          100: "#CBDDEF",
          200: "#9BBDDF",
          300: "#6B9DCE",
          400: "#3B7DBE",
          500: "#1B5DA0",
          600: "#0F4C81",
          700: "#0C3D67",
          800: "#082C4B",
          900: "#051D32",
        },
        steel: {
          50: "#F4F6F8",
          100: "#E5E9ED",
          200: "#C8CFD7",
          300: "#A0A8B0",
          400: "#727A82",
          500: "#4D5560",
          600: "#363B44",
          700: "#252931",
          800: "#171A21",
          900: "#0B0D12",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-jp)",
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "var(--font-inter)",
          "var(--font-noto-sans-jp)",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
