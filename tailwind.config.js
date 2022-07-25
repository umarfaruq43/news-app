module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#f79918",
        white: "#FFFFFF",
        black: "#000000",
        fadegray: "#797979",
      },

      minHeight: {
        image: "300px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
