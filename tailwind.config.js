/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#0F4C42',
        brandTeal: '#125C52',
        brandLightBg: '#F4F9F8',
        brandCardBg: '#EAF4F2',
      },
    },
  },
  plugins: [],
}