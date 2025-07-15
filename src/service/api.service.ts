import axios from 'axios';
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProductMainApi, IProducts} from "../models/IProduct.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {},
})
type LoginData = {
    username: string;
    password: string;
}
const retriveLocaleStorage = <T>(key: string) => {
    const object = localStorage.getItem(key) || '';
    if (!object) {
        return {} as T
    }
    const parsed = JSON.parse(object);
    return parsed as T;

}

axiosInstance.interceptors.request.use((value) => {
    if (value.method?.toUpperCase() === "GET") {
        value.headers.Authorization = 'Bearer ' + retriveLocaleStorage<IUserWithTokens>('userAuth').accessToken;
    }
    return value;
})

export const login = async ({username, password}: LoginData) => {
    const {data: userWithTokens} =
        await axiosInstance.post<IUserWithTokens>('/login', {username, password});
    localStorage.setItem('userAuth', JSON.stringify(userWithTokens));
}

export const loadAuthProducts = async (): Promise<IProducts[]> => {
    const response = await axiosInstance.get<IProductMainApi>('/products');
    return response.data.products
}

export const refresh = async () => {
    const refreshToken =    retriveLocaleStorage<IUserWithTokens>('userAuth').refreshToken;
   const axiosResponse = await axiosInstance.post<ITokenPair>('/refresh', {refreshToken});
}

//export const loadAuthProducts = async (): Promise<IProducts[]> => {
//     const {data: {products}} = await axiosInstance.get<IProductMainApi>('/products');
//     return products
// }