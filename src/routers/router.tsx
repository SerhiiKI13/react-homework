import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UsersJsonPage} from "../pages/UsersJsonPage.tsx";
import {UsersDummyPage} from "../pages/UsersDummyPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {PostsJsonPage} from "../pages/PostsJsonPage.tsx";
import {PostsDummy} from "../pages/PostsDummy.tsx";
import {CommentsJsonPage} from "../pages/CommentsJsonPage.tsx";
import {CommentsDummy} from "../pages/CommentsDummy.tsx";

export const router = createBrowserRouter([
    {path: '/', element: <App/>,children:[
            {path: 'users',element:<UsersPage/>,children: [
                    {path: 'jsonplaceholder',element:<UsersJsonPage/>},
                    {path:'dummyjson', element: <UsersDummyPage/>}
                ]},
            {path: 'posts',element:<PostsPage/>,children: [
                    {path: 'jsonplaceholder',element:<PostsJsonPage/>},
                    {path:'dummyjson', element: <PostsDummy/>}
                ]},
            {path: 'comments',element:<CommentsPage/>,children: [
                    {path: 'jsonplaceholder',element:<CommentsJsonPage/>},
                    {path:'dummyjson', element: <CommentsDummy/>}
                ]},
        ]}
])