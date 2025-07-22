/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
         light: '#E0F2FE',
         dark: '#0F172A',
         accent: '#38BDF8',
        },
      },
      backgroundImage: {
      'hero-gradient': 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #f0f9ff 100%)',
    },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
