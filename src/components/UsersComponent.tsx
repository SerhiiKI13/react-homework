import type {Users} from "../models/IUser.ts";
import {useEffect, useState} from "react";
import {getAllUsers} from "../service/service.api.ts";
import {User} from "./User.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<Users[]>([]);
    useEffect(() => {
        getAllUsers().then(value => setUsers(value));
    }, []);
    return (
        <>
            {users.map((user) => <User key={user.id} user={user} />)}
        </>
    );
};