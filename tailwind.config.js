/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        navy: '#0B1D3A',
        'navy-mid': '#162B52',
        accent: '#1A6BF0',
        'accent-light': '#4D90F5',
        'accent-bg': '#EBF1FE',
        green: '#0FA96B',
        'green-bg': '#E6F7EF',
        sand: '#F7F5F0',
        border: '#E4E1D9',
        'text-muted': '#5A6880',
        'text-soft': '#8A96A8',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '22px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
