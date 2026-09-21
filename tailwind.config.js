/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        panel: '#111827',
        accent: '#f59e0b',
        soft: '#f8fafc'
      },
      boxShadow: {
        glow: '0 10px 30px rgba(245, 158, 11, 0.2)'
      }
    }
  },
  plugins: []
};