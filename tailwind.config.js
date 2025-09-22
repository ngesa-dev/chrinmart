/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        brand: {
         purple:  "#142C66",// brightened purple
  yellow: "#FFD600",// 
          white: "#FFFFFF",
          black: "#000000",
            gray100: "#F3F4F6", // light gray background
          gray600: "#4B5563", // medium gray (body text)
          gray800: "#1F2937", // dark gray (headings / strong text)
        },
      },
    },
  },
  plugins: [],
}

