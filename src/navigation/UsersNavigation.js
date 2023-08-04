import React from 'react'

import Login from '../screens/users/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from '../screens/users/CreateAccount';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '../navigation/MainNavigation';
const Stack = createNativeStackNavigator();

const UsersNavigation = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="MainNaviagtion" component={MainNavigation}/>
    </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default UsersNavigation;
