/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: { darkgray: "#272727", dblue: { 100: "#122254",200: "#1279854"} },
    },
  },
  plugins: [],
};
