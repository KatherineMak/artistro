module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
    },
    colors: {
      black: '#262626',
      white: '#ffffff',
      lightPink: '#FFF5F5',
      gray: '#C7C7C7',
      blueIcon: '#55B9FF',
      aqua: '#73C4FF',
      pinkIcon: '#EAA094',
      pinkBG: '#ea09475',
      yellowIcon: '#F58B1F',
      red: '#D81F26',
      lightRed: '#FFD8CC',
      orange: '#FFB155',
      lightOrange: '#FFCF73',
      violet: '#b3abdb',
      yellow: '#eebd0f',
      beige: ' #FFE7B9',
      blue: '#5295d5',
      blueChoose: '#EEFCFF',
      dull: '#56585D',
      graySecond: '#9D9D9D',
      grayThird: '#BDBDBD',
      grayFourth: '#A4A4A4',
      green: '#5FE15C'
    },
    borderColor:{
      black: "#262626",
      darkGray: '#56585D',
      lightGray: '#C7C7C7',
      lightGraySecond: '#CCCCCC',
      light: '#F4F4F4'
    },
    borderRadius: {
      'large': '30px',
      '50': '50%'
    },
    zIndex: {
      '-1': '-1',
      '-2': '-2',
      '0': '0',
      '1': '1',
      '2': '2',
    },
    fontSize: {
      'xxs': '.2rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      '15px':'0.938rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '28px':'1.75rem',
      '3xl': '1.875rem',
      '35px':'2.188rem',
      '4xl': '2.25rem',
      '40px': '2.5rem',
      '5xl': '3rem',
      '50px': '3.4rem',
      '6xl': '4rem',
      '74px': '4.5rem',
      '7xl': '5rem',
      '90px': '5.625rem',
      '9xl': '6.5rem',
      '120px': '7.5rem',
      '10xl': '10rem'
    },
    boxShadow: {
      normal:  '0px 2px 4px rgba(38, 38, 38, 0.02), 0px 10px 40px rgba(38, 38, 38, 0.05)',
      medium:  '0px 8px 14px rgba(0, 0, 0, 0.07)',
      large:  '0px 4px 94px rgba(0, 0, 0, 0.05)'
    },
    screens: {
        'xs': {'min': '450px'},
        'sm': {'min': '640px'},
        'md': {'min': '768px'},
        'lg': {'min': '1024px'},
        'xl': {'min': '1280px'},
    },
    extend: {
      fontFamily: {
        'mono': 'Amatic SC',
        'noto': 'Noto Sans',
        'sans': 'Montserrat',
        'arial': 'Arial'
      },
      lineHeight: {
        '128px': '8rem'
      }
    },
    
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        }
      })
    }
  ]
}
