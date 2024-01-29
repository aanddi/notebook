/** @type {import('tailwindcss').Config} */

const colors = {
  white: '#FFF',
  black: '#232323',
  grey: '#C0C0C0',

  background: '#21252B',
  content: '#282C34',

  primary: '#D77F23',
}


export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
   
    extend: {
      colors,
      spacing: {
        '1200': '1200px',
        '400': '400px'
      },
      borderRadius: {
        "5xl": "5rem",
      },
    }
  },
  plugins: []
}
