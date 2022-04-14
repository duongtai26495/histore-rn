import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    Home, 
} from '../screens'
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomePage'>
        <Stack.Screen name='HomePage' component={Home} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default HomeStack
