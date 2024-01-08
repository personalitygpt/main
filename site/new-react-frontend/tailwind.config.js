/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        whitesmoke: {
          100: "#edefee",
          200: "#eaeaea",
        },
        dodgerblue: {
          100: "#2a84fc",
          200: "#0e7df3",
        },
        dimgray: "#666",
        gainsboro: "#d9d9d9",
        white: "#fff",
        darkgray: "#a6a6a6",
        lightgray: "#cdcdcd",
        red: "#ee0000",
        lightsteelblue: "#bbd4f3",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        magra: "Magra",
      },
      borderRadius: {
        "2xl": "21px",
        "3xs": "10px",
        "99981xl": "100000px",
        "46xl": "65px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "6xl": "25px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "16xl": "35px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
