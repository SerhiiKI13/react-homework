import {useEffect, useState} from "react";
import {dummyApiService} from "../service/service.api.tsx";
import type {IUsers} from "../models/IUser.ts";
import {useSearchParams} from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState<IUsers[]>([]);
    const [query] = useSearchParams();
    useEffect(() => {
        const p = query.get('pg');
        dummyApiService.getUsers(p?.toString() || '1').then(value => setUsers(value));
    }, [query]);
    return (
        <>
            {users.map((user) => <div key={user.id}>{user.id}</div>)}

        </>
    );
};