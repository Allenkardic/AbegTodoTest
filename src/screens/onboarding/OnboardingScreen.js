import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  colors,
  padding,
  margin,
  fontSize,
  fontWeight,
  borderRadius,
  boxWithSmallShadow,
  boxWithShadow,
} from '../../styles';

import {ButtonWithIcon} from '../../components/buttons/Buttons';

export default function OnboardingScreen(props) {
  const [userNameValue, setUserNameValue] = React.useState('');
  console.log(userNameValue, 'kkkk');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Swiper
        showsPagination={true}
        showsButtons={false}
        style={{backgroundColor: 'white', height: '65%'}}
        dot={
          <View
            style={{
              backgroundColor: '#f3f3f3',
              width: 8,
              height: 8,
              borderRadius: 4,

              marginLeft: 3,
              marginRight: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: colors.pink,
              width: 8,
              height: 8,
              borderRadius: 4,

              marginLeft: 3,
              marginRight: 3,
            }}
          />
        }>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,

            justifyContent: 'center',

            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 200,
              height: 200,
              backgroundColor: colors.purple,
              borderRadius: borderRadius.large,
            }}
            source={require('../../assets/images/phone.png')}
          />

          <Text
            style={{
              color: colors.black,
              fontWeight: fontWeight.bold,
              fontSize: fontSize.medium,
              marginBottom: margin.xsmall,
              marginTop: margin.medium,
            }}>
            Organize your works
          </Text>
          <Text
            style={{
              color: colors.gray,
              fontWeight: fontWeight.light,
              fontSize: fontSize.xxsmall,
              marginBottom: margin.xxxsmall,
            }}>
            Let's organise your work with priority
          </Text>
          <Text
            style={{
              color: colors.gray,
              fontWeight: fontWeight.light,
              fontSize: fontSize.xxsmall,
            }}>
            and do everything without stress
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,

            justifyContent: 'center',

            alignItems: 'center',

            paddingHorizontal: padding.xsmall,
          }}>
          <View style={styles.sheetContainer}>
            <Text style={styles.inputHelper}>Enter user name</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setUserNameValue(text)}
              value={userNameValue}
              placeholder="User name"
              keyboardType="default"
            />
          </View>
        </View>
      </Swiper>

      <View
        style={{
          height: '35%',
          backgroundColor: 'white',
          paddingHorizontal: padding.xsmall,
        }}>
        <View style={{marginBottom: margin.xsmall, marginTop: margin.xsmall}}>
          <ButtonWithIcon
            style={[
              {
                paddingVertical: 16,
                borderRadius: borderRadius.medium,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.greyLight,
              },
            ]}
            onPress={() =>
              props.navigation.navigate('HomeScreen', {
                unm: userNameValue,
              })
            }
            title={'Continue with Facebook'}
            imageSrc={require('../../assets/images/facebook.png')}
          />
        </View>

        <View style={{marginBottom: margin.xsmall}}>
          <ButtonWithIcon
            style={[
              {
                paddingVertical: 16,
                borderRadius: borderRadius.medium,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.greyLight,
              },
            ]}
            onPress={() =>
              props.navigation.navigate('HomeScreen', {
                unm: userNameValue,
              })
            }
            title={'Continue with Google'}
            imageSrc={require('../../assets/images/google.png')}
          />
        </View>

        <View style={{marginBottom: margin.xsmall}}>
          <ButtonWithIcon
            style={[
              {
                ...boxWithShadow,
                paddingVertical: 16,
                borderRadius: borderRadius.medium,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.greyLight,
              },
            ]}
            onPress={() =>
              props.navigation.navigate('HomeScreen', {
                unm: userNameValue,
              })
            }
            title={'Continue with Email'}
            imageSrc={require('../../assets/images/email.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheetContainer: {
    width: '100%',
    marginBottom: margin.small,
  },

  inputHelper: {
    color: colors.gray,
    fontSize: fontSize.xxsmall,
    fontWeight: fontWeight.bold,
    marginBottom: margin.xxsmall,
  },
  input: {
    ...boxWithSmallShadow,
    paddingLeft: padding.xxsmall,
    height: 50,
    borderWidth: 0.1,
    borderColor: colors.gray,
    backgroundColor: colors.greyLight,
    color: colors.gray,
    fontSize: fontSize.xxsmall,
    borderRadius: borderRadius.medium,
  },
});
