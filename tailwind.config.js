/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "bg-bg": "#141C2F",
        "bg-bd": "#1F2A48",
        "bg-light": "#0084C6",
        "bg-card": " #FFFFFF",
      },
      fontFamily: {
        theme: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
