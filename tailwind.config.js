/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          start: "#0B1220",
          end: "#0F1B33",
        },
        bot: "#E6EDF7",
        rope: "#B08D57",
        textPrimary: "#F5F7FF",
        textSecondary: "#B7C3D6",
        accent: "#4DA3FF",
      },
    },
  },
  plugins: [],
};