import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import color from '../../../../contains/color'

const data = [
   { key: '1', value: 'Mobiles', disabled: true },
   { key: '2', value: 'Appliances' },
   { key: '3', value: 'Cameras' },
   { key: '4', value: 'Computers', disabled: true },
   { key: '5', value: 'Vegetables' },
   { key: '6', value: 'Diary Products' },
   { key: '7', value: 'Drinks' },
]

const PaymentCard = () => {
   const [selected, setSelected] = useState("");
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <View style={styles.image}>
               < Image style={styles.imgBack}
                  source={require('../../../../../../assets/images/left.png')} />
            </View>
            <Text style={styles.title}>Payment</Text>
         </View>
         <ScrollView
            showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
               <View style={styles.cardName}>
                  <Text style={styles.textMu}>Mu Card</Text>
                  <Text style={styles.textMas}>Mastercard</Text>
               </View>
               <View style={styles.cardNumber}>
                  <Text style={styles.textNumber}>411 111 111 111</Text>
               </View>
               <View style={styles.cardContent}>
                  <Text style={styles.textHolder}>Card Holder Name</Text>
                  <Text style={styles.textExpery}>Expery Date</Text>
               </View>
               <View style={styles.cardInformation}>
                  <Text style={styles.name}>Adam Smith</Text>
                  <Text style={styles.date}>12/13</Text>
                  <Image style={styles.masterImg}
                     source={require('../../../../../../assets/images/mastercard.png')} />
               </View>
            </View>
            <View style={styles.inputContainer}>
               <Text style={styles.inputTitle}>Full Name</Text>
               <TextInput
                  style={styles.input}
                  placeholder='Your Name' />
            </View>
            <Text style={styles.inputTitle}>Country</Text>
            <SelectList
               setSelected={setSelected}
               data={data}
               search={false}
               boxStyles={{ borderRadius: 15, backgroundColor: color.white, borderColor: color.white, height: 56, marginTop: 16 }} //override default styles
               inputStyles={{ color: color.textHint, fontSize: 16, fontWeight: '500' }} //override default styles,
               defaultOption={{ key: '1', value: 'Your Country' }}  //default selected option
            />
            <View style={styles.inputExpery}>
               <View style={styles.headerContainer}>
                  <Text style={styles.inputTitle}>Expery Date</Text>
                  <Text style={styles.inputTitle}>CVV</Text>
               </View>
               <View style={styles.inputContent}>
                  <TextInput
                     style={styles.inputDate}
                     placeholder='00/00' />
                  <View style={styles.inputCvv}>
                     <Text style={styles.textCvv}>12/12</Text>
                  </View>
               </View>
            </View>
            <Pressable style={styles.button}>
               <Text style={styles.buttonText}>Pay Now</Text>
            </Pressable>
         </ScrollView>
      </View>
   )
}

export default PaymentCard

const styles = StyleSheet.create({
   buttonText: {
      fontWeight: '600',
      fontSize: 16,
      color: color.primaryColor
   },
   button: {
      marginTop: 30,
      width: '100%',
      height: 56,
      borderRadius: 20,
      backgroundColor: color.thirdColor,
      alignItems: 'center',
      justifyContent: 'center'
   },
   textCvv: {
      color: color.textHint,
      fontWeight: '500',
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
      paddingVertical: 16
   },
   inputCvv: {
      width: '20%',
      height: 56,
      backgroundColor: color.white,
      marginTop: 16,
      borderRadius: 15,

   },
   inputDate: {
      width: '70%',
      height: 56,
      backgroundColor: color.white,
      marginTop: 16,
      borderRadius: 15,
      paddingLeft: 16,
      color: color.textHint,
      fontWeight: '500',
      fontSize: 16,

   },
   inputContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   inputExpery: {
      marginTop: 16,
   },
   input: {
      width: '100%',
      height: 56,
      backgroundColor: color.white,
      marginTop: 16,
      borderRadius: 15,
      paddingLeft: 16,
      color: color.textHint,
      fontWeight: '500',
      fontSize: 16,
   },
   inputTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: color.black
   },
   inputContainer: {
      marginTop: 30,
      marginBottom: 16
   },
   masterImg: {
      left: 8
   },
   name: {
      fontWeight: '300',
      fontSize: 14,
      color: color.white,
   },
   date: {
      fontWeight: '300',
      fontSize: 14,
      color: color.white,
      paddingLeft: 150
   },
   cardInformation: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      top: 24,
      paddingHorizontal: 20,
      width: '100%'
   },
   textExpery: {
      fontWeight: '400',
      fontSize: 14,
      color: color.white,
   },
   textHolder: {
      fontWeight: '400',
      fontSize: 16,
      color: color.white,
   },
   cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      top: 12,
      paddingHorizontal: 20
   },
   textNumber: {
      fontWeight: '500',
      fontSize: 20,
      color: color.white,
   },
   cardNumber: {
      marginTop: 30,
      alignItems: 'center',
      width: '80%',
      backgroundColor: color.colorView,
      borderRadius: 10,
      height: 48,
      left: 30,
      justifyContent: 'center',
   },
   textMas: {
      fontWeight: '600',
      fontSize: 14,
      color: color.white,
   },
   textMu: {
      fontWeight: '600',
      fontSize: 16,
      color: color.white,
   },
   cardName: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      top: 20,
      paddingHorizontal: 20
   },
   card: {
      width: '100%',
      height: 190,
      backgroundColor: color.primaryColor,
      borderRadius: 40
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