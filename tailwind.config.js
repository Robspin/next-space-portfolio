module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        techWordAnimation: {
          '0%': {
            transform: 'scale(0.8)'
          },
          '0%, 100%': {
            opacity: 0,
          },
          '15%': {
            opacity: 100,
            transform: 'translateY(0) scale(1)'
          },
          '100%': {
            transform: 'translateY(100px)'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
