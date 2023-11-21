/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "845px",
      lg: "1080px",
      xl: "1350px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
