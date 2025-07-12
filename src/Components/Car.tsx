import type {FC} from "react";
import type {ICar} from "../models/ICars.ts";

type CarProps = {
    car: ICar
}
export const Car: FC <CarProps> = ({car}) => {
    return (
        <ul>
            <li>ID: {car.id}</li>
            <li>Brand: {car.brand}</li>
            <li>Year: {car.year}</li>
            <li>Price: {car.price}</li>
        </ul>
    );
};