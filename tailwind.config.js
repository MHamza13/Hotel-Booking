/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  safelist: [{ pattern: /.*/ }],
  theme: {
    extend: {
      colors: {
        rusticGold: "#a17e50",
        sandBeige: "#ebe5d5",
        warmBronze: "#b1905e",
      },
    },
  },
  plugins: [],
};
