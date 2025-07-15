import {useEffect, useState} from "react";
import {loadAuthProducts} from "../../service/api.service.ts";
import type {IProducts} from "../../models/IProduct.ts";

export const ProductsComponent = () => {
    const [products, setProducts] = useState<IProducts[]>([]);
    useEffect(() => {
       loadAuthProducts().then(value => setProducts(value));
    }, []);
    return (
        products && products.length > 0 ? (
            <div>
                {products.map(prod => (
                    <div key={prod.id}>{prod.id}</div>
                ))}
            </div>
        ) : (
            <div>Ничего не найдено</div>
        )

);
};