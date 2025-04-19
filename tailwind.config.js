/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0A0A0F',
          light: '#121218'
        },
        primary: {
          50: '#f0f7ff',
          100: '#dbebff',
          200: '#bfdbff',
          300: '#94c5ff',
          400: '#62a5ff',
          500: '#4182ff',
          600: '#2f5df5',
          700: '#1f3fe0',
          800: '#1e36b5',
          900: '#1e338e',
          950: '#15205a',
        },
        neon: {
          blue: '#00f2ff',
          purple: '#Bf5Aff',
          pink: '#ff36f7',
          green: '#39ff14',
          yellow: '#fffc00',
          orange: '#ff7b00',
          red: '#ff2d55',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { filter: 'brightness(1) blur(4px)' },
          '50%': { filter: 'brightness(1.3) blur(6px)' },
        },
      },
    },
  },
  plugins: [],
};