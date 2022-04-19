import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfilePage } from '../screens'
const Stack = createNativeStackNavigator()
const UserProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName='Profile' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Profile' component={ProfilePage} />
    </Stack.Navigator>
  )
}

export default UserProfileStack