const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontSize: {
      'xs' : ['14px','14px'],
      sm : ['17px','17px'],
      base: ['20px','20px'],
      'baseplus' :  ['23px','23px'],
      lg: ['25px','25px'],
      'lgplus' :  ['30px','30px'],
      xl : ['36px','36px'],
      'xlplus' : ['40px','40px'],
      '2xl': ['50px','50px'],
      '2xlplus': ['61px','61px'],
    },
    screens: {
      'xs': '520px',
      'sm': '640px',
      'smplus': '680px',
      'md': '768px',
      'mdplus': '920px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#18181b',
        'action': '#42cbf5',
      },
      keyframes :{},
      animation: {},
    },
  },
  plugins: [],
};