import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import color from '../../../../contains/color'
const DetailDescription = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.textDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
         <Text style={styles.textMore}>More....</Text>
         <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Book Now</Text>
         </Pressable>
      </View>
   )
}

export default DetailDescription

const styles = StyleSheet.create({
   buttonText: {
      fontWeight: '600',
      fontSize: 16,
      color: color.white,
   },
   button: {
      width: '100%',
      height: 48,
      backgroundColor: color.primaryColor,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
      right: 10
   },
   textMore: {
      fontWeight: '400',
      fontSize: 16,
      color: color.primaryColor
   },
   textDescription: {
      width: '100%',
      fontWeight: '400',
      fontSize: 16,
      color: color.textHint,
      paddingRight: 20,
   },
   container: {
      backgroundColor: color.background,
      padding: 20,
      justifyContent: 'center',
   },
})