/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#142C66",
          yellow: "#FFD600",
          white: "#FFFFFF",
          black: "#000000",
          gray100: "#F3F4F6",
          gray600: "#4B5563",
          gray800: "#1F2937",
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};
