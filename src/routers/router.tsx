import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcePage} from "../pages/AuthResourcePage.tsx";

export const router = createBrowserRouter([
    {path:'/', element:<MainLayout/>,children:[
            {path:'login',element:<LoginPage/>},
            {path: '/auth/resources', element: <AuthResourcePage/>}
        ]}
])