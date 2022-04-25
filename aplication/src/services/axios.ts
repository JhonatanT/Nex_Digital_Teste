import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {

    const api = axios.create({
        baseURL: 'http://localhost:3030/'
    });


    const { 'Nextoken': token } = parseCookies(ctx);
    console.log(token);

    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    return api

}