import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import color from '../../../../contains/color'

const Payment = () => {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <View style={styles.image}>
               < Image style={styles.imgBack}
                  source={require('../../../../../../assets/images/left.png')} />
            </View>
            <Text style={styles.title}>Payment</Text>
         </View>
         <Text style={styles.textPayment}>Payment Method</Text>
         <Text style={styles.textContent}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"</Text>
         <Pressable style={styles.button}>
            <Image style={styles.imgButton} source={require('../../../../../../assets/images/pay.png')} />
            <Text style={styles.textButton}>Paypal</Text>
         </Pressable>
         <Pressable style={styles.button}>
            <Image style={styles.imgButton} source={require('../../../../../../assets/images/spotify.png')} />
            <Text style={styles.textButton}>Spotify</Text>
         </Pressable>
         <Pressable style={styles.button}>
            <Image style={styles.imgButton} source={require('../../../../../../assets/images/mastercard.png')} />
            <Text style={styles.textButton}>Mastercard</Text>
         </Pressable>
         <View style={styles.footer}>
            <Pressable style={styles.buttonTotal}>
               <Text style={styles.textTotal}>Next</Text>
            </Pressable>
            <Pressable style={styles.buttonTotal}>
               <Text style={styles.textTotal}>Pay Later</Text>
            </Pressable>
         </View>


      </View>
   )
}

export default Payment

const styles = StyleSheet.create({
   footer: {
      marginTop: 48
   },
   textTotal: {
      fontWeight: '500',
      fontSize: 16,
      color: color.secondColor,
   },
   buttonTotal: {
      width: '100%',
      height: 64,
      borderRadius: 20,
      backgroundColor: color.thirdColor,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
   },
   textButton: {
      left: 48,
      top: 18,
      fontWeight: '500',
      fontSize: 16,
      color: color.textHint,
   },
   imgButton: {
      left: 24,
      top: 16
   },
   button: {
      flexDirection: 'row',
      width: '100%',
      height: 64,
      borderRadius: 30,
      backgroundColor: color.white,
      marginBottom: 20
   },
   textContent: {
      marginTop: 8,
      fontWeight: '400',
      fontSize: 14,
      color: color.textHint,
      marginBottom: 32
   },
   textPayment: {
      marginTop: 16,
      fontWeight: '600',
      fontSize: 24,
      color: color.textTitle
   },
   title: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
      color: color.black,
      paddingLeft: 30,
      textAlign: 'center',

   },
   imgBack: {
      width: 16,
      height: 16
   },
   image: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: color.primaryColor,
      alignItems: 'center',
      justifyContent: 'center'
   },
   header: {
      flexDirection: 'row',
      marginTop: 24,
      alignItems: 'center',
      marginBottom: 24
   },
   container: {
      flex: 1,
      padding: 24,
      backgroundColor: color.background
   }
})