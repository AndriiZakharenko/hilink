/** @type {import('tailwindcss').Config} */

import { backgroundImage } from "./constants/styles/backgroundImage";
import { borderRadius } from "./constants/styles/borderRadius";
import { colors } from "./constants/styles/colors";
import { maxWidth } from "./constants/styles/maxWidth";
import { screens } from "./constants/styles/screens";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      backgroundImage,
      screens,
      maxWidth,
      borderRadius,
    },
  },
  plugins: [],
};
