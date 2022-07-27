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
        fadebrown: "#f8f9fa",
        footer: "#cccccc",
      },
      height: {
        500: "500px",
        400: "400px",
        300: "300px",
      },

      minHeight: {
        image: "300px",
        text: "72px",
      },
      maxHeight: {
        82: "84px",
      },
      maxWidth: {
        card: "279px",
        64: "230px",
      },
      minWidth: {
        64: "230px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
