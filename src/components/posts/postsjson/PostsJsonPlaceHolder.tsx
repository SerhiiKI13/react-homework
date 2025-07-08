import {useEffect, useState} from "react";
import type {IPostsJson} from "../../../models/IJsonplaceholder/IPostsJson.ts";
import {apiJsonPlaceHolder} from "../../../service/service.api.ts";
import {PostJsonPlaceHolder} from "./PostJsonPlaceHolder.tsx";

export const PostsJsonPlaceHolder = () => {
    const [posts, setPosts] = useState<IPostsJson[]>([]);
    useEffect(() => {
        apiJsonPlaceHolder.getAllPosts().then(value => setPosts(value));
    },[])
    return (
        <>
            {posts.map((post) => <PostJsonPlaceHolder key={post.id} post={post} />)}
        </>
    );
};