import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../assets/color/Colors'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const brand_styles = StyleSheet.create({
    item:{
        color:Colors.SECONDARY,
        fontWeight:'bold',
        fontSize:15,
        alignSelf:'center'
    },
    itemBox:{
        width:width/4,
        justifyContent:'center',
        backgroundColor:Colors.WHITE,
        borderRadius:5,
        elevation:0.5,
        shadowColor:Colors.BLACK,
        padding:3,
        marginVertical:10,
        marginLeft:10,
    },
    image:{
        alignSelf:'center',
        width:'100%',
        height:25,
        resizeMode:'contain',
        marginTop:5,
    }
})

export default brand_styles