/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Metropolitan Velocity Palette ─────────────
        mv: {
          grey:   '#373B3E',
          black:  '#0A0A0A',
          red:    '#D90429',
          silver: '#8D99AE',
          white:  '#EDF2F4',
        },
        // ── Legacy aliases kept for components not yet migrated ─
        bg: {
          dark:   '#373B3E',
          darker: '#0A0A0A',
          card:   '#1E2124',
        },
        aws: {
          blue: '#D90429',
          cyan: '#8D99AE',
        },
        accent: {
          blue:   '#D90429',
          cyan:   '#8D99AE',
          purple: '#D90429',
          pink:   '#EDF2F4',
          orange: '#D90429',
          green:  '#8D99AE',
        }
      },
      fontFamily: {
        // Previous fonts:
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        signature: ['Caveat', 'cursive'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient-shift 3s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'blob': 'blob 10s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-30px) translateX(20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      }
    }
  },
  plugins: [],
}
