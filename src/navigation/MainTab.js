
import { View, TouchableOpacity, Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icons_path from '../constants/Icons_path'
import Colors from '../assets/color/Colors'
import Navigation_path from '../constants/Navigation_path'
import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'
import React from 'react'
import CartStack from './CartStack'
const Tab = createMaterialBottomTabNavigator()
const iconSize = 25
const MainTab = () => {
  return (
    <Tab.Navigator
            initialRouteName={Navigation_path.HOME}
            shifting={true}
            activeColor={Colors.SECONDARY}
            inactiveColor={Colors.LIGHT}
            barStyle={{ backgroundColor: Colors.WHITE,borderTopColor:Colors.PRIMARY, borderTopWidth:0.5, }}
            options={{
                headerShown: false,
                presentation: true,
                animationEnabled: true,
              }}>
            <Tab.Screen
                name={Navigation_path.HOME}
                component={HomeStack}
                options={{
                    headerShown: false,
                    animation: true,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={Icons_path.HOME}
                                resizeMode='contain'
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                    tintColor: focused ? Colors.SECONDARY : Colors.SMOKE
                                }}
                            />
                        </View>
                    )
                }} />
           
            <Tab.Screen
                name={Navigation_path.PROFILE}
                component={ProfileStack}
                options={{
                    headerShown: false,
                    animation: true,
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity>
                            <Image
                                source={Icons_path.PROFILE}
                                resizeMode='contain'
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                    tintColor: focused ? Colors.SECONDARY : Colors.SMOKE
                                }}
                            />
                        </TouchableOpacity>
                    )
                }} />
        </Tab.Navigator>
  )
}

export default MainTab