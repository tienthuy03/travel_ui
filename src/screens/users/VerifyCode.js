import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import color from '../../../../contains/color'

const VerifyCode = () => {
   return (
      <View style={styles.container}>
         <View style={styles.viewBack}>
            <Image style={styles.icBack}
               source={require('../../../../../../assets/images/icBack.png')} />
         </View>
         <Text style={styles.textVerify}>Verify Code</Text>
         <Text style={styles.textThe}>The confirmation code was sent via email</Text>
         <View style={styles.formCode}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
         </View>
         <Text style={styles.textForgot}>Forgot Password?</Text>
         <Pressable style={styles.btnReset}>
            <Text style={styles.textReset}>Reset Password</Text>
         </Pressable>
      </View>
   )
}

export default VerifyCode

const styles = StyleSheet.create({

  viewBack: {
      width: 40,
      height: 40,
      backgroundColor: color.primaryColor,
      borderRadius: 50,
      marginTop: 32,
      alignItems: 'center',
      justifyContent: 'center'
  },
   textReset: {
      fontSize: 16,
      fontWeight: '500',
      color: color.white
   },
   btnReset: {
      width: '100%',
      height: 56,
      borderRadius: 16,
      backgroundColor: color.primaryColor,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 32
   },
   textForgot: {
      fontSize: 16,
      fontWeight: '500',
      color: color.black,
      marginTop: 16,
      textAlign: 'center'
   },
   input: {
      width: '20%',
      height: 56,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: color.primaryColor,
      textAlign: 'center'
   },
   formCode: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 16
   },
   textThe: {
      marginTop: 16,
      fontSize: 16,
      fontWeight: '500',
      color: color.textHint,
      textAlign: 'center'
   },
   textVerify: {
      marginTop: 160,
      fontSize: 32,
      fontWeight: '500',
      color: color.black,
      textAlign: 'center'
   },
   container: {
      flex: 1,
      padding: 24,
      backgroundColor: color.white
   }
})