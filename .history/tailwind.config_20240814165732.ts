const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        dark: {
          100: "#342739",
          200: "#2F2334",
          300: "#2B1E31",
          400: "#241929",
          500: "#201625",
          600: "#1A1020",
          700: "#150C19",
          800: "#110A14",
        },
        shopees: {
          100: "#342739",
          200: "#2F2334",
          300: "#2B1E31",
          400: "#291E19",
          500: "#261D17",
          600: "#211611",
          700: "#1A110C",
          800: "#140E0A",
        },
        light: {
          100: "#ECECEC",
          200: "#E4E4E4",
          300: "#D8D8D8",
          400: "#CCCCCC",
          500: "#BFBFBF",
          600: "#B5B5B5",
          700: "#A9A9A9",
          800: "#9B9B9B",
        },
        primary: "#9121CA",
        shared: "#d946ef",
        private: "#9121CA",
        reseller: "#22d3ee",
        shopee: "#ee4d2d",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      fontFamily: {
        fpifont: "'FPIFont', sans-serif",
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
  })
}

export default config
