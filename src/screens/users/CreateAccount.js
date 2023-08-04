import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native'
import React from 'react'
import color from '../../assets/colors/color'
const CreateAccount = (props) => {

   const {navigation} = props;

   return (
      <View style={styles.container}>
         <Text style={styles.textCreate}>Create an account</Text>
         <Pressable>
            <TextInput placeholder="Password" style={styles.inputContainer} />
            <Image style={styles.icon} source={require('../../assets/images/password.png')} />
         </Pressable>
         <Pressable>
            <TextInput placeholder="Email" style={styles.inputContainer} />
            <Image style={styles.icon} source={require('../../assets/images/email.png')} />
         </Pressable>
         <Pressable>
            <TextInput placeholder="Confirm" style={styles.inputContainer} />
            <Image style={styles.icon} source={require('../../assets/images/password.png')} />
            <Image style={styles.iconEye} source={require('../../assets/images/eye.png')} />
         </Pressable>
         <Text style={styles.textForgot}>Forgot passsword?</Text>
         <Pressable style={styles.btnSignIn}
         onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.textSignIn}>Sign In</Text>
         </Pressable>
         <Text style={styles.textOr}>Or</Text>

         <Pressable style={styles.button} >
                <Image style={styles.fbgg} source={require('../../assets/images/google.png')} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Sign In With Google</Text>
            </Pressable>
            
         <Pressable style={styles.button} >
                <Image style={styles.fbgg} source={require('../../assets/images/facebook.png')} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Sign In With FaceBook</Text>
            </Pressable>
      </View>
   )
}

export default CreateAccount

const styles = StyleSheet.create({
   button: {
      borderWidth: 1,
      height: 56,
      width: '100%',
      borderColor: color.textHint,
      borderRadius: 16,
      marginBottom: 20,
      alignItems: 'center',
      flexDirection: 'row'
  },
  fbgg: {
      marginRight: 50,
      marginLeft: 20,
      height: 40,
      width: 40,
  },
   textOr: {
      fontSize: 16,
      fontWeight: '400',
      color: color.textHint,
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 16
   },
   textSignIn: {
      fontSize: 16,
      fontWeight: '500',
      color: color.white
   },
   btnSignIn: {
      width: '100%',
      height: 56,
      borderRadius: 16,
      backgroundColor: color.primaryColor,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 32
   },
   textForgot:{
      fontSize: 16,
      fontWeight: '500',
      color: color.black,
      textAlign: 'center'
   },
   iconEye: {
      position: 'absolute',
      top: 20,
      right: 32,
   },
   icon: {
      position: 'absolute',
      top: 20,
      left: 16,
      width: 16,
      height: 16
   },
   inputContainer: {
      width: '100%',
      height: 56,
      borderRadius: 16,
      borderColor: color.primaryColor,
      borderWidth: 1,
      backgroundColor: color.colorView,
      paddingLeft: 48,
      position: 'relative',
      fontSize: 16,
      fontWeight: '700',
      marginBottom: 16,
   },
   textCreate: {
      fontSize: 24,
      fontWeight: '500',
      color: color.black,
      marginTop: 48,
      marginBottom: 48,
   },
   container: {
      flex: 1,
      padding: 24,
      backgroundColor: color.white
   }
})