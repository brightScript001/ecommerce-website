import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': ' 640px',
      'lg': '840px',
      '2xl': '1680px',
    },
    extend: {
    },
  },
  plugins: [
    aspectRatio,
  ],
};

export default tailwindConfig;
