module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {
      backgroundImage: theme => ({
        'inazuma': "url('/inazuma.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
