/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        "mobile-min": { min: "780px" },
        widescreen: { max: "1140px" },
      },
      colors: {
        primary: "#1BA3C1",
        secondary: "#202342",
        background: "#FFFFFF",
        foreground: "#000000",
        front: "#000000",
        back: "#FFFFFF",
      },
      spacing: {
        xl: "80px",
        xxl: "500px",
      },
      width: {
        108: "26rem",
        112: "28rem",
        128: "32rem",
        132: "34rem",
        136: "36rem",
        140: "38rem",
        144: "40rem",
        148: "42rem",
        152: "44rem",
        156: "46rem",
        160: "48rem",
      },
      height: {
        112: "28rem",
        128: "32rem",
      },
      borderRadius: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
      zIndex: {
        1: 1,
      },
      height: {
        inherit: "inherit",
      },
      content: {
        visible: '" "',
      },
    },
  },
  plugins: [],
};
