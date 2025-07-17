import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slice/userSlice.ts";
import {postActions} from "../redux/slice/postSlice.ts";
import {commentSliceActions} from "../redux/slice/commentSlice.ts";
import {User} from "../components/User.tsx";

export const ComplexPage = () => {
const {userSlice:{users},postSlice:{post},commentSlice:{comments}} = useAppSelector(state => state);
const dispatch = useAppDispatch();
    useEffect(() => {
        if (!users.length){
            dispatch(userSliceActions.loadUsers())
        }
        if (!post.length){
            dispatch(postActions.loadPosts())
        }
        if (!comments.length){
            dispatch(commentSliceActions.loadComments())
        }
    }, []);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
            {post.map(post => <div>{post.id}</div>)}
            {comments.map(comment => <div>{comment.id}</div>)}
        </div>

    );
};