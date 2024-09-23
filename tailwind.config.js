/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-text": "#737373",
        "primary-button": "#0095f6",
        "primary-hover-button": "#00376b",
      },
    },
  },
  plugins: [],
};
