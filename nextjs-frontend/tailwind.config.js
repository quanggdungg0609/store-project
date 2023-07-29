/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
        'copper-rust': {
          '50': '#fcf3f6',
          '100': '#fae9f0',
          '200': '#f6d4e1',
          '300': '#f2bed1',
          '400': '#e581a3',
          '500': '#d95b83',
          '600': '#c63c60',
          '700': '#ab2b49',
          '800': '#8d273e',
          '900': '#762537',
          '950': '#47101c',
        },
        'pink-pastel':{
          '100':"#F9F5F6",
          '200':"#F8E8EE",
          '300':"#FDCEDF",
          '400':"#F2BED1"
        },
        'milano-red': {
          '50': '#fff1f1',
          '100': '#ffdfdf',
          '200': '#ffc4c4',
          '300': '#ff9b9b',
          '400': '#ff6262',
          '500': '#ff3131',
          '600': '#f01212',
          '700': '#bd0a0a',
          '800': '#a70d0d',
          '900': '#8a1212',
          '950': '#4b0404',
      },
      
     'waikawa-gray': {
      '50': '#f5f6fa',
      '100': '#eaebf4',
      '200': '#d0d4e7',
      '300': '#a6b0d3',
      '400': '#7686ba',
      '500': '#6374ae',
      '600': '#414f88',
      '700': '#36406e',
      '800': '#30395c',
      '900': '#2c324e',
      '950': '#1d2034',
    },
    'apple': {
      '50': '#f5fbf2',
      '100': '#e7f8e0',
      '200': '#d0efc3',
      '300': '#a9e194',
      '400': '#7bca5e',
      '500': '#5fbd3d',
      '600': '#449029',
      '700': '#387124',
      '800': '#2f5a21',
      '900': '#284a1d',
      '950': '#11280b',
    },
    'grad-bg':{
      
    }
  
      
    },
    extend: {
      backgroundImage: {
        
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
