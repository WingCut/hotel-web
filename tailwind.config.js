/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        md: "800px",
        // => @media (min-width: 768px) { ... }
      },
      colors: {
        "regal-green": "rgb(102, 175, 106)",
      },
    },
  },
  plugins: [],
};
