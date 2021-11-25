module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      extend: {
        fontFamily: {
          Josefin: ['Josefin Sans', "sans-serif"],
        },
      },
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
