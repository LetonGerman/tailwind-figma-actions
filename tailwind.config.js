const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {enabled: true, content: ['./src/*.html']},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        main: '#606c76',
        secondary: '#1a1b22',
        washed: '#B6BCBF',
      },
      colors: {
        main: '#1A1B22',
        'container-gray': '#f5f6f7',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        80: '80px',
        300: '300px',
        900: '900px',
      },
      boxShadow: {
        header: 'inset 0 -1px 0 #D1D2D6',
      },
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '14px',
          },
        ],
        s: [
          '14px',
          {
            lineHeight: '21px',
          },
        ],
        sm: [
          '16px',
          {
            lineHeight: '22px',
          },
        ],
        m: [
          '18px',
          {
            lineHeight: '24px',
          },
        ],
        sl: [
          '20px',
          {
            lineHeight: '26px',
          },
        ],
        l: [
          '22px',
          {
            lineHeight: '26px',
          },
        ],
        xl: [
          '26px',
          {
            lineHeight: '30px',
          },
        ],
        xxl: [
          '30px',
          {
            lineHeight: '34px',
          },
        ],
        xml: [
          '40px',
          {
            lineHeight: '46px',
          },
        ],
      },
      lineHeight: {},
      fontFamily: {
        roboto: ['"Roboto"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        robotoSlab: ['"Roboto Slab"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        sourceSansPro: [
          '"Source Sans Pro"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      gridTemplateColumns: {
        'fr-fr': '1fr 1fr',
        'fr-auto': '1fr auto',
        'fr-auto-fr': '1fr auto 1fr',
        'fr-auto-auto': '1fr auto auto',
        'auto-fr': 'auto 1fr',
        'mx-mx': 'max-content max-content',
      },
      gridTemplateRows: {
        'fr-auto': '1fr auto',
        'fr-auto-auto': '1fr auto auto',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
    },
  },
  plugins: [
    plugin(function ({addComponents}) {
      const components = {
        '.profile-btn': {
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          columnGap: '6px',
          alignItems: 'center',
          padding: '12px 19px',
          border: 'solid #1A1B22 1px',
          borderRadius: '100px',
        },
        '.additional-buttons': {
          display: 'grid',
          justifyItems: 'end',
          gridColumnGap: '33px',
          textAlign: 'center',
          maxWidth: '480px',
        },
        '.nav-item': {
          textDecoration: 'none',
          display: 'grid',
          alignItems: 'center',
          textAlign: 'center',
          '&:hover': {
            cursor: 'pointer',
          },
        },
        '.nav-tab': {
          borderBottom: '3px solid transparent',
          '&:focus': {
            borderBottom: '3px solid #000',
          },
        },
        '.icon': {
          width: '24px',
          height: '24px',
        },
        '.icon img': {
          width: '20px',
          height: '20px',
        },
        '.icon-tooltip': {
          order: '-1',
          height: '38px',
          padding: '0 30px',
          textDecoration: 'none',
          animation: 'fadeOut 0.5s',
        },
        '.card, .card-header, .card-content': {
          position: 'relative',
          display: 'grid',
          maxWidth: '400px',
          backgroundColor: '#fff',
        },
      };

      addComponents(components);
    }),
  ],
};
