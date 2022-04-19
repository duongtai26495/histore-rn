import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthenticationStack from './AuthenticationStack'
import MainTab from './MainTab'
const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='MainTab' screenOptions={{headerShown:false}}>
        <Stack.Screen name='MainTab' component={MainTab} /> 
        <Stack.Screen name='Authentication' component={AuthenticationStack} />
    </Stack.Navigator>
  )
}

export default MainStack