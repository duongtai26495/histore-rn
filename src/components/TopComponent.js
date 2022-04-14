import { View, Text, SafeAreaView, Image, Animated, Dimensions, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Colors from '../assets/color/Colors'
import Icons_path from '../constants/Icons_path'
import Variable_string from '../constants/Variable_string'
const TopComponent = ({ navigation }) => {

    const slide = useRef(new Animated.Value(50)).current;
    const fade = useRef(new Animated.Value(0)).current;

    const wlcEff = () =>{
        Animated.sequence([
            Animated.timing(fade, {toValue:1, duration:1000, useNativeDriver:true}),
            Animated.timing(slide, {toValue:1, duration:700, useNativeDriver:true}),
        ]).start();
    }

    useEffect(()=>{
        wlcEff()
    },[])


    return (
        <View style={styles.container} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Animated.View style={[{flexDirection:'row'},{opacity:fade, transform:[{translateX:slide}] }]}>
            <Image source={Icons_path.BACK} style={styles.iconBack} />
            <Text style={styles.textBack}>{Variable_string.BACK}</Text>
            </Animated.View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        padding:10,
        elevation:5,
        shadowColor:Colors.BLACK
    },
    iconBack:{
        width:25,
        height:20,
    },
    textBack:{
        color:Colors.WHITE,
        alignSelf:'center',
        marginHorizontal:5,
        fontWeight:'bold',
        fontSize:15
    }
})

export default TopComponent