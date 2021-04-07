import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  colors,
  fontSize,
  fontWeight,
  borderRadius,
  boxWithShadow,
} from '../../styles';

export function Button({backgroundColor, title, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...boxWithShadow,
        backgroundColor: backgroundColor,
        paddingVertical: 16,
        borderRadius: borderRadius.medium,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: colors.white,
          fontWeight: fontWeight.bold,
          fontSize: fontSize.xxsmall,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function ButtonWithIcon({
  onPress,
  title,

  imageSrc,
  style,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View
        style={{
          width: '15%',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={imageSrc}
        />
      </View>
      <Text
        style={{
          width: '70%',
          textAlign: 'center',

          fontWeight: fontWeight.bold,
          fontSize: fontSize.xxsmall,
        }}>
        {title}
      </Text>
      <Text
        style={{
          width: '15%',
        }}></Text>
    </TouchableOpacity>
  );
}
