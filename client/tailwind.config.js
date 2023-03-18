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
      'small': '640px',
      'medium':'1200px'
    },
  extend:{
    maxWidth:{
      'standard':'1200px'
    }
  }

  },
  plugins: [],
}
