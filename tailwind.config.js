/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./source/templates/*.html",
      './source/templates/components/*.html',
      './source/static/css/*.css',
      './source/*.js',
      './source/static/js/*.js',
  ],
  theme: {
      extend: {
          fontFamily: {
              'raleway': ["Raleway-Regular", 'sans-serif'],
              'montserrat': ["Montserrat-Regular", 'sans-serif'],
              'montserrat-light': ["Montserrat-Light", 'sans-serif'],
              'montserrat-medium': ["Montserrat-Medium", 'sans-serif'],
              'montserrat-semibold': ["Montserrat-SemiBold", 'sans-serif'],
              'montserrat-bold': ["Montserrat-Bold", 'sans-serif'],
          },
          colors: {
              'black-custom': '#1F2227',
              'lime-custom': '#85C83E',
              'lime-light-custom': '#EAFFD8',
              'gray-custom': '#808080',
              'gray-light-custom': '#EDEEEF',
              'white-custom': '#E5E5E5',
              'rose-custom': '#FF7E7E',
          },
          padding: {
              '46': '180px',
              '13': '51px',
              '21': '84px',

          },
          screens: {
            'xl-custom': '1410px',
          },
          boxShadow: {
              'custom': '4px 8px 24px rgba(36, 107, 253, 0.25)'
          },
      },
      container: {
          center: true,
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

