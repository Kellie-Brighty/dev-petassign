/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0077B6",
          dark: "#005f92",
          light: "#0098e6",
        },
      },
    },
  },
  plugins: [],
};
