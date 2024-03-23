/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: ({ theme }) => ({
        ...theme.colors,
        primary: theme.colors.green['500'],
      }),
    },
  },
  plugins: [],
}
