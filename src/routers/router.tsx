import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {CommentsPage} from "../page/CommentsPage.tsx";
import {UsersPage} from "../page/UsersPage.tsx";
import {PostsPage} from "../page/PostsPage.tsx";
import {ProductsPage} from "../page/ProductsPage.tsx";

export const router = createBrowserRouter([
    {path: '/',element: <App/>,children:[
            {path: '/users',element: <UsersPage/>},
            {path: '/posts',element: <PostsPage/>},
            {path: '/comments',element: <CommentsPage/>},
            {path: '/products',element: <ProductsPage/>},
        ]}
])