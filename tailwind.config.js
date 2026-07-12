export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        main: '#050505',
        card: '#111111',
        accent: '#d97706',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateY(-10deg) rotateX(5deg)' },
          '50%': { transform: 'translateY(-20px) rotateY(-10deg) rotateX(5deg)' },
        }
      }
    }
  },
  plugins: [],
}