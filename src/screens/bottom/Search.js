import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import color from '../../assets/colors/color'

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.list, { backgroundColor }]}>
      <Text style={[styles.textItem, { color: textColor }]}>{item.name}</Text>

  </TouchableOpacity>
);
const Search = () => {
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
  // const renderItemList = (props) => {
  //   const { item } = props;
  //   const { name } = item;
  //   return (
  //     <View style={styles.list}>
  //       <View style={styles.item}>
  //         <Text style={styles.textItem}>{name}</Text>
  //       </View>
  //     </View>
  //   )
  // };
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
          source={require('../../assets/images/heartBlue.png')} />
      </View>

    )
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.image}>
          < Image style={styles.imgBack}
            source={require('../../assets/images/icBack.png')} />
        </View>
        <Text style={styles.title}> Search Pages</Text>
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
          keyExtractor={item => item.id}
          extraData={selectedId}
          data={dataCity}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          numColumns={3} />
      </View>
      <View style={styles.categories}>
        <Text style={styles.textCategory}>Recent Search</Text>
        <Text style={styles.textSeeAll}>Clear All</Text>
      </View>
      <FlatList
        data={dataPlaces}
        renderItem={renderItemRecommended}
        keyExtractor={Math.random}
        showsVerticalScrollIndicator={false} />
    </ScrollView>
  )
}

export default Search

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
  textItem: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 23.8,
    color: color.textHint
  },
  listCity: {
    width: '100%',
    marginBottom: 20
  },
  list: {
    width: 100,
    height: 60,
    backgroundColor: color.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginTop: 8
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
    borderRadius: 10,
    elevation: 10,
    shadowColor: color.primaryColor
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
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: color.black,
    paddingLeft: 30,
    textAlign: 'center',

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
    marginTop: 12,
    alignItems: 'center',
    marginBottom: 12
  },
  container: {
    flex: 1,
    backgroundColor: color.background,
    padding: 24
  }
});
const dataCity =
  [
    {
      "name": "All",
      "id": "1"
    },
    {
      "name": "Cities",
      "id": "2"
    },
    {
      "name": "Beach",
      "id": "3"
    },
    {
      "name": "Destinations",
      "id": "4"
    },
    {
      "name": "Countries",
      "id": "5"
    },

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
  ]