import {useParams} from "react-router-dom";
import type {Carts} from "../models/ICarts.ts";
import {useEffect, useState} from "react";
import {getCartsByUserID} from "../service/service.api.ts";
import {Cart} from "./Cart.tsx";

export const CartsComponent = () => {
    const {id} = useParams();
    const [cartItems, setCartItems] = useState<Carts[]>([]);
    useEffect(() => {
        if (id){
            getCartsByUserID(id).then(value => setCartItems(value));
        }
    }, [id]);
    return (
        <>{cartItems.map(value => <Cart key={value.id} item={value}/>)}</>
    );
};