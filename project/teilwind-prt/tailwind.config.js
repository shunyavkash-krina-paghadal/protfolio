/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        'mono': ['ui-monospace', 'SFMono-Regular',],
        custom: ["Nunito", 'sans-serif'],
      },
      colors: {

        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'blue': '#4f46e5',
        'gray': '#edecfc',
        'light-gray': '#94a8c5',
        'dark-gray': ' rgb(249 250 251 / 1)',
        'orange': '#fbbf24',
        'dark-blue': 'rgb(25 33 50 / 1)',
        'light-white': 'rgb(31 41 55 / 1)',
        'gray-theme': ' rgb(209 213 219 / 1)',
        'red': '#dc2626',
        'light-blue': 'rgb(31 41 55 / 1)',
        'opaycity':'rgba(0, 0, 0, 0.408)',
        
      },
    },
  },
  plugins: [],
}

