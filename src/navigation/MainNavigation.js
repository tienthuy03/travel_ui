import React, { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/users/Login'
import Home from '../screens/bottom/Home'
import Profile from '../screens/bottom/Profile'
import Favorite from '../screens/bottom/Favorite'
import Search from '../screens/bottom/Search';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabnavi() {
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
                                source={require('../assets/images/icHome')}
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
                }} />
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
                }} />
                  
        </Tab.Navigator>

    )
}


const MainNavigation = () => {
    return (
        <Provider store={store}>
            <NavigationContainer >
                <Stack.Navigator initialRouteName='HomesTab'
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={Login}></Stack.Screen>
                    <Stack.Screen name='HomesTab' component={Tabnavi}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
export default MainNavigation

