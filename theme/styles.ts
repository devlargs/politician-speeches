// export const reactSelectStyles = {
//   menu: (provided: CSSObject): CSSObject => ({
//     ...provided,
//     marginTop: 5,
//   }),
//   control: (provided: CSSObject): CSSObject => {
//     return {
//       ...provided,
//       height: styleDefaults.formHeight,
//       border: 'none',
//       boxShadow: 'none',
//     };
//   },
//   indicatorsContainer: (provided: CSSObject): CSSObject => ({
//     ...provided,
//     display: 'none',
//   }),
//   valueContainer: (provided: CSSObject): CSSObject => ({
//     ...provided,
//     padding: 13,
//     fontSize: '1rem',
//   }),
// };

const globalStyles = {
  global: {
    'html, body': {
      scrollBehaviour: 'smooth',
    },
    '#nprogress': {
      pointerEvents: 'none',
    },
    '#nprogress .bar': {
      background: 'white',
      position: 'fixed',
      zIndex: 9999,
      top: 0,
      left: 0,
      width: '100%',
      height: '0.125rem',
    },
    '#nprogress .peg': {
      display: 'block',
      position: 'absolute',
      right: '0rem',
      width: '6.25rem',
      height: '100%',
      boxShadow: '0 0 0.625rem white, 0 0 0.313rem white',
      opacity: 1,
      WebkitTransform: 'rotate(3deg) translate(0rem, -0.25rem)',
      msTransform: 'rotate(3deg) translate(0rem, -0.25rem)',
      transform: 'rotate(3deg) translate(0rem, -0.25rem)',
    },
    '#nprogress .spinner': {
      display: 'block',
      position: 'fixed',
      zIndex: 9999,
      top: '0.938rem',
      right: '0.938rem',
    },
    '#nprogress .spinner-icon': {
      width: '1.125rem',
      height: '1.125rem',
      boxSizing: 'border-box',
      border: 'solid 0.125rem transparent',
      borderTopColor: 'white',
      borderLeftColor: 'white',
      borderRadius: '50%',
      WebkitAnimation: 'nprogress-spinner 400ms linear infinite',
      animation: 'nprogress-spinner 400ms linear infinite',
    },
    '.nprogress-custom-parent': {
      overflow: 'hidden',
      position: 'relative',
    },
    '.nprogress-custom-parent #nprogress .spinner': {
      position: 'absolute',
    },
    '.nprogress-custom-parent #nprogress .bar': {
      position: 'absolute',
    },

    '@-webkit-keyframes nprogress-spinner': {
      '0%': {
        WebkitTransform: 'rotate(0deg)',
      },
      '100%': {
        WebkitTransform: 'rotate(360deg)',
      },
    },
    '@keyframes nprogress-spinner': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    // Below is a quick but dirty solution on the irritating blue outline border when the element gets focused
    // Reference: https://github.com/chakra-ui/chakra-ui/issues/708
    '*:focus': {
      boxShadow: 'none !important',
    },
    '.ckeditorContent': {
      background: 'white',
      border: '1px solid #F1F1F1',
      marginTop: '-5px',
      borderBottomRightRadius: '8px',
      borderBottomLeftRadius: '8px',
      padding: '0 20px',
    },
    '.ckeditorContent h1': {
      fontSize: '32pt',
    },
    '.ckeditorContent h2': {
      fontSize: '26pt',
    },
    '.ckeditorContent h3': {
      fontSize: '22pt',
    },
    '.ckeditorContent h4': {
      fontSize: '20pt',
    },
    '.ckeditorContent h5': {
      fontSize: '18pt',
    },
    '.ckeditorContent h6': {
      fontSize: '14pt',
    },
    '.transcript': {
      marginTop: 10,
    },
    '.transcript h1': {
      fontSize: '32pt',
    },
    '.transcript h2': {
      fontSize: '26pt',
    },
    '.transcript h3': {
      fontSize: '22pt',
    },
    '.transcript h4': {
      fontSize: '20pt',
    },
    '.transcript h5': {
      fontSize: '18pt',
    },
    '.transcript h6': {
      fontSize: '14pt',
    },
    '.transcript p': {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  },
};

export default globalStyles;
