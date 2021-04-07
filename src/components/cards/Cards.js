import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  colors,
  padding,
  margin,
  fontSize,
  fontWeight,
  borderRadius,
  boxWithSmallShadow,
  fontFamily,
} from '../../styles';
import Icon from 'react-native-vector-icons/Feather';

export function CardWithText({
  textColor,
  textFontSize,
  paddingHorizontal,
  paddingVertical,
  iconName,
  backgroundColor,
  iconPresent,
  title,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...boxWithSmallShadow,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: backgroundColor,
        alignSelf: 'flex-start',
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
        borderRadius: borderRadius.medium,
        borderWidth: 1,
        borderColor: 'transparent',
      }}>
      {iconPresent && (
        <View style={{marginRight: margin.xxxsmall}}>
          <Icon name={iconName} color={colors.black} size={fontSize.small} />
        </View>
      )}
      <Text
        style={{
          color: textColor,
          fontSize: textFontSize,
          fontWeight: fontWeight.bold,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function TaskCard({
  onPressCompletedTask,
  taskTitle,
  startTime,
  endTime,
  taskCompleted,
  taskDetailsPresent,
  taskDetails,
}) {
  return (
    <View
      style={{
        ...boxWithSmallShadow,
        padding: padding.xsmall,
        backgroundColor: colors.greyLight,
        borderRadius: borderRadius.xlarge,
      }}>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  textDecorationLine: taskCompleted ? 'line-through' : 'none',
                  fontWeight: fontWeight.bold,
                  fontSize: fontSize.xsmall,
                  marginBottom: margin.xxxsmall,
                }}>
                {taskTitle}
              </Text>
              {!taskCompleted && (
                <View
                  style={{
                    top: 5,
                    height: 5,
                    width: 5,
                    borderRadius: 5,
                    backgroundColor: taskDetailsPresent
                      ? colors.purple
                      : colors.pink,
                    marginLeft: margin.mini,
                  }}
                />
              )}
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <Icon name="bell" size={fontSize.xxsmall} color={colors.gray} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 2,
                  top: -3,
                }}>
                <Text
                  style={{
                    fontWeight: fontWeight.light,
                    fontSize: fontSize.xxxsmall,
                    color: colors.gray,
                  }}>
                  {startTime}
                </Text>
                <Text
                  style={{
                    color: colors.gray,
                    marginHorizontal: 2,
                  }}>
                  -
                </Text>
                <Text style={{fontSize: fontSize.xxxsmall, color: colors.gray}}>
                  {endTime}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={onPressCompletedTask}
            style={{
              borderRadius: borderRadius.round,
              borderWidth: 0.2,
              borderColor: colors.gray,
              height: 20,
              width: 20,
              //   padding: 2,
              backgroundColor: taskCompleted ? colors.purple : colors.white,
            }}>
            {taskCompleted && (
              <Icon
                style={{top: 3, left: 3}}
                name="check"
                size={fontSize.xxsmall}
                color={colors.white}
              />
            )}
          </TouchableOpacity>
        </View>
        {taskDetailsPresent && (
          <View>
            <Text
              style={{
                marginTop: margin.xxxsmall,
                color: colors.gray,
                fontSize: fontSize.xxxsmall,
              }}>
              {taskDetails}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
