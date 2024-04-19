import { Oxanium } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      after:['hover', 'focus'],
      afterHover: ['hover'],
      afterAfter: ['focus'],
      backgroundImage: theme => ({
        'fondo':"url('/assets/fondo.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }),
      fontFamily: {
        Spartan: ['League Spartan'],
        Impact: ['Impact', 'sans'],
        Oxanium: ['Oxanium ExtraBold', 'sans']
      } 
    },
  },
  variant: {},
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
};
export default config;
