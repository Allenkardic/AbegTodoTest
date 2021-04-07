import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  colors,
  fontSize,
  fontWeight,
  borderRadius,
  boxWithShadow,
} from '../../styles';

export function Button({title, onPress, backgroundColor}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.normalBtnContainer,
        {...boxWithShadow, backgroundColor: backgroundColor},
      ]}>
      <Text style={styles.normalBtnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonWithIcon({onPress, title, imageSrc, style}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.btnItem}>
        <Image style={styles.imgStyle} source={imageSrc} />
      </View>
      <Text style={styles.btnText}>{title}</Text>
      <Text style={styles.btnText2} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  normalBtnContainer: {
    paddingVertical: 16,
    borderRadius: borderRadius.medium,
  },

  normalBtnText: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.xxsmall,
  },

  btnItem: {
    width: '15%',
    alignItems: 'center',
  },
  imgStyle: {
    width: 20,
    height: 20,
  },
  btnText: {
    width: '70%',
    textAlign: 'center',

    fontWeight: fontWeight.bold,
    fontSize: fontSize.xxsmall,
  },
  btnText2: {
    width: '15%',
  },
});
