import type {Posts} from "../../../models/IDummyJson/IPostDummy.ts";
import {serviceDummy} from "../../../service/service.api.dummy.ts";
import {useEffect, useState} from "react";
import {PostDummy} from "./PostDummy.tsx";

export const PostsDummyComponent = () => {
    const [posts, setPosts] = useState<Posts[]>([]);
    useEffect(() => {
        serviceDummy.getAllPostsByDummy().then(value => setPosts(value));
    },[])
    return (
        <>
            {posts.map((post) => <PostDummy key={post.id} post={post} />)}
        </>
    );
};