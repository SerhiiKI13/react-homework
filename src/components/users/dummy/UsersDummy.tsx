import type {Users} from "../../../models/IDummyJson/IUserDummy.ts";
import {useEffect, useState} from "react";
import {serviceDummy} from "../../../service/service.api.dummy.ts";
import {UserDummy} from "./UserDummy.tsx";

export const UsersDummy = () => {
    const [users, setUsers] = useState<Users[]>([]);
    useEffect(() => {
        serviceDummy.getAllUsersByDummy().then(value => setUsers(value));
    },[])
    return (
        <>
            {users.map((user) => <UserDummy key={user.id} user={user} />)}
        </>
    );
};