/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1000px",
      xl: "1300px",
    },
    extend: {
      colors: {
        teal: "#17bf9e",
        dark: "#0a2b1e",
        pearl: "#DBD5B5",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
