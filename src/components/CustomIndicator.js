import { View, Text, Image, Animated, StyleSheet, Easing } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import Icons_path from '../constants/Icons_path'
import Colors from '../assets/color/Colors'

const CustomIndicator = () => {

    useEffect(() => {
        rollEff()
    }, [])

    const roll = useRef(new Animated.Value(0)).current;

    const rollEff = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(roll, { toValue: 1, duration: 2000, useNativeDriver: true, easing: Easing.linear }),
            ])
        ).start()

    }
    const rollData = roll.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    const rollDataRev = roll.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg']
    })
    return (
        <Animated.View style={[styles.bg]}>
            <Animated.View style={[styles.in,{ transform: [{ rotate: rollData }] }]}>
                <Image source={Icons_path.INDICATOR_IN} style={[styles.indicator,{width:35,height:35}]} />
            </Animated.View>
            <Animated.View style={[styles.out,{ transform: [{ rotate: rollDataRev }] }]}>
                <Image source={Icons_path.INDICATOR_OUT} style={styles.indicator} />
            </Animated.View>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        zIndex: 100,
        justifyContent: 'center'
    },
    indicator: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    },
    in:{
        position:'absolute',
        alignSelf:'center'
    },
    out:{
        position:'absolute',
        alignSelf:'center'
    }
})

export default CustomIndicator