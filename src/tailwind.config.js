/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black:  '#0C0C0C',
        card:   '#161616',
        orange: '#FF4D00',
        paper:  '#F2EFE9',
        muted:  '#888880',
        border: '#222222',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        syne:  ['Syne', 'sans-serif'],
        dm:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}