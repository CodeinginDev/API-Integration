/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    gridTemplateColumns: {
      gridAutoFitCol: "repeat( auto-fit, minmax(450px, 1fr) );",
    },
    fontFamily: {
      comfortaa: ["comfortaa", "sans-serif"],
      roboto: ["roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
