/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        "mobile-min": { min: "780px" },
        widescreen: { min: "780px" },
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
      animation: {
        fade: "fadeIn 0.4s ease-out",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
