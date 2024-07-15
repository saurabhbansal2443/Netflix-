/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'netflix-bg': "url('./public/assets/netflixbg.jpg')",
      },
    },
  },
  plugins: [],
}