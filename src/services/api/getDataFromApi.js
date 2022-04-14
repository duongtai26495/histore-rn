import axios from "axios"
import API_string from "../../constants/API_string"


export async function getBrands() {
    let url = API_string.BASE_URL + API_string.BRANDS;
    return await axios.get(url)
        .then(response => {
            const result = response.data;
            return result;
        })
        .catch(error => console.log(error))
}

export async function getDataFromAPI(code_name) {
    let url = API_string.BASE_URL + API_string.P_CATE + code_name;
    return await axios.get(url)
        .then(response => {
            const result = response.data;
            return result;
        })
        .catch(error => console.log(error))
}

