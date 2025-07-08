import {SubMenu} from "../components/menu/SubMenu.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
        <SubMenu/>
            <Outlet/>
        </>
    );
};