import Home from '../screens/bottom/Home'
import Favorite from '../screens/bottom/Favorite'
import Profile from '../screens/bottom/Profile'
import Search from '../screens/bottom/Search'
import { Image, View , Text} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    return (
      <Tab.Navigator
      screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle:
          {
              position: 'absolute',
              bottom: 20,
              left: 20,
              right: 20,
              borderRadius: 16,
              height: 62,
              elevation: 10,
              backgroundColor: '#fff',
          },
          headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home}
          options={{
              tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: 'center' }}>
                      <Image
                          resizeMode='contain'
                          source={require('../assets/images/icHome.png')}
                          style={{ width: 24, height: 24, tintColor: focused ? '#5CCAD3' : '#000' }} />
                      <Text style={{ color: focused ? '#5CCAD3' : '#000', fontSize: 12}}>HOME</Text>
                  </View>
              )
          }} />
      <Tab.Screen name="Search" component={Search}
          options={{
              tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: 'center' }}>
                      <Image
                          resizeMode='contain'
                          source={require('../assets/images/icSearch.png')}
                          style={{ width: 24, height: 24, tintColor: focused ? '#5CCAD3' : '#000' }} />
                      <Text style={{ color: focused ? '#5CCAD3' : '#000', fontSize: 12}}>SEARCH</Text>
                  </View>
              )
          }} />
      <Tab.Screen name="Favorite" component={Favorite}
          options={{
              tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: 'center' }}>
                      <Image
                          resizeMode='contain'
                          source={require('../assets/images/icHeart.png')}
                          style={{ width: 24, height: 24, tintColor: focused ? '#5CCAD3' : '#000' }} />
                      <Text style={{ color: focused ? '#5CCAD3' : '#000', fontSize: 12 }}>HEART</Text>
                  </View>
              )
          }} 
          />
      <Tab.Screen name="Profile" component={Profile}
          options={{
              tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: 'center' }}>
                      <Image
                          resizeMode='contain'
                          source={require('../assets/images/icProfile.png')}
                          style={{ width: 24, height: 24, tintColor: focused ? '#5CCAD3' : '#000' }} />
                      <Text style={{ color: focused ? '#5CCAD3' : '#000', fontSize: 12}}>PROFILE</Text>
                  </View>
              )
          }} 
          />
            
  </Tab.Navigator>
    )  
}
export default MainNavigation;