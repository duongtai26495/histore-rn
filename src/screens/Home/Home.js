import { Dimensions, View, Text, SafeAreaView, FlatList, Image, ActivityIndicator, TouchableOpacity, TextInput, Animated, Easing, ScrollView, RefreshControl } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import home_styles from './home_styles'
import HeaderComponent from '../../components/HeaderComponent'
import Colors from '../../assets/color/Colors'
import Icons from '../../constants/Icons_path'
import Variable_string from '../../constants/Variable_string'
import API_string from '../../constants/API_string'
import product_styles from './product_styles'
import brand_styles from './brand_styles'
import Icons_path from '../../constants/Icons_path'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Navigation_path from '../../constants/Navigation_path'
import CustomIndicator from '../../components/CustomIndicator'
import { getBrands, getDataFromAPI } from '../../services/api/getDataFromApi'
import BrandsListHorizontal from '../../components/BrandsListHorizontal'
import ProductHorizontal from '../../components/ProductHorizontal'
import axios from 'axios'
const Home = ({ navigation, route }) => {

    useEffect(() => {
        getImage()
        getData()
        welcomeEffect()
    }, [])

    const [isFetching, setFetching] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const height = Dimensions.get('screen').height;
    const width = Dimensions.get('screen').width;
    const scale = useRef(new Animated.Value(height)).current;
    const fade = useRef(new Animated.Value(0)).current;
    const shake = useRef(new Animated.Value(0.5)).current;

    const [brands, setBrands] = useState([])
    const [gamingMouse, setGamingMouse] = useState([])
    const [officeMouse, setOfficeMouse] = useState([])
    const [gamingKbs, setGamingKbs] = useState([])
    const [searchData, setSearchData] = useState("")
    const [carts, setCarts] = useState(0)

    const welcomeEffect = () => {
        Animated.sequence([
            Animated.timing(scale, { toValue: 1, duration: 1500, useNativeDriver: true, easing: Easing.exp }),
            Animated.timing(fade, { toValue: 1, duration: 500, useNativeDriver: true })
        ]).start();
    }

    const getData = async () => {

        setLoading(true)
        setBrands(await getBrands())
        setGamingMouse(await getDataFromAPI(API_string.GAMINGMOUSE.code_name));
        setOfficeMouse(await getDataFromAPI(API_string.OFFICEMOUSE.code_name));
        setGamingKbs(await getDataFromAPI(API_string.GAMINGKEYBOARD.code_name));
        setFetching(false)
        setLoading(false)
    }

    const getImage = () =>{
        let url = API_string.BASE_URL + API_string.PRODUCTS;
        axios.get(url)
        .then(response => {
            const data = response.data;
        })
    }

    const searching = () => {
        if (searchData === "") {
            searchEff()
        } else {
        }
    }

    const onRefresh = () =>{
        setFetching(true)
        getData()

    }

    const searchEff = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(shake, { toValue: 1, duration: 50, useNativeDriver: true, easing:Easing.linear }),
                Animated.timing(shake, { toValue: 0, duration: 50, useNativeDriver: true, easing:Easing.linear  }),
                Animated.timing(shake, { toValue: 0.5, duration: 50, useNativeDriver: true, easing:Easing.linear  }),
            ]),
            {
                iterations: 1
            }
        ).start()
    }

    const shakeData = shake.interpolate({
        inputRange: [0, 1],
        outputRange: ['-10deg', '10deg']
    })

    const componentTopHeader = () => {
        return (
            <View style={home_styles.topComponent}>
                <Animated.View style={[{ flexDirection: 'row' }, { opacity: fade }]}>
                    <View style={home_styles.searchView}>
                        <TextInput
                            style={home_styles.inputSearch}
                            placeholderTextColor={Colors.PRIMARY}
                            placeholder={Variable_string.SEARCHING + '...'}
                            onChangeText={value => setSearchData(value)} />
                        <Animated.View style={[{ alignSelf: 'center' }, { transform: [{ rotate: shakeData }] }]}>
                            <TouchableOpacity onPress={() => searching(searchData)} >
                                <Image source={Icons.SEARCHING} style={home_styles.searchBtn} />
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        {carts > 0 ? (
                            <View style={home_styles.numCarts}>
                                <Text style={home_styles.cartNumber}>{carts}</Text>
                            </View>
                        ) : null}

                        <Image source={Icons_path.CARTS_ICON} style={home_styles.cartIconTop} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        )
    }

    return (
        <View
            style={home_styles.container}>
            <SafeAreaView />
            <View style={home_styles.main}>
                <Animated.View>
                    {componentTopHeader()}
                </Animated.View>
                {isLoading ? (
                    <CustomIndicator />
                ) : (null)}

                <ScrollView
                refreshControl={
                    <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />}>
                    <Animated.View style={[{ height: '100%' }, { opacity: fade }]}>
                        <Animated.View style={[{opacity:fade}]}>
                        <BrandsListHorizontal brands={brands} isFetching={isFetching} navigation={navigation} />
                        </Animated.View>
                        <View>
                        <ProductHorizontal products={gamingMouse} name={API_string.GAMINGMOUSE.name} navigation={navigation} />
                        <ProductHorizontal products={officeMouse} name={API_string.OFFICEMOUSE.name} navigation={navigation} />
                        <ProductHorizontal products={gamingKbs} name={API_string.GAMINGKEYBOARD.name} navigation={navigation} />
                        </View>
                    </Animated.View>
                </ScrollView>

            </View>
        </View>

    )
}

export default Home