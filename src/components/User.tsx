import type {FC} from "react";
import type {IUser} from "../models/IUser.ts";

type  UserProps = {
    user: IUser
}
export const User: FC<UserProps> = ({user}) => {
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
        </div>
    );
};