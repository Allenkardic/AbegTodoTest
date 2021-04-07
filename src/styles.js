import {Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  white: '#ffffff',
  greyLight: '#f8f8fa',
  purple: '#5b3ea3',
  pink: '#fe92a0',
  gray: '#767486',
  black: 'black',
};

export const padding = {
  mini: 4,
  xxxsmall: 6,
  xxsmall: 12,
  xsmall: 24,
  small: 32,
  medium: 48,
  large: 64,
  xlarge: 96,
  xxlarge: 128,
};

export const margin = {
  mini: 4,
  xxxsmall: 6,
  xxsmall: 12,
  xsmall: 24,
  small: 32,
  medium: 48,
  large: 64,
  xlarge: 96,
  xxlarge: 128,
  xxxlarge: 170,
};

export const fontSize = {
  xxxsmall: 12,
  xxsmall: 14,
  xsmall: 16,
  small: 18,
  medium: 20,
  large: 30,
  xlarge: 36,
  xxlarge: 48,
  xxxlarge: 64,
  title: 76,
};

export const fontWeight = {
  bold: '600',
  regular: '400',
  light: '300',
};

export const borderRadius = {
  small: 5,
  medium: 10,
  large: 15,
  xlarge: 20,
  round: 50,
};

export const lineHeight = {
  small: 1,
  medium: 1.5,
  large: 2,
};

export const btn = {
  boxShadow: '0 4px hsla(0, 0%, 0.2)',
  borderRadius: 4,
  backgroundColor: 'red',
};

export const boxWithSmallShadow = {
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
};

export const boxWithShadow = {
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 1,
};

export const fontFamily = {
  primary: 'SF UI Display',
};
