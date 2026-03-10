/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      },
      animation: {
        glow: 'glow 20s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
            opacity: '0.15'
          },
          '25%': {
            transform: 'translate(100px, 50px) scale(1.1) rotate(10deg)',
            opacity: '0.25'
          },
          '50%': {
            transform: 'translate(-50px, 100px) scale(1.05) rotate(-10deg)',
            opacity: '0.2'
          },
          '75%': {
            transform: 'translate(-100px, -50px) scale(1.1) rotate(5deg)',
            opacity: '0.25'
          }
        }
      }
    }
  },
  plugins: []
}
