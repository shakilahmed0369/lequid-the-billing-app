module.exports = {
  dpurge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'default' : ['Ubuntu'],
        'secondary' : ['Comfortaa','cursive']
      },
      colors: {
        'primary' : '#df3030',
        'secondary' : '#fffaf4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
