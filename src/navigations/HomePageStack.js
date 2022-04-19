import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
import { HomePage } from '../screens'
const HomePageStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'  screenOptions={{headerShown:false}}>
        <Stack.Screen component={HomePage} name="Home" />
    </Stack.Navigator>
  )
}

export default HomePageStack