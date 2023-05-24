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
              'gray-md-custom': '#E8E8E8',
              'gray-light-custom': '#EDEEEF',
              'white-custom': '#E5E5E5',
              'rose-custom': '#FF7E7E',
              'rose-light-custom': '#ffe6e6',
          },
          gap: {
              '10.5': '42px',
              '6.5': '26px',
          },
          padding: {
              '11.5': '46px',
              '13': '51px',
              '13.5': '54px',
              '16.2': '60px',
              '16.5': '62px',
              '17': '66px',
              '17.5': '70px',
              '18': '75px',
              '21': '84px',
              '23.5': '94px',
              '29': '119px',
              '38': '156px',
              '41': '164px',
              '46': '180px',
              '47': '187px',
          },
          margin: {
              '5.5': '21px',
              '8.3': '30px',
              '8.5': '34px',
              '13': '51px',
              '29': '120px',
              '33': '132px',
              '33.5': '134px',
              '46': '180px',
          },
          screens: {
              'sm-custom': '590px',
              'sm-2-custom': '886px',
              'lg-custom': '976px',
              'lg-2-custom': '1289px',
              'xl-custom': '1410px',
              'xl-2-custom': '1441px',
          },
          fontSize: {
              '2.5xl': '28px',
          },
          boxShadow: {
              'custom': '4px 8px 24px rgba(36, 107, 253, 0.25)',
              'custom-sm': '0px 12px 16px rgba(33, 33, 33, 0.04)',
          },
          borderRadius: {
              '4xl': '30px',
          },
          backgroundSize: {
              'size-500': '500% 100%',
          },
          backgroundPosition: {
              'left--40': 'left -220rem',
              'pos-0': '0% 0%',
              'pos-100': '100% 100%',
          },
          width: {
              '81': '330px',
          }
      },
      container: {
          center: true,
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

