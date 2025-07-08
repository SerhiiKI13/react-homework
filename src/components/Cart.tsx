import type {FC} from "react";
import type {Carts} from "../models/ICarts.ts";

type Props = {
    item:Carts
}
export const Cart: FC<Props> = ({item}) => {
    return (
        <div>
            <h2>{item.total}</h2>
        </div>
    );
};