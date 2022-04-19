import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
import { SignIn, SignUp } from '../screens'
const AuthenticationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'SignIn'}>
            <Stack.Screen name='SignIn' component={SignIn} options={{ animation: 'slide_from_right' }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ animation: 'slide_from_left' }} />
        </Stack.Navigator>
    )
}

export default AuthenticationStack