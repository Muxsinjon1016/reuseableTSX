/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        6: "6px",
        12: "12px",
        20: "20px",
      },
    },
  },
  plugins: [],
};
