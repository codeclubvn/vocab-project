/** @type {import('tailwindcss').Config} */

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
const defaultTheme = require('tailwindcss/defaultTheme')
const radixThemePlugin = require('radix-ui-themes-with-tailwind')

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // --- colors ---
      colors: {
        ...defaultTheme.colors,
        foreground: {
          DEFAULT: '#202020', // black
          primary: '#ffffff', //white
          secondary: '#666666', // gray
          accent: '#65ba75', //  green
        },
        background: {
          DEFAULT: '#ffffff', //white 
          primary: '#202020', //black
          secondary: '#666666', // gray
          accent: '#65ba75', //  green
        },
        accent: {
          DEFAULT: '#65ba75', // green
          primary: '#2bbe88', //green dark
          secondary: '#666666', // gray
        },
      },
      // --- typography ---
      fontFamily: {
        ...defaultTheme.fontFamily,
        opensans: ['var(--font-opensans)'],
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
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
    },
  },
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: true, // optional
      useTailwindRadiusNames: true, // optional
      mapMissingTailwindColors: true, // optional
    }),
    // https://ned.im/radix-ui-themes-with-tailwind/
  ],
}
