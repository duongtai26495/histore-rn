import { View, Text, SafeAreaView, Image, Animated, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Colors from '../../assets/color/Colors';
import product_detail_styles from './product_detail_styles';
import Variable_string from '../../constants/Variable_string';
import API_string from '../../constants/API_string';
import TopComponent from '../../components/TopComponent';
import CustomIndicator from '../../components/CustomIndicator';

const ProductDetail = ({ navigation, route }) => {
    const { itemId } = route.params;
    const [product, setProduct] = useState()
    const [isLoading, setLoading] = useState(false)

    const fade = useRef(new Animated.Value(0)).current;
    const slide = useRef(new Animated.Value(50)).current;
    const wlcEff = () => {
        Animated.parallel([
            Animated.timing(fade, { toValue: 1, duration: 1000, useNativeDriver: true }),
            Animated.timing(slide, { toValue: 1, duration: 1000, useNativeDriver: true }),
        ]).start();
    }

    useEffect(() => {
        getProducts()
        wlcEff()
    }, [])

    const getProducts = async () => {
        setLoading(true)
        if (typeof itemId !== 'undefined') {
            const url = API_string.BASE_URL + API_string.PRODUCTS + "/" + itemId
            var option = {
                method: 'GET',
            }
            await fetch(url, option)
                .then(response => response.json())
                .then(result => result.result)
                .then(data => setProduct(data))
                .catch(error => console.log(error))
        }
        setLoading(false)
    }

    const productItem = () => {
        if (typeof product !== 'undefined') {
            const p_id = product.id;
            const p_name = product.name;
            const p_quantity = product.quantity;
            const p_price = product.price;
            const p_sale_price = product.sale_price;
            const p_sale_rate = product.sale_rate;
            const p_img = API_string.BASE_URL + "api/images/" + product.image_url;
            const p_category = product.category.name;
            const p_brand_image = API_string.BASE_URL + "api/images/" + product.brand.image_url;
            const p_brand = product.brand.name;
            const p_description = product.description;
            return (
                <Animated.View style={[{ opacity: fade }]}>
                    <View style={product_detail_styles.headerProduct}>
                        <Image source={{ uri: p_img }} style={product_detail_styles.imgProduct} />
                    </View>
                    <Animated.View style={[{ opacity: fade }, { transform: [{ translateY: slide }] }]}>
                        <View style={product_detail_styles.contentProduct}>
                            <Text style={product_detail_styles.p_name}>{p_name}</Text>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={product_detail_styles.header}>{'Category: '}</Text>
                                <Text style={product_detail_styles.p_cate}>{p_category}</Text>
                            </View><View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={product_detail_styles.header}>{'Brand: '}</Text>
                                <Text style={product_detail_styles.p_brand}>{p_brand}</Text>
                            </View>
                            {p_description !== null ?
                                (
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={product_detail_styles.header}>{'Description: '}</Text>
                                        <Text style={product_detail_styles.p_desc}>{p_description}</Text>
                                    </View>
                                ) :
                                null}

                        </View>

                        <View style={product_detail_styles.funcProduct}>
                            <Text style={product_detail_styles.p_sale_price}>{'$' + p_sale_price}</Text>
                            <TouchableOpacity style={product_detail_styles.p_add_to_cart}>
                                <Text style={product_detail_styles.p_add_to_cart_label}>{'Add to cart'}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={product_detail_styles.btnBuyNow}>
                            <Text style={product_detail_styles.buyNowLabel}>{Variable_string.BUYNOW.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View >
            )
        }
    }
    return (
        <View style={product_detail_styles.container}>
            <SafeAreaView>
                <TopComponent navigation={navigation} />
            </SafeAreaView>
            {isLoading ? (
                    <CustomIndicator />
                ) : (null)}
            <ScrollView>
                {productItem()}
            </ScrollView>
        </View>
    )
}

export default ProductDetail