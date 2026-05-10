/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        quiz: {
          bg: '#111111',
          surface: '#151515',
          border: 'rgba(255,255,255,0.08)',
          accent: '#FF4500',
          sidebar: '#EE1D23',
          muted: '#8a7a78',
          back: '#5c3d32',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(255, 69, 0, 0.35)',
        'glow-sm': '0 0 16px rgba(255, 69, 0, 0.25)',
      },
      animation: {
        shimmer: 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
