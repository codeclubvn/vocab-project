// @ts-nocheck
/** @type {import('tailwindcss').Config} */

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // --- colors ---
      colors: {
        ...defaultTheme.colors,
        foreground: {
          DEFAULT: "#1a1a1a",
          primary: "#1a1a1a", // black
          secondary: "#666666", // gray
        },
        background: {
          DEFAULT: "#ffffff",
          primary: "#ffffff", // white
          secondary: "#f2f2f2", // gray background
        },
        accent: {
          DEFAULT: "#1a1a1a",
          primary: "#1a1a1a", // black
          secondary: "#ffffff", // white
          // alternate: "hsl(130, 55%, 67%)",
        },
        // gray: {
        //   100: '#f7fafc',
        //   200: '#edf2f7',
        //   300: '#e2e8f0',
        //   400: '#cbd5e0',
        //   500: '#a0aec0',
        //   600: '#718096',
        //   700: '#4a5568',
        //   800: '#2d3748',
        //   900: '#1a202c',
        // },
        // blue: {
        //   100: '#ebf8ff',
        //   200: '#bee3f8',
        //   300: '#90cdf4',
        //   400: '#63b3ed',
        //   500: '#4299e1',
        //   600: '#3182ce',
        //   700: '#2b6cb0',
        //   800: '#2c5282',
        //   900: '#2a4365',
        // },
      },
      // --- typography ---
      fontFamily: {
        ...defaultTheme.fontFamily,
        opensans: ["var(--font-opensans)"],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      minWidth: {
        small: '0.5rem',
        medium: '0.75rem',
        semiMedium: '1rem',
        large: '1rem',
        xlarge: '1.5rem',
        xxlarge: '2.5rem',
      },
      minHeight: {
        small: '0.5rem',
        medium: '0.75rem',
        semiMedium: '1rem',
        large: '1rem',
        xlarge: '1.5rem',
        xxlarge: '2.5rem',
      },
      // --- spacing ---
      padding: {
        small: '0.5rem',
        medium: '0.75rem',
        semiMedium: '1rem',
        large: '1rem',
        xlarge: '1.5rem',
        xxlarge: '2.5rem',
      },
      margin: {
        small: '0.5rem',
        medium: '0.75rem',
        semiMedium: '1rem',
        large: '1rem',
        xlarge: '1.5rem',
        xxlarge: '2.5rem',
      },
      // --- border ---
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
    },
  },
  plugins: [],
}
