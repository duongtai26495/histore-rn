import { View, Text } from 'react-native'
import React from 'react'
import UserProfileStack from './UserProfileStack'
import HomePageStack from './HomePageStack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const MainTab = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomePageStack}/>
      <Drawer.Screen name='Profile' component={UserProfileStack}/>
    </Drawer.Navigator>
  )
}

export default MainTab