import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";
import {CreateCar} from "../pages/CreateCar.tsx";

export const router = createBrowserRouter([
    {path: '/', element: <App/>,children:[
            {path: 'cars',element:<CarsPage/>},
            {path:'cars/create',element:<CreateCar/>}
        ]}
])