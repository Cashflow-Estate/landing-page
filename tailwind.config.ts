import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      screens: {
        '2xl': { 'min': '1200px', 'max': '1400px' },
        'xl': { 'min': '992px', 'max': '1200px' },
        'lg': { 'min': '768px', 'max': '992px' },
        'md': { 'min': '576px', 'max': '768px' },
        'sm': { 'min': '300px', 'max': '576px' },
      },
      fontFamily: {
        inter: ["var(--inter)"],
        caveat: ["var(--caveat)"],
        poppins: ["var(--poppins)"],
        dmSans: ["var(--dmSans)"],
      },
      colors: {
        customblue: '#2F9CEF',
        customblack: '#2A2A2A',
        customorange: '#FB8A05',
        custombrown: '#F5F5F5',
        customblackish: '#1E1E1E',
        customlight: '#F5F5F5',
        customgreen: '#9EC045',
        customred: '#D41E1E',
        customligher: '#EAF5FD',
        custombrownish: '#565656',
        customer: '#5587A3'
      }
    },
  },
  plugins: [],
};
export default config;
