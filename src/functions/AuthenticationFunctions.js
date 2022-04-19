import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import APIconstants from "../constants/APIconstants";
import Storage from "../constants/Storage"
export async function IsExistToken() {
    let token = await AsyncStorage.getItem(Storage.LOCAL_ACCESS_TOKEN);
    console.log("TOKEN: ", token)
    if (token != null) {
        return true;
    } else {
        return false;
    }
}

export async function LoginWithUsernamePassword(username, password) {
    let api_url = APIconstants.BASE_URL + APIconstants.LOGIN

    var dataLogin = new FormData();
    dataLogin.append('username',username);
    dataLogin.append('password',password);
    let requestOptions = {
        method: 'POST',
        body: dataLogin,
        redirect: 'follow'
      };

    return await fetch(api_url,requestOptions)
        .then(response => response.json())
        .then(result => {return result})
        .catch(error => console.log("Login : ", error))
}