import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    Profile,
    ProfileDetail
} from '../screens'
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName='ProfilePage'>
            <Stack.Screen name='ProfilePage' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='ProfileDetail' component={ProfileDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default ProfileStack