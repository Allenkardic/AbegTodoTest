import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {padding, borderRadius, colors, margin} from '../../styles';

export default function BottomSheet({refRBSheet, title, children}) {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={650}
        customStyles={{
          container: {
            borderRadius: borderRadius.round,
            opacity: 1,
          },

          draggableIcon: {
            opacity: 1,
            width: 120,
            backgroundColor: '#DADBDC',
            zIndex: 3,
          },
        }}
        dragFromTopOnly={true}>
        <View style={styles.titleStyle}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View
          style={{paddingHorizontal: padding.xsmall, marginTop: margin.small}}>
          {children}
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 10,
    width: 270,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
