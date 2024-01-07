/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        lightsteelblue: "#bbd4f3",
        gray: "#171616",
        whitesmoke: {
          100: "#edefee",
          200: "#efeded",
          300: "#ededef",
          400: "#eaeaea",
        },
        dodgerblue: {
          100: "#2a84fc",
          200: "#0e7df3",
        },
        lightgray: "#cdcdcd",
        gainsboro: "#d9d9d9",
        dimgray: "#666",
        white: "#fff",
        red: "#ee0000",
        darkgray: {
          100: "#b0aeae",
          200: "#a6a6a6",
        },
        mediumblue: "#0e24ee",
        darkseagreen: {
          100: "#b3edbc",
          200: "rgba(179, 237, 188, 0.73)",
        },
        palegoldenrod: "#faf2af",
        lightpink: "#f59f9f",
        lightgreen: "#67d465",
        salmon: "#f96262",
        khaki: "#ddd869",
        royalblue: "#1371ff",
        yellow: "#faff00",
        limegreen: "#73ff5d",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        inherit: "inherit",
        magra: "Magra",
        kadwa: "Kadwa",
        italiana: "Italiana",
        "lao-muang-don": "'Lao Muang Don'",
      },
      borderRadius: {
        "2xl": "21px",
        "3xs": "10px",
        "99981xl": "100000px",
      },
    },
    fontSize: {
      "11xl": "30px",
      "31xl": "50px",
      "21xl": "40px",
      "6xl": "25px",
      base: "16px",
      xl: "20px",
      "77xl": "96px",
      "16xl": "35px",
      "17xl": "36px",
      "81xl": "100px",
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
