/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      spacing: {
        '100vh': '100vh',
        '200vh': '200vh',
      },
    },
  },
  plugins: [],
}
