/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    //   "2xl": "1536px",
    // },
    colors: {
      primary: "#8B0000",
      lighterPrimary: "#ffffff",
      lightPrimary: "#8B0000",
      darkPrimary: "#FF0000",
      lightGrey: "#f2f2f2",
      darkGrey: "#333333",
      darkColor: "#0a0a0a",
      red: "#ff2c2c",
    },
    fontFamily: {
      sans: ["Poppins", "Arial"],
      serif: [],
    },
    extend: {
      spacing: {},
      borderRadius: {},
    },
  },
  plugins: [],
};
