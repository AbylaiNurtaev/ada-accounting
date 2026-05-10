/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#fffbe6',
          100: '#fff2ad',
          500: '#ffd400',
          600: '#d9a900',
          700: '#9c7600',
        },
        dark: '#080808',
        cyber: {
          bg: '#080808',
          accent: '#ffd400',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 16px 40px rgba(0, 0, 0, 0.32)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 10% 20%, rgba(255,212,0,0.2), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,245,158,0.1), transparent 35%)',
      },
      keyframes: {
        'marquee-x': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
      animation: {
        'marquee-x': 'marquee-x 24s linear infinite',
      },
    },
  },
  plugins: [],
}
