// import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import color from '../../../../contains/color'

// const Profile = () => {
//   //personnalinfo la bien o ben reducers dc gan cho info
//   const info = useSelector((state) => state.persionalInfo)

//   return (
//     <View>
//       <Text>{info.email}</Text>
//     </View>
//   )
// }

// export default Profile

// const styles = StyleSheet.create({

//   inputText: {
//     fontWeight: '500',
//     fontSize: 14,
//     lineHeight: 23.8,
//     color: color.textHint,
//     paddingLeft: 64,
//     borderRadius: 20,
//     margin: 40,
//     padding: 10,
//     backgroundColor: "white"
//   },
// })
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import color from '../../../../contains/color'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image style={styles.imgAvatar}
          source={require('../../../../../../assets/images/icCam.png')} />
      </View>
      <View style={styles.information}>
        <Text style={styles.textName}>Travel Now</Text>
        <Text style={styles.textEmail}>travelnow@gmail.com</Text>
      </View>
      <View style={styles.options}>
        <View style={styles.booking}>
          <Text style={styles.textBooking}>Profile</Text>
          <Image style={styles.imgRight}
            source={require('../../../../../../assets/images/right.png')} />
        </View>
        <View style={styles.booking}>
          <Text style={styles.textBooking}>My Booking</Text>
          <Image style={styles.imgRight}
            source={require('../../../../../../assets/images/right.png')} />
        </View>
        <View style={styles.booking}>
          <View style={styles.content}>
            <Image style={styles.imgOption}
              source={require('../../../../../../assets/images/payment.png')} />
            <Text style={styles.textOption}>Payment</Text>
          </View>
          <Image style={styles.imgRight}
            source={require('../../../../../../assets/images/right.png')} />
        </View>
        <View style={styles.booking}>
          <View style={styles.content}>
            <Image style={styles.imgOption}
              source={require('../../../../../../assets/images/bellBlue.png')} />
            <Text style={styles.textOption}>Notification</Text>
          </View>
          <Image style={styles.imgRight}
            source={require('../../../../../../assets/images/right.png')} />
        </View>
        <View style={styles.booking}>
          <View style={styles.content}>
            <Image style={styles.imgOption}
              source={require('../../../../../../assets/images/security.png')} />
            <Text style={styles.textOption}>Security</Text>
          </View>
          <Image style={styles.imgRight}
            source={require('../../../../../../assets/images/right.png')} />
        </View>
          <View style={styles.booking}>
          <View style={styles.content}>
            <Image style={styles.imgOption}
              source={require('../../../../../../assets/images/language.png')} />
            <Text style={styles.textOption}>Language</Text>
          </View>
          <Image style={styles.imgRight}
            source={require('../../../../../../assets/images/right.png')} />
        </View>
        <View style={styles.booking}>
          <View style={styles.content}>
            <Image style={styles.imgOption}
              source={require('../../../../../../assets/images/help.png')} />
            <Text style={styles.textOption}>Help Center</Text>
          </View>
          <Image style={styles.imgRight}
            source={require('../../../../../../assets/images/right.png')} />
        </View>
        <View style={styles.booking}>
          <View style={styles.content}>
            <Image style={styles.imgOption}
              source={require('../../../../../../assets/images/logout.png')} />
            <Text style={styles.textOption}>Log out</Text>
          </View>
          <Image style={styles.imgRight}
            source={require('../../../../../../assets/images/right.png')} />
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  imgOption: {
    width: 24,
    height: 24
  },
  textOption: {
    fontSize: 20,
    fontWeight: '400',
    color: color.textHint,
    left: 26
  },
  content: {
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textBooking: {
    fontSize: 20,
    fontWeight: '400',
    color: color.textHint,
    left: 48
  },
  booking: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  options: {
    width: '100%',
    top: 180
  },
  textEmail: {
    fontSize: 16,
    fontWeight: '500',
    color: color.textHint,
  },
  textName: {
    fontSize: 20,
    fontWeight: '500',
    color: color.black,
  },
  information: {
    width: '100%',
    height: 56,
    position: 'relative',
    top: 160,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgAvatar: {
    position: 'relative',
    top: 80,
    left: 70,
  },
  avatar: {
    marginTop: 80,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: color.textHint,
    left: 140,
    position: 'absolute',
    elevation: 10,
    shadowColor: color.primaryColor
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: 24
  }
})