import type {ICommentsJson} from "../../../models/IJsonplaceholder/ICommentsJson.ts";
import {apiJsonPlaceHolder} from "../../../service/service.api.ts";
import {CommentJson} from "./CommentJson.tsx";
import {useEffect, useState} from "react";

export const CommentsJson = () => {
    const [comments, setComments] = useState<ICommentsJson[]>([]);
    useEffect(() => {
        apiJsonPlaceHolder.getAllComments().then(value => setComments(value));
    },[])
    return (
        <>
            {comments.map((comment) => <CommentJson key={comment.id} comment={comment} />)}
        </>
    );
};