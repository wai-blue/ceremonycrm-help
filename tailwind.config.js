/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./book/**/*.{html,js,twig,tsx}",
    "./template/**/*.{html,js,twig,tsx}",
  ],
  // safelist: [
  //   'adios-lookup__indicator',
  //   'adios-lookup__control',
  //   'adios-lookup__input-container',
  //   'adios-lookup__value-container',
  //   'adios-lookup__input',
  //   {
  //     pattern: /grid-cols-+/,
  //   },
  // ],
  theme: {
    // colors: {
    //   'white': '#1fb6ff',
    //   'primary': '#59aad3',
    //   'secondary': '#ff9800',
    //   // 'purple': '#7e5bef',
    //   // 'pink': '#ff49db',
    //   // 'orange': '#ff7849',
    //   // 'green': '#13ce66',
    //   // 'yellow': '#ffc82c',
    //   // 'gray-dark': '#273444',
    //   // 'gray': '#8492a6',
    //   // 'gray-light': '#d3dce6',
    // },
    fontFamily: {
      sans: ['tahoma'],
      serif: ['times new roman'],
      logo: ['Fredoka-Regular', 'sans-serif'],
    },
    extend: {
      fontSize: {
        base: '11pt',
        lg: '1.2rem',
        xl: '1.5rem',
        '2xl': '1.7rem',
        '3xl': '2rem',
      },
      colors: {
        //'primary': '#884aaa', // povodna fialova
        'primary': '#008000',
        // 'secondary': '#ff9800', // povodna oranzova
        'secondary': '#7FB562', // povodna oranzova
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    // require('preline/plugin'),
  ],
}

