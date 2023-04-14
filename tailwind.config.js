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
              'lime-10': '#EAFFD8',
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

