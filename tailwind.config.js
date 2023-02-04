/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
     extend:{ 
      colors:{
        'violet':'#674baf',
        'Soft-magenta': '#e882e8'
      },
    },
      container:{
        center:true,
      },
      fontFamily:{
        'poppins':['Poppins, sans-serif'],
        'openSans' : ['Open Sans, sans-serif']
      },
      backgroundImage:{
        'desktop': 'url(./images/bg-desktop.svg)',
        'mobile':'url(./images/bg-mobile.svg)'
      }
  },
  plugins: [],
}
