/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490DC',
        secondary: '#F1C40F',
        success: '#2ECC71',
        info: '#34495E',
        warning: '#E67E22',
        danger: '#E74C3C',
      },
    },
  },
  plugins: [],
}