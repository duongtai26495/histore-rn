import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../assets/color/Colors'

const width = Dimensions.get('screen').width;
const home_styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: Colors.LIGHT,
    },
    layerLoading:{
        width :'100%',
        height : '100%',
        backgroundColor:Colors.PRIMARY,
    },
    main:{
        width:'100%',
        height:'100%',
        flex:1,
    },
    flatlist:{
        
    },
    topComponent: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        paddingVertical:10
    },
    searchView: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal:10,
        marginStart:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10,
        flex:1,
    },
    inputSearch: {
        color: Colors.SECONDARY,
        flex:1,
        marginHorizontal:5,
        borderRadius:3,
    },
    searchBtn:{
        width:35,
        height:35,
        alignSelf:'center',
    },
    viewAllHeader:{
        width: width,
        flexDirection:'row',
        paddingHorizontal:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerBrandName:{
        color:Colors.BLACK,
        fontWeight:'bold',
        textShadowColor:Colors.PRIMARY,
        textShadowOffset:{
            height:0.1,
            width:0.1,
        },
        textShadowRadius:0.2
    },
    headerViewAll:{
        color:Colors.PRIMARY,
        fontWeight:'bold',
        textShadowColor:Colors.PRIMARY,
        textShadowOffset:{
            height:0.1,
            width:0.1,
        },
        textShadowRadius:0.2
    },
    headerLine:{
        backgroundColor:Colors.SMOKE,
        padding:0.1,
        marginHorizontal:5,
        flex:1,
    },
    indicator:{
        
    },
    cartIconTop:{
        width:40,
        height:40,
        alignSelf:'center',
        marginHorizontal:10,
    },
    numCarts:{
        width:22,
        height:22,
        position:'absolute',
        top:-2,
        right:10,
        zIndex:3,
        borderRadius:15,
        padding:2,
        backgroundColor:Colors.RED,
        justifyContent:'center',
        borderWidth:0.5,
        borderColor:Colors.WHITE,
    },
    cartNumber:{
        color:Colors.WHITE,
        alignSelf:'center',
        fontSize:12,
        fontWeight:'bold',
    }


})

export default home_styles