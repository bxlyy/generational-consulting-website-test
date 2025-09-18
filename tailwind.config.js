/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        georgia: ["Georgia", "serif"],
        inter: ["Inter", "sans-serif"],
        viaoda: ["Viaoda Libre", "cursive"],
      },
    },
  },
  plugins: [],
};
