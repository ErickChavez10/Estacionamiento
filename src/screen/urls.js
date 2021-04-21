// const SERVER_IP = 'http://192.168.100.23:3000/'
// const SERVER_IP = 'http://192.168.1.7:3000/'
// const SERVER_IP = 'http://192.168.10.197:3000/'
import { SERVER_IP } from "../config/index";
// const SERVER_IP = 'http://192.168.10.197:3000/';
// const SERVER_IP = 'https://estacionamiento-real-time.herokuapp.com/';

const URL_LIST = 'list'
const URL_ADD_USER = 'addUser'


export const getList = async () => {
    const URL = SERVER_IP + URL_LIST;
    const a = await (await fetch(URL)).json()

    return a;
}
export const addUser = async (r_name, r_mod_auto, r_email, r_password, r_password_confirm) => {
    const req = {
        name: r_name,
        auto: r_mod_auto,
        email: r_email,
        password: r_password,
        password_confirm: r_password_confirm
    }
    const URL = SERVER_IP + URL_ADD_USER;
    fetch(URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(req),
    })
        .then(function (res) {console.log(res)})
        .catch(function (res) {console.log(res)})
}