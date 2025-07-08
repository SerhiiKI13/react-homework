import {useEffect, useState} from "react";
import type {IUserJson} from "../../../models/IJsonplaceholder/IUsersJson.ts";
import {apiJsonPlaceHolder} from "../../../service/service.api.ts";
import {UserJson} from "./UserJson.tsx";

export const UsersJson = () => {
    const [users,setUsers] = useState<IUserJson[]>([]);
    useEffect(() => {
        apiJsonPlaceHolder.getAllUsers().then(value =>  setUsers(value));
    },[])
    return (
        <>
            {users.map((user) => <UserJson key={user.id} user={user}/>)}
        </>
    );
};