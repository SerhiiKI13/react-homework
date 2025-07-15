import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";

export const AA = () => {
    const {theme} = useContext(MyContext);
    return (
        <div className={theme}>{theme}</div>
    );
};