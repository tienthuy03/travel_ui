import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import color from '../../assets/colors'

const SuccessPayment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.title}>Successful</Text>
         <Text style={styles.subtitle}>Your order was successful complete.Homeland your message</Text>
         <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Success</Text>
         </Pressable>
      </View>
    </View>
  )
}

export default SuccessPayment

const styles = StyleSheet.create({
   buttonText:{
      fontWeight: '600',
      fontSize: 16,
      color:color.white,
   },
   button:{
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      height: 56,
      borderRadius: 20,
      backgroundColor: color.primaryColor,
      marginLeft: 75
   },
   subtitle: {
         marginTop: 20,
         textAlign: 'center',
         fontWeight: '600',
         color: color.textHint
   },
   title: {
      fontWeight: '600',
      fontSize: 24,
      color: color.black,
      textAlign: 'center',
      marginTop: 60
   },
   header: {
      width: 300,
      height: 300,
      backgroundColor: color.white,
      borderRadius: 30,
   },
   container: {
      flex: 1,
      backgroundColor: color.background,
      padding: 24, 
      alignItems: 'center',
      justifyContent: 'center',
   }
})