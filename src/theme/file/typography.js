import palette from './palette';

const typography = {
  fontFamily: ['TextBold', 'TextMedium', 'TextRegular', 'sans-serif', 'Roboto', 'Helvetica', 'Arial'].join(','),
  fontWeightRegular: 400, // normal
  fontWeightMedium: 500, // 500
  fontWeightBold: 700, // bold
  h1: {
    fontFamily: 'TextBold',
    textTransform: 'uppercase',
  },
  h2: {
    fontFamily: 'TextBold',
    // fontSize: '18px',
  },
  h3: {
    fontFamily: 'TextMedium',
    textTransform: 'uppercase',
  },
  h4: {
    fontFamily: 'TextMedium, sans-serif',
    fontSize: 17,
  },
  h5: {
    fontFamily: 'TextRegular',
    fontSize: 18,
    fontWeight: 600,
  },
  h6: {
    fontFamily: 'TextRegular',
  },
  subtitle1: {
    fontFamily: 'TextBold',
    fontWeight: 600,
  },
  subtitle2: {
    fontFamily: 'TextMedium',
    lineHeight: 1.5,
  },
  body1: {
    fontFamily: 'TextRegular',
    fontSize: 14,
  },
  body2: {
    fontFamily: 'TextRegular',
    fontSize: 13,
    color: palette.common.black,
  },
  button: {
    fontFamily: 'TextRegular',
  },
  caption: {
    fontFamily: 'TextRegular',
  },
  overline: {
    fontFamily: 'TextRegular',
  },
  location: {
    fontFamily: 'TextRegular',
    fontSize: 13,
  },
  description: {
    fontFamily: 'TextMedium',
  },
  jodit: {
    'TextRegular,Roboto,Arial,sans-serif': 'Hyundai Sans Regular',
    'TextMedium,Roboto,Arial,sans-serif': 'Hyundai Sans Medium',
    'TextBold,Roboto,Arial,sans-serif': 'Hyundai Sans Bold',
  },
};

export default typography;
