module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1150px',
     },
     container:{
      padding:'1rem',
      center:true
     },
    extend: {
      colors:{
        'main':'#000',
        'sub':'#fff',
        'supergent':'#3bdb8f',
        'len':'#0078ff',
        'palmtree':'#ED7125'
       },
    },
  },
  plugins: [

  ],
}