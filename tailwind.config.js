/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0077B6",
          dark: "#005f92",
          light: "#0098e6",
        },
        secondary: "#64748B",
        darkmode: {
          bg: "#0A1121",
          card: "#101935",
          accent: "#1A2542",
          border: "#1A2542",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
