import { StyleSheet, Text, View, Image, TextInput, FlatList, LogBox, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../assets/colors/color'
import { ScrollView } from 'react-native-virtualized-view'
// dispacth la goi hanh dong, use selector lay thong tin tu store len view
import { useDispatch, useSelector } from 'react-redux'


//render Item list city
const Item = ({ item, onPress, backgroundColor, textColor }) => (

  <TouchableOpacity
  onPress={onPress} style={[styles.list, { backgroundColor }]}>
  <View style={styles.item}>
  <Text style={[styles.textItem, { color: textColor }]}>{item.name}</Text>
  </View>
</TouchableOpacity>
);
const Home = () => {
  // RENDER ITEM CATEGORIES
  // const [color, setColor] = useState('');
  // const handleClick = () => {
  //   setColor(!color);
  // };

  // const renderItemList = (props) => {
  //   const { item } = props;
  //   const { name } = item;
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.5}
  //       onPress={handleClick}
  //       style={[styles.list, { backgroundColor: color ? '#ffffff' : '#5CCAD3' }]}>
  //       <View style={styles.item}>
  //         <Text style={[styles.textItem, { color: color ? '#5CCAD3' : '#ffffff' }]}>{name}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   )
  // };
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#5CCAD3' : '#ffffff';
    const color = item.id === selectedId ? 'white' : '#5CCAD3';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  //RENDER ITEM CARD VIEW PLACES
  const renderItemCard = (props) => {
    const { item } = props;
    const { name, description, avatar, price, rating } = item;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.cardView}>
        <Image
          style={styles.imgBr}
          source={{ uri: avatar }} />
        <View style={styles.cardHeader}>
          <View style={styles.rating}>
            <Image style={styles.imgRating} source={require('../../assets/images/start.png')} />
            <Text style={styles.textRating}>{rating}</Text>
          </View>
          <View style={styles.heart}>
            <Image style={styles.imgHeart} source={require('../../assets/images/heart.png')} />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textTitle}>{description}</Text>
          <View style={styles.content}>
            <Text style={styles.textPrice}>{price}</Text>
            <Image style={styles.imgRight}
              source={require('../../assets/images/right.png')} />
          </View>
        </View>
      </TouchableOpacity>
    )
  };

  //RENDER ITEM RECOMMEND
  const renderItemRecommended = (props) => {
    const { item } = props;
    const { name, description, avatar, price } = item;

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.cardRecommended}>
        <Image style={styles.imgRecommended}
          source={{ uri: avatar }} />
        <View style={styles.cardContent}>
          <Text style={styles.textNameRecomb}>{name}</Text>
          <Text style={styles.textTitleRecomb}>{description}</Text>
          <Text style={styles.textPriceRecomb}>{price}</Text>
        </View>
        <Image style={styles.imgHeartBlue}
          source={require('../../assets/images/heartBlue.png')} />
      </TouchableOpacity>

    )
  }

  return (
    <ScrollView nestedScrollEnabled={true} style={{ width: '100%' }}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={false}
          style={{ width: '100%' }}>
          <View style={styles.header}>
            <Text style={styles.title}>Where Do You Want To Discover</Text>
            <Pressable style={styles.viewBell}>
              <Image
                source={require('../../assets/images/bell.png')}
                style={styles.imgBell} />
            </Pressable>

          </View>
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholder='Search Food..' />
              <Image
                style={styles.imgSearch}
                source={require('../../assets/images/search.png')} />
            </View>
            <View style={styles.change}>
              <Image style={styles.imgChanger} source={require('../../assets/images/change.png')} />
            </View>
          </View>
          <View style={styles.categories}>
            <Text style={styles.textCategory}>Categories</Text>
            <Text style={styles.textSeeAll}>See All</Text>
          </View>
          <View style={styles.listCity}>
            <FlatList
              data={dataCity}
              renderItem={renderItem}
              keyExtractor={Math.random}
              horizontal
              showsHorizontalScrollIndicator={false} />
          </View>

          <FlatList
            data={dataPlaces}
            renderItem={renderItemCard}
            keyExtractor={Math.random}
            horizontal
            showsHorizontalScrollIndicator={false} />
          <View style={styles.headerRecommended}>
            <Text style={styles.textCategory}>Recommended Destination</Text>
            <Text style={styles.textSeeAll}>See All</Text>
          </View>
          <FlatList
            data={dataPlaces}
            renderItem={renderItemRecommended}
            keyExtractor={Math.random}
            showsVerticalScrollIndicator={false} />
        </ScrollView>
      </View >
    </ScrollView >

  )
}

export default Home

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
  headerRecommended: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 24
  },
  imgRight: {
    width: 16,
    height: 16,
    right: 24
  },
  textPrice: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 23.8,
    color: color.white,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
    paddingLeft: 32
  },
  textTitle: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20.4,
    color: color.white,
    paddingLeft: 32,
    paddingTop: 4
  },
  textName: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 27.2,
    color: color.white,
    paddingLeft: 32,
    marginTop: 4
  },
  textRating: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 23.8,
    color: color.black,
    paddingLeft: 4
  },
  description: {
    width: '100%',
    height: 100,
    backgroundColor: color.colorView,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: color.white,
    position: 'absolute',
    bottom: 15,
    left: 17,
  },
  heart: {
    width: 46,
    height: 46,
    borderWidth: 1,
    borderColor: color.white,
    borderRadius: 50,
    backgroundColor: color.colorView,
    alignItems: 'center',
    justifyContent: 'center',

  },
  rating: {
    width: 100,
    height: 46,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: color.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgBr: {
    position: 'absolute',
    width: 250,
    height: 300,
    borderRadius: 30
  },
  cardView: {
    width: 250,
    height: 300,
    backgroundColor: color.primaryColor,
    borderRadius: 30,
    padding: 17,
    marginLeft: 8
  },
  textItem: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 23.8,
    color: color.textHint
  },
  listCity: {
    width: '100%',
    marginBottom: 32
  },
  list: {
    width: 120,
    height: 60,
    backgroundColor: color.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  textSeeAll: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20.4,
    color: color.secondColor
  },
  textCategory: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 27.2,
    color: color.textTitle
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    alignItems: 'center',
    height: 48
  },
  imgChanger: {
    width: 20,
    height: 20
  },
  change: {
    width: '15%',
    height: 56,
    backgroundColor: color.primaryColor,
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  imgSearch: {
    position: 'absolute',
    top: 14,
    left: 12,
    width: 24,
    height: 24
  },
  inputText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 23.8,
    color: color.textHint,
    paddingLeft: 64,
  },
  input: {
    width: '80%',
    height: 56,
    borderColor: color.white,
    borderWidth: 1,
    borderRadius: 24,
    backgroundColor: color.white,
    position: 'relative',
    elevation: 10,
    shadowColor: color.primaryColor
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  title: {
    width: 227,
    height: 72,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 36,
    color: color.black,
  },
  viewBell: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  header: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  container: {
    flex: 1,
    backgroundColor: color.background,
    padding: 24

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