import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {
  colors,
  padding,
  fontSize,
  borderRadius,
  boxWithShadow,
} from '../../styles';

export function Footer({addTodoPress}) {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity>
        <Icon name={'home'} color={colors.purple} size={fontSize.small} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={addTodoPress}
        style={[
          styles.footerContainerItem,
          {
            ...boxWithShadow,
          },
        ]}>
        <Icon name={'plus'} color={colors.white} size={fontSize.small} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name={'settings'} color={colors.gray} size={fontSize.small} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 100,
  },

  footerContainerItem: {
    borderWidth: 1,
    borderColor: 'transparent',
    padding: padding.xxxsmall,
    backgroundColor: colors.pink,
    borderRadius: borderRadius.medium,
  },
});
