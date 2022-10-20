/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          1: '#131521',
          3: '#333333'
        },
        gray: {
          6: "#666666",
          7: "#76777C",
          8: "#898F8F",
          12: "#cccccc",
          16: "#e0e0e7",
        },
        orange: {
          15: "#FC7823",
        },
      },
      borderWidth: {
        1: "1px",
        3: "3px",
        6: "6px",
      },
      keyframes: {
        bounce_1: {
          "0%, 100%": {
            transform: "translateY(-50%) scaleY(1.2)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(50%) scaleY(0.6)",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        bounce_1: "bounce_1 1.5s infinite",
      },
    },
  },
  plugins: [],
};
