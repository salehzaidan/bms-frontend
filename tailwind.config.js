module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        battery: {
          low: '#e44a00',
          medium: '#f8bd19',
          high: '#6baa01',
        },
      },
      fontFamily: {
        sans: ['InterVariable', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
