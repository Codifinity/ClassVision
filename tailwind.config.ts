import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway-black': ['raleway-black'],
        'raleway-bold': ['raleway-bold'],
        'raleway-extrabold': ['raleway-extrabold'],
        'raleway-extralight': ['raleway-extralight'],
        'raleway-light': ['raleway-light'],
        'raleway-medium': ['raleway-medium'],
        'raleway-regular': ['raleway-regular'],
        'raleway-semibold': ['raleway-semibold'],
        'raleway-thin': ['raleway-thin']
      },
      colors: {
        'dark-blue': '#00567B',
        'light-blue': '#00BBE4',
        'light-gray': '#F9F9F9',
        blue: '#00A7EE',
        'custom-dark': '#2D2D2D'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
};
export default config;
