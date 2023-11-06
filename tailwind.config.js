/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "30px",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fcf5f4",
          100: "#fae9e6",
          200: "#f7d7d1",
          300: "#f1bab0",
          400: "#e79182",
          500: "#da705d",
          600: "#c5523d",
          700: "#a54230",
          800: "#89392b",
          900: "#733429",
          950: "#3d1912",
        },
        black: "#000",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
