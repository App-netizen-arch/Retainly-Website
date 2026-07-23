/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
        h3: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        meta: ['0.875rem', { lineHeight: '1.4' }],
      },
      colors: {
        primary: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#D1FAE5',
        },
        secondary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        brand: {
          bg: '#FFFFFF',
          'bg-alt': '#F8FAFC',
          text: '#0F172A',
          'text-muted': '#475569',
          border: '#E2E8F0',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.06)',
        'card-dark': '0 4px 24px rgba(0,0,0,0.4)',
        'card-active': '0 8px 32px rgba(16,185,129,0.12)',
        glass: '0 8px 32px rgba(0,0,0,0.08)',
      },
      backdropBlur: {
        glass: '12px',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'count-up': 'countUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
