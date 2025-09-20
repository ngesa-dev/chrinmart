/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        brand: {
          purple: "#5B21B6",  // Tailwind's purple-800
          yellow: "#FCD34D",  // Tailwind's yellow-300
          white: "#FFFFFF",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
}

