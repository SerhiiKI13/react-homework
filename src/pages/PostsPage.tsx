import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postActions} from "../redux/slice/postSlice.ts";

export const PostsPage = () => {
    const {post} = useAppSelector(state => state.postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postActions.loadPosts())
    },[])
    return (
        <>
            {post.map(post => <div>{post.id} && {post.title}</div>)}
        </>
    );
};