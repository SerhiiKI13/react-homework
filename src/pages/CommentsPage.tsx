import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {commentSliceActions} from "../redux/slice/commentSlice.ts";

export const CommentsPage = () => {
    const {comments} = useAppSelector(state => state.commentSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    },[])
    return (
        <div>{comments.map(comment => <div>{comment.id}</div>)}</div>
    );
};