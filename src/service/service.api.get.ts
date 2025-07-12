import axios from 'axios';
import type {ICar} from "../models/ICars.ts";
 const axiosInstance = axios.create({
baseURL: 'http://owu.linkpc.net/carsAPI/v1',
headers:{"Content-Type": "application/json"},
})

export const serviceApiCars = {
    getAllCars: async (): Promise<ICar[]> =>{
        const {data} = await axiosInstance.get(`/cars`);
        return data;
    },
    saveCar: async (car: ICar): Promise<ICar> =>{
        const {data} = await axiosInstance.post(`/cars`, car);
        return data;
    }

}
