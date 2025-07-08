import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";

export const router = createBrowserRouter([
    {path: '/',element:<App/>,children:[
            {path:'users',element:<UsersPage/>,children:[
                    {path:'carts/:id',element:<CartsPage/>}
                ]}
        ]}

])