module.exports = {
  content: [
    "./stitch_assets/**/code.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#195de6",
        "background-light": "#f6f6f8",
        "background-dark": "#111621"
      },
      fontFamily: {
        display: ['Inter', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.75rem'
      }
    }
  },
  plugins: []
}