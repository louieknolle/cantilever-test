import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    fontFamily: {
      display: ['Poppins'],
      body: ['Poppins'],
    },
  },
  plugins: [],
};
