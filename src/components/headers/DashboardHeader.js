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
        <Text
          style={{
            fontWeight: fontWeight.regular,
            fontSize: fontSize.medium,
            color: colors.gray,
            marginBottom: margin.mini,
          }}>
          Hello,
        </Text>
        <Text
          style={{
            fontWeight: fontWeight.bold,
            fontSize: fontSize.medium,
            color: colors.black,
          }}>
          {name}
        </Text>
      </View>
      <View>
        <Image
          style={{
            width: 40,
            height: 40,
            backgroundColor: colors.purple,
            borderRadius: borderRadius.large,
          }}
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
});
