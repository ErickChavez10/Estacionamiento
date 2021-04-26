// const SERVER_IP = 'http://192.168.100.23:3000/'
// const SERVER_IP = 'http://192.168.1.7:3000/'
// const SERVER_IP = 'http://192.168.10.197:3000/'
import { SERVER_IP } from "../config/index";
// const SERVER_IP = 'http://192.168.10.197:3000/';
// const SERVER_IP = 'https://estacionamiento-real-time.herokuapp.com/';

const URL_LIST = 'list'
const URL_ADD_USER = 'addUser'
const URL_LOGIN = 'login'


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
    let n = await fetch(URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(req),
    })
    const data = await n.json()
    return data
}

export const login = async (email, password) => {
    const URL = SERVER_IP + URL_LOGIN;

    const req = {
        email,
        password
    }
    let n = await fetch(URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(req),
    })
    
    const data = await n.json()
    console.log("[data]",data);
    return data.res
}