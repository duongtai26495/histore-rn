import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    Cart, 
} from '../screens'
const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator initialRouteName='CartPage'>
        <Stack.Screen name='CartPage' component={Cart} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default CartStack
