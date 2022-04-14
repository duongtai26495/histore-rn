import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getBrands } from '../services/api/getDataFromApi'
import API_string from '../constants/API_string'
import brand_styles from '../screens/Home/brand_styles'
import Navigation_path from '../constants/Navigation_path'
const BrandsListHorizontal = ({navigation}) => {

    useEffect(()=>{
        getBrandsList()
    },[])

    const [brands, setBrands] = useState([])

    const getBrandsList = async () => setBrands(await getBrands()) 


    const itemBrands = ({ item }) => {
        const url = API_string.BASE_URL + "api/images/" + item.image_url
        return (
            <TouchableOpacity style={brand_styles.itemBox} >
                <Text style={brand_styles.item} key={item.id}>{item.name}</Text>
                <Image source={{ uri: url }} style={brand_styles.image} />
            </TouchableOpacity>
        )
    }

        return (
                <FlatList
                    data={brands}
                    renderItem={itemBrands}
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                />
        )
}

export default BrandsListHorizontal