import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import color from '../../assets/colors'
const DetailReview = () => {

   return (
      <View style={styles.container}>
         <View style={styles.user}>
            <Image style={styles.avatar} />
            <Text style={styles.name}>Mr Musdep</Text>
         </View>
         <Text style={styles.textDescription}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</Text>
         <Text style={styles.textMore}>More....</Text>
         <View style={styles.contentRating}>
            <View style={styles.rating}>
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/star.png')} />
            </View>
         </View>
         <View style={styles.user}>
            <Image style={styles.avatar} />
            <Text style={styles.name}>Mr Musdep</Text>
         </View>
         <Text style={styles.textDescription}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</Text>
         <Text style={styles.textMore}>More....</Text>
         <View style={styles.contentRating}>
            <View style={styles.rating}>
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/start.png')} />
               <Image style={styles.ratingImg}
                  source={require('../../assets/images/star.png')} />
            </View>
         </View>
         <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Book Now</Text>
         </Pressable>
      </View>
   )
}

export default DetailReview

const styles = StyleSheet.create({
   name: {
      fontWeight: '600',
      fontSize: 16,
      marginLeft: 8,
      color: color.textTitle
   },
   avatar: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: color.primaryColor,
   },
   user: {
      flexDirection: 'row',
      marginBottom: 32,
      alignItems: 'center',
      justifyContent: 'flex-start',

   },
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
      marginTop: -24
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
   container: {
      backgroundColor: color.background,
      padding: 24
   }
})