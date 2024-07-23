/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#D3D374",
        main: "#03346E",
        mainRed: "#E30613",
        main2: "#dfdfdf",
        primaryalt: "#f7f6f6",
        textalt: "#898989",
        maintext: "#575656",
        mainalt: "#dddddd",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "instrument-sans": ["Instrument Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
