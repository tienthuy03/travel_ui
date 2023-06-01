import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Pressable, SafeAreaView } from 'react-native'
import TabLayout from 'react-native-simple-tablayout';
import React from 'react'
import color from '../../../../contains/color'
import DetailDescription from '../../orthers/screens/DetailDescription';
import DetailReview from '../../orthers/screens/DetailReview';
const { width } = Dimensions.get('screen');
const Description = (props) => {
   return (
      <View style={{ width, padding: 24 }}>
         <DetailDescription />
      </View>

   )
}

const Review = (props) => {
   return (
      <View style={{ width, padding: 24 }}>
         <DetailReview />
      </View>
   )
}

const Detail = () => {
   const tabName = ["Description", "Review"]
   const data = [
      <Description />,
      <Review />,
   ];

   return (
      <ScrollView
         showsVerticalScrollIndicator={false}
         style={styles.container}>
         <View style={styles.header}>
            <View style={styles.image}>
               < Image style={styles.imgBack}
                  source={require('../../../../../../assets/images/left.png')} />
            </View>
            <Text style={styles.title}>Destination Details</Text>
         </View>
         <Image
            style={styles.imageHeader}
            resizeMode='cover' />
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
            <Text style={styles.textReviews}>(400 Reviews)</Text>
         </View>

         <TabLayout
            screens={data}
            tabName={tabName}
            indicatorHeight={4}
            indicatorRadius={50}
            titleFontSize={16}
            tabHeight={56}
            lineHeight={5}
            titleColor="#5CCAD3"
            tabColor="white"
            tabPressedColor="white"
            indicatorColor="#5CCAD3"
            paddingLeft={40} />
      </ScrollView>
   )
}

export default Detail

const styles = StyleSheet.create({
   textReviews: {
      fontSize: 14,
      fontWeight: '400',
      color: color.textHint,
      marginLeft: 4,
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
   imageHeader: {
      width: '100%',
      height: 300,
      borderRadius: 30,
      backgroundColor: color.primaryColor
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
      padding: 24,
   }
})
