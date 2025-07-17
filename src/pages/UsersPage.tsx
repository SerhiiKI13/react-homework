import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {userSliceActions} from "../redux/slice/userSlice.ts";
import {User} from "../components/User.tsx";
import {Loader} from "../components/loaders/Loader.tsx";

export const UsersPage = () => {
    const {users,changeLoading} = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {!changeLoading && <div className={'loader'}><Loader/></div>}
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};