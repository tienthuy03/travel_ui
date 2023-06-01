// import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import color from '../../../../contains/color'


// import { updateEmail } from '../../../redux/action/homeAction'


// const Favorite = () => {
//   //personnalinfo la bien o ben reducers dc gan cho info
//   // const [Email, setEmail] = useState('')
//   // //nhận dữ liệu từ store
//   // const info = useSelector((state) => state.persionalInfo)
//   // const dispatch = useDispatch();

//   // //test info da lay duoc chua
//   // useEffect(() => {
//   //   console.log('info_email', info.email)
//   // }, [])
//   return (
//     <View>
//       {/* <Text>{info.email}</Text>
//       <TextInput onChangeText={setEmail}
//         style={styles.inputText}
//         value={Email}
//         placeholder='Search Food..'
//       />
//       <Pressable
//         //gởi du lieu len store qua action:
//         //b1: goi ra lai action
//         onPress={() => dispatch(updateEmail(Email))}
//         style={{
//           backgroundColor: color.primaryColor,
//           height: 50,
//         }}>

//       </Pressable> */}
//     </View >
//   )
// }

// export default Favorite

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
import { StyleSheet, Text, View, Image, TextInput, Pressable, FlatList } from 'react-native'
import React from 'react'
import color from '../../../../contains/color'

const Favorite = () => {
  const renderItemList = (props) => {
    const { item } = props;
    const { name } = item;
    return (
        <Pressable style={styles.listItem}>
        <Text style={styles.textItem}>{name}</Text>
      </Pressable>
    )
  };
  const renderItemRecommended = (props) => {
    const { item } = props;
    const { name, description, avatar, price } = item;

    return (
      <View style={styles.cardRecommended}>
        <Image style={styles.imgRecommended}
          source={{ uri: avatar }} />
        <View style={styles.cardContent}>
          <Text style={styles.textNameRecomb}>{name}</Text>
          <Text style={styles.textTitleRecomb}>{description}</Text>
          <Text style={styles.textPriceRecomb}>{price}</Text>
        </View>
        <Image style={styles.imgHeartBlue}
          source={require('../../../../../../assets/images/heartBlue.png')} />
      </View>

    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.viewBack}>
          <Image style={styles.icBack}
            source={require('../../../../../../assets/images/icBack.png')} />
        </Pressable>
        <Text style={styles.textFavorite}>Favorite</Text>
      </View>
      <View style={styles.contentList}>
        <FlatList
        data={dataCity}
        renderItem={renderItemList}
        keyExtractor={Math.random}
        horizontal
        showsHorizontalScrollIndicator={false} />
      </View>
        <Text style={styles.textNumber}>32 Favorites</Text>
        <FlatList
        data={dataPlaces}
        renderItem={renderItemRecommended}
        keyExtractor={Math.random}
        showsVerticalScrollIndicator={false} />
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({
  imgHeartBlue: {
    marginLeft: 40,
    marginBottom: 40,
    width: 20,
    height: 20
  },
  textPriceRecomb: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 27.2,
    color: color.primaryColor,
    marginTop: 4
  },
  textTitleRecomb: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20.4,
    color: color.textHint,
    marginTop: 4
  },
  textNameRecomb: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 23.8,
    color: color.black
  },
  cardContent: {
    paddingLeft: 16,
    width: 150
  },
  imgRecommended: {
    width: 90,
    height: 90,
    borderRadius: 35,
    backgroundColor: color.primaryColor,
  },
  cardRecommended: {
    width: '100%',
    height: 100,
    backgroundColor: color.white,
    marginBottom: 24,
    borderRadius: 35,
    justifyContent: 'flex-start',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: color.black,
    marginTop: 36,
    marginBottom: 16
  },
  textItem: {
    fontSize: 16,
    fontWeight: '400',
    color: color.white
  },
  listItem: {
    width: 100,
    height: 56,
    borderRadius: 16,
    backgroundColor: color.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  contentList: {
    marginTop: 32,
    width: '100%'
  },
  textFavorite: {
    fontSize: 16,
    fontWeight: '500',
    color: color.black,
    left: 48
  },
  viewBack: {
    width: 40,
    height: 40,
    backgroundColor: color.primaryColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 12
  },
  container: {
    padding: 24,
    backgroundColor: color.background,
    flex: 1
  }
})
const dataCity =
  [
    {
      "name": "Nha Trang",
      "id": "1"
    },
    {
      "name": "Phan Thiết",
      "id": "2"
    },
    {
      "name": "Vũng Tàu",
      "id": "3"
    },
    {
      "name": "Hà Nội",
      "id": "4"
    },
    {
      "name": "Đà Nẵng",
      "id": "5"
    },
    {
      "name": "Biên Hoà",
      "id": "6"
    },
    {
      "name": "Vịnh Hạ Long",
      "id": "7"
    },
    {
      "name": "Đăk Nông",
      "id": "8"
    }
  ];
  const dataPlaces =
  [
    {
      "name": "Nha Trang",
      "description": "Thanh Pho Bien",
      "avatar": "https://vietnaminsider.vn/wp-content/uploads/2022/03/e5.jpg",
      "price": "$300/person",
      "rating": 4.4,
      "id": "1"
    },
    {
      "name": "Da Nang",
      "description": "description 2",
      "avatar": "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_1998,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/aferuahwmjhhgfwwjcfy/ComboV%C3%A9C%C3%A1cKhuDuL%E1%BB%8Bch%C4%90%C3%A0N%E1%BA%B5ng-H%E1%BB%99iAn:B%C3%A0N%C3%A0Hills,N%C3%BAiTh%E1%BA%A7nT%C3%A0i,K%C3%BD%E1%BB%A8cH%E1%BB%99iAn-KlookVi%E1%BB%87tNam.jpg",
      "price": "price 2",
      "rating": 3.0,
      "id": "2"
    },
    {
      "name": "Phan Thiet",
      "description": "description 3",
      "avatar": "https://gonatour.vn/vnt_upload/news/05_2020/du_phan_thiet_mui_ne_binh_thuan_gonatour_1.jpg",
      "price": "price 3",
      "rating": 2.4,
      "id": "3"
    },
    {
      "name": "Vung Tau",
      "description": "description 4",
      "avatar": "https://i1-dulich.vnecdn.net/2022/06/17/bienvungtau-1655459711-1655459-7127-3875-1655460215.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=L5M0wBngxjuv0TV6lsu-4Q",
      "price": "price 4",
      "rating": 5.0,
      "id": "4"
    },
    {
      "name": "Hue",
      "description": "description 5",
      "avatar": "https://statics.vinpearl.com/hue-vietnam-3_1649667914.jpg",
      "price": "price 5",
      "rating": 2.3,
      "id": "5"
    },
    {
      "name": "Dak Nong",
      "description": "description 6",
      "avatar": "https://en.unesco.org/sites/default/files/ta_dung_lake_dak_nong_geopark.jpg",
      "price": "price 6",
      "rating": 4.5,
      "id": "6"
    },

  ]