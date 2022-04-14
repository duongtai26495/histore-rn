import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../assets/color/Colors'

const HeaderComponent = () => {
    return (
        <>
            <View style={style.container}>
                <View style={style.logoView}>
                    <Text style={style.text}>App Name</Text>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        width:'100%',
        padding: 5,
        backgroundColor: Colors.WHITE,
    },
    text: {
        color: Colors.WHITE,
        fontSize: 15,
        fontWeight: 'bold',

    },
    logoView: {
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor: Colors.PRIMARY,
        borderRadius:10,
    }
})

export default HeaderComponent