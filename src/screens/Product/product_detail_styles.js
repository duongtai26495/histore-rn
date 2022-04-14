import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../assets/color/Colors'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const product_detail_styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor:Colors.WHITE,
    },
    imgProduct:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',   
    },
    headerProduct:{
        width:'100%',
        height:height/2,
        borderBottomColor:Colors.SMOKE,
        borderBottomWidth:1,
        backgroundColor:Colors.WHITE,
        padding:5,
    },
    contentProduct:{
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor:Colors.WHITE,
    },
    p_name:{
        color:Colors.SECONDARY,
        fontSize:20,
        fontWeight:'bold',
    },
    p_cate:{
        color:Colors.DARK,
        fontSize:15,
        fontWeight:'bold'
    },
    p_brand:{
        color:Colors.DARK,
        fontSize:15,
        fontWeight:'bold',
        marginVertical:5,
    },
    funcProduct:{
        width:'100%',
        backgroundColor:Colors.WHITE,
        paddingHorizontal:10,
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    p_sale_price:{
        color:Colors.BLACK,
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center',
    },
    p_add_to_cart:{
        backgroundColor:Colors.LIGHT,
        padding:15,
        borderRadius:10,
        alignSelf:'center',
    },
    p_add_to_cart_label:{
        fontWeight:'bold',
        color:Colors.DARK,
        alignSelf:'center'
    },
    p_desc:{
        fontSize:15,
        color:Colors.SMOKE,
    },
    btnBuyNow:{
        flex:1,
        backgroundColor:Colors.PRIMARY,
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:10,
        marginBottom:20,

        marginHorizontal:10,
    },
    buyNowLabel:{
        alignSelf:'center',
        fontSize:15,
        fontWeight:'bold',
        color:Colors.WHITE,
    },
    header:{
        color:Colors.DARK,
    },
    
})

export default product_detail_styles