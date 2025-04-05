// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scrollX: 'scrollX 40s linear infinite',
      },
    },
  },
  plugins: [],
}
