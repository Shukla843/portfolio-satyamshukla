/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne:  ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        code:  ['"Fira Code"', 'monospace'],
      },
      colors: {
        bg:       '#0a0a0f',
        bg2:      '#0f0f1a',
        bg3:      '#13131f',
        accent:   '#00e5ff',
        accent2:  '#7b2fff',
        accent3:  '#ff3c6e',
        muted:    '#6b6b8a',
      },
      animation: {
        'spin-slow':  'spin 20s linear infinite',
        'spin-slow-r':'spin 30s linear infinite reverse',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'float':      'floatUp linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(1.6)' },
        },
        floatUp: {
          '0%':   { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%':  { opacity: '0.6' },
          '90%':  { opacity: '0.6' },
          '100%': { transform: 'translateY(-100px) rotate(720deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(ellipse 60% 60% at 70% 50%, rgba(123,47,255,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,229,255,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 30% 30% at 80% 20%, rgba(255,60,110,0.06) 0%, transparent 50%)
        `,
        'grid-lines': `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        'grad-main': 'linear-gradient(135deg, #00e5ff, #7b2fff)',
      },
      boxShadow: {
        'glow-accent':  '0 0 40px rgba(0,229,255,0.15)',
        'glow-accent2': '0 0 40px rgba(123,47,255,0.2)',
        'card':         '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
