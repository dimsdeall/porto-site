/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      yellow: "#F6D213",
      red: "#E820B0",
      green: "#39DFA3",
      blue: "#389AFF",
      info: "#5CE1E6",
      background: "#00061b",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow:{
        'red-custome' : '0 0 0.5em .25em #39DFA3'
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-in": "fade 2s ease-in-out",
        "slide-up": "bottom-up 1s",
        "slide-right": "right-to-left 1s",
      },
      keyframes: {
        "fade": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "bottom-up": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        "right-to-left": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
