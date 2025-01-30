/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the src folder
    "./public/index.html", // Scan index.html in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};