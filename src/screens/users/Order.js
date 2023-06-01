import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React from 'react'
import color from '../../../../contains/color'

const Order = () => {
   return (
      <View
       style={styles.container}>
         <View style={styles.header}>
            <View style={styles.image}>
               < Image style={styles.imgBack}
                  source={require('../../../../../../assets/images/left.png')} />
            </View>
            <Text style={styles.title}>Order Summary</Text>
         </View>
         <ScrollView
         showsVerticalScrollIndicator={false}>
            <View style={styles.contentTitle}>
            <Text style={styles.contentName}>Kenbun Hilire</Text>
            <Text style={styles.contentPrice}>$90/Person</Text>
         </View>
         <View style={styles.contentRating}>
            <View style={styles.rating}>
               <Image style={styles.ratingImg}
                  source={require('../../../../../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../../../../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../../../../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../../../../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../../../../../assets/images/star.png')} />
            </View>
            <Text style={styles.textRating}>4.5</Text>
         </View>
         <View style={styles.line}></View>
         <View style={styles.tickets}>
            <Text style={styles.numberTickets}>Number tickets</Text>
            <View style={styles.number}>
               <Pressable style={styles.ticket}>
                  <Image style={styles.ticketSub}
                  source={require('../../../../../../assets/images/sub.png')}/>
               </Pressable>
                   <Text style={styles.ticketNumber}>10</Text>
               <Pressable style={styles.ticket}>
                  <Image style={styles.ticketPlus}
                  source={require('../../../../../../assets/images/plus.png')}/>
               </Pressable>
            </View>
         </View>
         <View style={styles.line}></View>
         <Text style={styles.paymentName}>Payment Method</Text>
         <View style={styles.payment}>
            <TextInput
            style={styles.inputPayment}
            placeholder='Master Card'/>
            <Image style={styles.paymentImg}
            source={require('../../../../../../assets/images/arrow.png')}/>
         </View>
         <Text style={styles.paymentName}>Location</Text>
         <View style={styles.payment}>
            <TextInput
            style={styles.inputPayment}
            placeholder='Location'/>
            <Image style={styles.paymentImg}
            source={require('../../../../../../assets/images/arrow.png')}/>
         </View>
         <Text style={styles.paymentName}>Booking Details</Text>
         <View style={styles.payment}>
            <TextInput
            style={styles.inputPayment}
            placeholder='2 tickets'/>
            <Text style={styles.textPayment}>$200</Text>
         </View>
         <Text style={styles.paymentName}>Payment Details</Text>
         <View style={styles.payment}>
            <TextInput
            style={styles.inputPayment}
            placeholder='Total Orders'/>
            <Text style={styles.textPayment}>$200</Text>
         </View>
         <View style={styles.line}></View>
         <View style={styles.button}>
            <View style={styles.price}>
               <Text style={styles.priceName}>Total Price</Text>
               <Text style={styles.priceValue}>$400</Text>
            </View>
            <Pressable style={styles.pressButton}>
               <Text style={styles.buttonText}>Pay Now</Text>
            </Pressable>
         </View>
         </ScrollView>
         
      </View>
   )
}

export default Order

const styles = StyleSheet.create({
   buttonText: {
      fontWeight: '600',
      fontSize: 16,
      color: color.white,
   },
   pressButton: {
      width: 150,
      height: 56,
      backgroundColor: color.secondColor, 
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20
   },
   priceValue: {
      fontWeight: '600',
      fontSize: 20,
      color: color.textTitle
   },
   priceName: {
      fontWeight: '400',
      fontSize: 14,
      color: color.textHint
   },
   button: {
      marginTop: 24, 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   textPayment: {
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      color: color.black
   },
   inputPayment: {
      fontWeight: '500',
      fontSize: 16,
      color: color.textHint
   },
   paymentImg: {
      width: 16,
      height: 20
   },
   payment: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
      marginTop: 16
   },
   paymentName: {
      marginTop: 20,
      fontWeight: '600',
      fontSize: 16,
      color: color.textTitle
   },
   ticketNumber: {
      fontSize: 20,
      fontWeight: '600',
      color: color.black
   },
   ticketPlus: {
      width: '60%',
      height: '60%'
   },
   ticketSub: {
      width: '50%',
      height: 4
   },
   ticket: {
      width: 30,
      height: 30,
      borderRadius: 50,
      backgroundColor: color.primaryColor,
      alignItems:'center',
      justifyContent: 'center',
      margin: 8
   },
   number: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
   numberTickets: {
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 24,
      color: color.textTitle
   },
   tickets: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
      marginTop: 20,
      marginBottom: 10
   },
      line: {
      width: '100%',
      height: 2,
      backgroundColor: color.textHint
   },
   textRating: {
      fontSize: 14,
      fontWeight: '400',
      color: color.black,
      marginLeft: 4,
   },
   ratingImg: {
      width: 16,
      height: 16,
      marginLeft: 4
   },
   rating: {
      flexDirection: 'row',
   },
   contentRating: {
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 20
   },
   contentPrice: {
      fontWeight: '500',
      fontSize: 16,
      color: color.primaryColor,
      lineHeight: 24
   },
   contentName: {
      fontWeight: '600',
      fontSize: 16,
      color: color.textTitle,
      lineHeight: 27
   },
   contentTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20
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
      backgroundColor: color.background,
      padding: 24
   }
})