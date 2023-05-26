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
              'stone-custom': '#596780'
          },
          gap: {
              '6.5': '26px',
              '10.5': '42px',
              '37': '149px',
          },
          padding: {
              '7.5': '30px',
              '11.5': '46px',
              '13': '51px',
              '13.5': '54px',
              '16.2': '60px',
              '16.5': '62px',
              '17': '66px',
              '17.5': '70px',
              '18': '75px',
              '21': '84px',
              '23': '90px',
              '23.5': '94px',
              '24.5': '101px',
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
              '16.2': '60px',
              '23': '90px',
              '29': '120px',
              '33': '132px',
              '33.5': '134px',
              '46': '180px',
          },
          screens: {
              'sm-custom': '590px',
              'sm-custom-max': {max: '590px'},
              'sm-2-custom': '886px',
              'sm-2-custom-max': {max: '886px'},
              'md-custom': '710px',
              'md-max': {max: '768px'},
              'lg-max': {max: '1024px'},
              'lg-custom': '976px',
              'lg-1.2-custom-max': {max: '1003px'},
              'lg-1.5-custom': '1175px',
              'lg-1.5max': {max: '1175px'},
              'lg-2-custom': '1289px',
              'lg-2.5-custom': '1350px',
              'xl-custom': '1410px',
              'xl-2-custom': '1441px',
              'xl-3-custom-max': {max: '1700px'},
              'xl-custom-max': {max: '1536px'},
          },
          fontSize: {
              '2.5xl': '28px',
          },
          boxShadow: {
              'custom': '4px 8px 24px rgba(36, 107, 253, 0.25)',
              'custom-sm': '0px 12px 16px rgba(33, 33, 33, 0.04)',
          },
          borderRadius: {
              '2.5xl': '20px',
              '4xl': '30px',
          },
          backgroundSize: {
              'size-500': '500% 100%',
          },
          backgroundPosition: {
              'left--40': 'left -220rem',
              'right--40': 'right -220rem',
              'pos-0': '0% 0%',
              'pos-100': '100% 100%',
              'pos-90-66': '90% 66px',
              'pos-90-121': '90% 121px',
          },
          width: {
              '81': '330px',
              '82': '344px',
          },
          flexBasis: {
              '6.75/10': '67.5%',
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

