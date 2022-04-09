import { View, Text, Animated, StyleSheet, TouchableOpacity, Easing } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';

const LoopCycler = () => {

    const progress = useRef(new Animated.Value(0.5)).current;
    const scale = useRef(new Animated.Value(1)).current;

    const [isAni, setAni] = useState(false)

    const toggleAni = () => { setAni(previousState => !previousState) }

    useEffect(() => {
        effect()
    }, [isAni])


    const effect = () => {
        if (isAni) {
                Animated.parallel([
                        Animated.timing(progress, { toValue: 1, duration: 1000, useNativeDriver: true }),
                        Animated.timing(scale, { toValue: 3, duration: 1000, useNativeDriver: true }),
                ]).start()
        } else {
                Animated.parallel([
                        Animated.timing(progress, { toValue: 0.5, duration: 1000, useNativeDriver: true }),
                        Animated.timing(scale, { toValue: 1, duration: 1000, useNativeDriver: true })
                ]).start()
        }
       
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleAni()} >
                <Animated.View style={[styles.square, {
                    borderRadius: progress.interpolate({
                        inputRange: [0.5, 1],
                        outputRange: [0.5 * SIZE / 2, 1 * SIZE / 2],
                    }),
                    transform: [{ scale }]
                },
                ]} />
            </TouchableOpacity>
        </View>
    )
}

const SIZE = 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(250,210,25,1)'
    }
})

export default LoopCycler