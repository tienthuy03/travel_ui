import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from '../navigation/MainNavigation';
import DetailPlaces from '../screens/users/DetailPlaces'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
            <Stack.Navigator
            screenOptions={{headerShown : false}}>
                <Stack.Screen name="MainNavigation" component={MainNavigation} />
                <Stack.Screen name="DetailPlaces" component={DetailPlaces} />
                
            </Stack.Navigator>
    )
}

export default StackNavigation