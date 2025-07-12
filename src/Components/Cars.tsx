import {useEffect, useState} from "react";
import type {ICar} from "../models/ICars.ts";
import {serviceApiCars} from "../service/service.api.get.ts";
import {Car} from "./Car.tsx";

export const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        serviceApiCars.getAllCars().then(value => setCars(value));
    }, []);
    return (
        <div>
            {cars.map((car) => <Car key={car.id} car={car}/>)}
        </div>
    );
};