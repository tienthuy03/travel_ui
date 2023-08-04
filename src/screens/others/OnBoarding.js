import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import color from '../../assets/colors';

const OnBoarding = (props) => {


  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image style={styles.imgBrLeft}
          source={require('../../assets/images/imgLeft.png')} />
        <Image style={styles.imgBrRight}
          source={require('../../assets/images/imgRight.png')} />
      </View>

      <View style={styles.textHeader}>
        <Text style={styles.textTravel}>Travel Now</Text>
        <Text style={styles.textWe}>Welcome</Text>
      </View>

      <Pressable style={styles.bottom}
        onPress={() => navigation.navigate('Login')}>
        <View style={styles.text}>
          <Text style={styles.textSignUp}>Swip-up to start</Text>
        </View>
        <View style={styles.imgPlane}>
          <Image style={styles.icPlane}
            source={require('../../assets/images/plane.png')} />
        </View>

      </Pressable>

    </View>
  )
}

export default OnBoarding;

const styles = StyleSheet.create({
  textSignUp: {
    width: 100,
    height: 18,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17.74,
    textAlign: 'center',
    color: color.black,
    left: 60,
  },
  imgPlane: {
    backgroundColor: color.white,
    width: 105,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    width: 320,
    height: 56,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: color.primaryColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    top: 280,
    left: 20,
    elevation: 10
  },
  textTravel: {
    fontWeight: '500',
    fontSize: 48,
    lineHeight: 70.94,
    textAlign: 'center',
    color:color.primaryColor
  },
  textWe: {
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 70.94,
    textAlign: 'center',
    color: color.black,
  },
  textHeader: {
    width: 280,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    left: 40,
    top: 30,
  },
  imgBrRight: {
    left: 190,
  },
  Image: {
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    padding: 24
  },
})