import {useEffect, useState} from "react";
import type {IPost} from "../models/IPost.ts";
import {postsApi} from "../service/post_service.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostComponents = () => {
    const [posts,setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        postsApi.allPosts().then(value => setPosts(value));
    },[])
    return (
        <div className={'main'}>{posts.map(post => <PostComponent post={post} key={post.id}/>)}</div>
    );
};