/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          bg: {
            light: '#e2e8f0', // slate-200
            dark: '#0f172a' // slate-900
          },
          glass: {
            light: 'rgba(148, 163, 184, 0.2)', // slate-400/20
            dark: 'rgba(255, 255, 255, 0.05)' // white/5
          },
          bright: {
            light: 'rgba(255, 255, 255, 0.6)', // white/60
            dark: 'rgba(255, 255, 255, 0.1)' // white/10
          }
        },
        text: {
          primary: {
            light: '#1e1b4b', // indigo-950
            dark: '#ffffff'
          },
          secondary: {
            light: '#1e293b', // slate-800
            dark: 'rgba(255, 255, 255, 0.7)'
          },
          muted: {
            light: 'rgba(100, 116, 139, 0.8)', // slate-500/80
            dark: 'rgba(255, 255, 255, 0.3)'
          }
        },
        accent: {
          fuchsia: '#e879f9', // fuchsia-400
          indigo: '#818cf8', // indigo-400
          blue: 'rgba(37, 99, 235, 0.6)', // blue-600/60
          purple: 'rgba(147, 51, 234, 0.6)' // purple-600/60
        }
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '16px',
        xl: '12px'
      },
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
