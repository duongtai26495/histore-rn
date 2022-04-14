import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeStack from './HomeStack'
import AuthenStack from './AuthenStack'
import MainTab from './MainTab'
import { ProductDetail } from '../screens'
const MainStack = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='MainTab' screenOptions={{headerShown:false}}>
        <Stack.Screen name='MainTab' component={MainTab} />
        <Stack.Screen name='HomeStack' component={HomeStack} />
        <Stack.Screen name='AuthenStack' component={AuthenStack} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default MainStack