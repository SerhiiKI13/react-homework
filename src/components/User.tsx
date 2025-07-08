import type {FC} from "react";
import type {Users} from "../models/IUser.ts";
import {useNavigate} from "react-router-dom";

type Props = {
    user: Users
}

export const User: FC<Props> = ({user}) => {
    const navigate = useNavigate();
const handleClick = (id: string) =>{
    navigate('carts/' + id);
}

    return (
        <div>
            <p>{user.firstName}</p>
            <button onClick={() =>{
                handleClick(user.id.toString())
            }}>carts</button>
        </div>
    );
};