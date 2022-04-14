import { View, Text, Image, FlatList, Animated, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import API_string from '../constants/API_string'
import { getDataFromAPI } from '../services/api/getDataFromApi'
import home_styles from '../screens/Home/home_styles'
import product_styles from '../screens/Home/product_styles'
import Icons_path from '../constants/Icons_path'
import Navigation_path from '../constants/Navigation_path'
const ProductHorizontal = (props) => {
    useEffect(()=>{
        wlcEff()
    },[])

    const {navigation} = props;
    const {products} = props;
    const {name} = props;

    const fade = useRef(new Animated.Value(0)).current;

    const wlcEff = () =>{
        Animated.sequence([
            Animated.timing(fade, {toValue:1, current:1000, useNativeDriver:true})
        ]).start()
    }


    const itemProduct = ({ item }) => {
        const p_id = item.id;
        const p_name = item.name;
        const p_quantity = item.quantity;
        const p_price = item.price;
        const p_sale_price = item.sale_price;
        const p_sale_rate = item.sale_rate;
        const p_img = API_string.BASE_URL + "api/images/" + item.image_url;
        const p_category = item.category.name;
        const p_brand_image = API_string.BASE_URL + "api/images/" + item.brand.image_url;
        const p_brand = item.brand.name;
        return (
            <Animated.View style={[product_styles.row, { opacity: fade }]} >
                <TouchableOpacity onPress={() => { navigation.navigate(Navigation_path.PRODUCTDETAIL, { itemId: p_id }) }} key={p_id}>
                    <View style={product_styles.category_name}><Image source={{ uri: p_brand_image }} style={product_styles.logoBrands} /></View>
                    <Image source={{ uri: p_img }} style={product_styles.p_img} />
                    <Text numberOfLines={1} style={product_styles.p_name}>{p_name}</Text>
                    <Text style={product_styles.p_brand}>{p_category}</Text>
                    <View style={product_styles.bottomView}>
                        <Text style={product_styles.sale_price}>{'$ ' + p_sale_price}</Text>

                        <TouchableOpacity>
                            <Image source={Icons_path.CARTS} style={product_styles.cartIcon} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        )

    }

    return (
        <View>
            <View style={home_styles.viewAllHeader}>
                <Text style={home_styles.headerBrandName}>{name}</Text>
                <TouchableOpacity>
                    <Text style={home_styles.headerViewAll}>{'View all'}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={home_styles.flatlist}
                data={products}
                renderItem={itemProduct}
                horizontal={true}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ProductHorizontal