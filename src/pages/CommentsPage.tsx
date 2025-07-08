import {SubMenu} from "../components/menu/SubMenu.tsx";
import {Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <>
        <SubMenu/>
            <Outlet/>
        </>
    );
};