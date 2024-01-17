/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          10: "#e8edfb",
          20: "#d1dbf7",
          30: "#bac8f3",
          40: "#5d80e2",
          50: "#2f5bda",
          60: "#1849d6",
          70: "#1642C1",
          80: "#0E2C80",
          90: "#0A1D56",
          100: "#071640",
          110: "#050F2B",
        },
        green: {
          10: "#e9f9ec",
          20: "#d2f2d9",
          30: "#bcecc6",
          40: "#62d27b",
          50: "#35c555",
          60: "#1fbe42",
          70: "#1cab3b",
          80: "#137228",
          90: "#0C4C1A",
          100: "#093914",
          110: "#06260d",
        },
      },
      screens: {
        tablet: "960px",
        desktop: "1248px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
