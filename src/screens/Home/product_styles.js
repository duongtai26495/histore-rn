import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../assets/color/Colors'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const product_styles = StyleSheet.create({
    row:{
        backgroundColor:Colors.WHITE,
        padding:5,
        margin:5,
        borderRadius:10,
        elevation:0.5,
        maxWidth:width/2.5,
        minWidth:width/3,
        shadowColor:Colors.BLACK,
    },
    p_name:{
        width:'100%',
        color:Colors.BLACK,
        fontWeight:'bold',
        fontSize:13,
    },
    p_brand:{
        fontSize:10,
        color:Colors.SMOKE,
    },
    sale_price:{
        color:Colors.PRIMARY,
        fontWeight:'bold',
        fontSize:20,
        padding:5,
        alignSelf:'center'
    },
    p_img:{
        width:width/3,
        height:width/2,
        resizeMode:'contain',
        alignSelf:'center'
    },
    category_name:{
        position:'absolute',
        color:Colors.PRIMARY,
        padding:5,
        right:0
    },
    bottomView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    cartIcon:{
        width:25,
        height:25,
        marginEnd:5,
    },
    buyNow:{
        padding:7,
        backgroundColor:Colors.SECONDARY,
        color:Colors.WHITE,
        alignSelf:'center',
        fontWeight:'bold',
        borderRadius:5,
    },
    logoBrands:{
        width:30,
        height:30,
        resizeMode:'contain'
    },
})

export default product_styles