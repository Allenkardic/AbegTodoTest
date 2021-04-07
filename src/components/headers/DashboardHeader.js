import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  colors,
  padding,
  margin,
  fontSize,
  fontWeight,
  borderRadius,
} from '../../styles';
import Icon from 'react-native-vector-icons/Feather';

export function DashboardHeader({name}) {
  return (
    <View style={[styles.header, {paddingHorizontal: padding.xsmall}]}>
      <View>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.unmText}>{name}</Text>
      </View>
      <View>
        <Image
          style={styles.imgStyle}
          source={require('../../assets/images/appImage.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: margin.xxsmall,
  },

  helloText: {
    fontWeight: fontWeight.regular,
    fontSize: fontSize.medium,
    color: colors.gray,
    marginBottom: margin.mini,
  },

  unmText: {
    fontWeight: fontWeight.bold,
    fontSize: fontSize.medium,
    color: colors.black,
  },

  imgStyle: {
    width: 40,
    height: 40,
    backgroundColor: colors.purple,
    borderRadius: borderRadius.large,
  },
});
