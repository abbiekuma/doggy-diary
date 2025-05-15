/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#FFF3E2",
        mainT: "#7E6263",
        mainTl: "#E4C8C1",
        mainT2: "#B39178",
        mainT2d: "#7D6554",
        mainT3: "#654B71",
      },
      textStrokeWidth: {
        1: "1px",
        2: "2px",
      },
      textStrokeColor: {
        mainT2: "#B39178",
        mainT2d: "#7D6554",
      },

      fontFamily: {
        primary: ["Concert One", "sans-serif"],
        secondary: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-text-stroke")],
};
