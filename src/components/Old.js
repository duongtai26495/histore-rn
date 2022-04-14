import { View, Text, TextInput, Animated, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { StackActions } from '@react-navigation/native';
import { transform } from '@babel/core';

const Old = ({ navigation, route }) => {


    const [value, setValue] = useState("")
    const progress = useRef(new Animated.Value(1)).current;

    const progressInput = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(100)).current;
    const progressText = useRef(new Animated.Value(0)).current;
    const rotate = useRef(new Animated.Value(0.5)).current;
    const move = useRef(new Animated.Value(-100)).current;

    const moveLogo = useRef(new Animated.Value(-300)).current;

    const rotateData = rotate.interpolate(
        {
            inputRange: [0, 1],
            outputRange: ['-2deg', '2deg']
        }
    )

    const height = Dimensions.get('screen').height;
    const effectLogin = () => {
        Animated.sequence([
            Animated.timing(scale, { toValue: 1, duration: 1500, useNativeDriver: true }),
            Animated.timing(progressText, { toValue: 1, duration: 500, useNativeDriver: true }),
            Animated.timing(progressInput, { toValue: 1, duration: 100, useNativeDriver: true }),
            Animated.parallel([
                Animated.spring(move, { toValue: 1, useNativeDriver: true }),
                Animated.spring(moveLogo,{toValue:1, useNativeDriver:true})
            ]),
        ]).start();
    }

    const effectLoginSuccess = () => {
        if (value !== "") {
            Animated.sequence([
                Animated.timing(progressText, { toValue: 0, duration: 500, useNativeDriver: true }),
                Animated.timing(scale, { toValue: height, duration: 1500, useNativeDriver: true }),
                Animated.timing(progressInput, { toValue: 0, duration: 1000, useNativeDriver: true }),
                gotoHome(),
                console.log("Move")
            ]).start();
        } else {
            Animated.sequence([
                Animated.timing(rotate, { toValue: 1, useNativeDriver: true, duration: 50 }),
                Animated.timing(rotate, { toValue: 0, useNativeDriver: true, duration: 50 }),
                Animated.timing(rotate, { toValue: 0.5, useNativeDriver: true, duration: 50 })
            ]).start()
        }

    }

    const gotoHome = () => {
        navigation.dispatch(StackActions.replace("Home"))
    }


    useEffect(() => {
        effectLogin()
    }, [])

    return (
      <SafeAreaView style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent: 'center',
      }}>
          <Animated.View style={[{opacity:progressInput, transform:[{translateY: moveLogo}]}]}>
              <Image source={require('../../assets/images/logo.png')} style={{width:100,height:100,alignSelf:'center', marginVertical:20}} />
        </Animated.View>

        <Animated.View style={[{opacity:progressInput, transform:[{translateY: move}]}]}>
        <TextInput style={{
            borderColor:'rgba(41,115,115,1)',
            borderWidth:0.5,
          width: '90%',
          backgroundColor: 'rgba(230,230,230,1)',
          alignSelf: 'center',
          padding: 10,
          borderRadius: 5,
          color:'rgba(41,115,115,1)'
        }}
            onChangeText={(value)=>{setValue(value)}}
          placeholder='Enter name...'
          placeholderTextColor={'rgba(45,115,115,1)'} />
        </Animated.View>
        <Animated.View style={[styles.view,{opacity:progress, transform:[{scale},{rotate: rotateData}]}]}>
          <TouchableOpacity onPress={()=>{effectLoginSuccess()}} style={{
            width: '100%',
            backgroundColor: 'rgba(41,115,115,1)',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
          }}>
            <Animated.View style={[{opacity:progressText}]}>
            <Text style={styles.text}>Login</Text>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
  
      </SafeAreaView >
  
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        width: '90%',
        alignSelf: 'center'
    },
    text: {
        color: 'rgba(250,250,250,1)',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})


export default Old