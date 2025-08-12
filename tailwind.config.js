/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        1.25: "0.3125rem", // Custom translate value for 5px
        "-1.25": "-0.3125rem", // Custom negative translate value for -5px
      },
      screens: {
        sm: { max: "639px" },
        md: { max: "767px" },
        lg: { max: "1023px" },
        xl: { max: "1279px" },
        "2xl": { max: "1535px" },
      },
    },
  },
  plugins: [],
};
