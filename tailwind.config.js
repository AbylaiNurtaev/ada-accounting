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
          50: '#eef5ff',
          100: '#d9e9ff',
          500: '#2274ff',
          600: '#155de0',
          700: '#1048b0',
        },
        dark: '#0f172a',
        cyber: {
          bg: '#0d0d0d',
          accent: '#ff1a1a',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 12px 32px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 10% 20%, rgba(34,116,255,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(56,189,248,0.12), transparent 35%)',
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

