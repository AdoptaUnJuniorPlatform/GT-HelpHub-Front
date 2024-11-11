/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'violeta-20': '#7166D233',
        'violeta-100': '#7166D2',
        'pink-100': '#D2298E',
        'celeste-20': '#496CEB',
        'celeste-100': '#496CEB',
        'blue-gray-50': '#ECEFF1',
        'blue-gray-100': '#CFD8DC',
        'blue-gray-300': '#90A4AE',
        'blue-gray-500': '#607D8B',
        'blue-primary': '#1945E3',
        'green-10': '#43A047',
        'gray-900': '#212121',
        'black-6': '#AEAEAE1A',
        'black-50': '#B8B8B8',
        'black-80': '#696868',
        'blue-gray': '#90A4AE',
        'neutral-gray': '#FAFAFA',
        'neutral-black': '#434242',
      },
      fontFamily: {
        'roboto': ["Roboto"],
        'poppins': ["Poppins"]
      }
    },
  },
  plugins: [],
}

