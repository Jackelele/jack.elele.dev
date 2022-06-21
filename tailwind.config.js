module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },

      colors: {
        'text-link': 'var(--text-link)',
        'text-color': 'var(--text-color)',
        background: 'var(--background)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
