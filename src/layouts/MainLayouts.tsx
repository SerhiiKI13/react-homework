import {Outlet} from "react-router-dom";
import {Menu} from "../components/Menu.tsx";

export const MainLayouts = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};