const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7EC8",
        secondary: "#125B9E",
        "dark-blue": "#0E4679",
        "light-blue": "#22abf1",
        "business-gray": "#F5F5F5",
      },
      fontFamily: {
        manrope: ["manrope"],
      },
    },
    screens: {
      "4sm": "361px",
      "3sm": "375px",
      "2sm": "426px",
      "1sm": "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1345px",
      "3xl": "1536px",
    },
  },
  // plugins: [require("tw-elements/dist/plugin.cjs")],
};
