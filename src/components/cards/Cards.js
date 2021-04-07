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
      style={[
        styles.cardWithOutTextContainer,
        {
          ...boxWithSmallShadow,

          backgroundColor: backgroundColor,

          paddingVertical: paddingVertical,
          paddingHorizontal: paddingHorizontal,
        },
      ]}>
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
    <View style={[styles.cardWithTextContainer, {...boxWithSmallShadow}]}>
      <View>
        <View style={styles.cardWithTextContainerItem}>
          <View>
            <View style={styles.contentOne}>
              <Text
                style={[
                  styles.textTitleStyle,
                  {textDecorationLine: taskCompleted ? 'line-through' : 'none'},
                ]}>
                {taskTitle}
              </Text>
              {!taskCompleted && (
                <View
                  style={[
                    styles.taskCompletedStyle,
                    {
                      backgroundColor: taskDetailsPresent
                        ? colors.purple
                        : colors.pink,
                    },
                  ]}
                />
              )}
            </View>
            <View style={styles.contentTwo}>
              <Icon name="bell" size={fontSize.xxsmall} color={colors.gray} />
              <View style={styles.contentTwoItem}>
                <Text style={styles.startTimeStyle}>{startTime}</Text>
                <Text style={styles.dividerStyle}>-</Text>
                <Text style={styles.endTimeStyle}>{endTime}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={onPressCompletedTask}
            style={[
              styles.completeTaskContainer,
              {
                backgroundColor: taskCompleted ? colors.purple : colors.white,
              },
            ]}>
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
            <Text style={styles.taskDetailsStyle}>{taskDetails}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWithOutTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: borderRadius.medium,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  cardWithTextContainer: {
    padding: padding.xsmall,
    backgroundColor: colors.greyLight,
    borderRadius: borderRadius.xlarge,
  },

  cardWithTextContainerItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  contentOne: {
    display: 'flex',
    flexDirection: 'row',
  },

  textTitleStyle: {
    fontWeight: fontWeight.bold,
    fontSize: fontSize.xsmall,
    marginBottom: margin.xxxsmall,
  },

  taskCompletedStyle: {
    top: 5,
    height: 5,
    width: 5,
    borderRadius: 5,
    marginLeft: margin.mini,
  },

  contentTwo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  contentTwoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
    top: -3,
  },

  startTimeStyle: {
    fontWeight: fontWeight.light,
    fontSize: fontSize.xxxsmall,
    color: colors.gray,
  },

  endTimeStyle: {
    fontSize: fontSize.xxxsmall,
    color: colors.gray,
  },

  dividerStyle: {
    color: colors.gray,
    marginHorizontal: 2,
  },

  completeTaskContainer: {
    borderRadius: borderRadius.round,
    borderWidth: 0.2,
    borderColor: colors.gray,
    height: 20,
    width: 20,
  },

  taskDetailsStyle: {
    marginTop: margin.xxxsmall,
    color: colors.gray,
    fontSize: fontSize.xxxsmall,
  },
});
