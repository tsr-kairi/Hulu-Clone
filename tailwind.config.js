module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      primary: "#00ed82",
      secondary: "#ff4081",
      white: "#ffffff",
      black: "#000000",
      hover: "#3370bb",
      footerBg: "#ebedf2",
    },
    // fontFamily: {
    //   sans: ["Graphik, Helvetica, Arial, sans-serif"],
    // },
    extend: {},
  },
  plugins: [],
};
