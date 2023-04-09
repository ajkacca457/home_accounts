module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  safelist: [],
  theme: {		
    fontFamily: {
      body: ['Barlow-Regular', 'sans-serif'], 
      heading: ['Barlow-Bold', 'sans-serif'], 
    },
    screens: {
      //screen dosnt work with max width in react
      'sm': '640px',
      'md':'768px',
      'lg':'1024px'
    },
  extend:{
    maxWidth:{
      'standard':'1200px'
    }
  }

  },
  plugins: [],
}
