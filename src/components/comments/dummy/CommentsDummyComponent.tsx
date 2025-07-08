import {serviceDummy} from "../../../service/service.api.dummy.ts";
import {Comment} from "./Comment.tsx";
import type {ICommentDummy} from "../../../models/IDummyJson/IComments.ts";
import {useEffect, useState} from "react";

export const CommentsDummyComponent = () => {
    const [comments,setComments] = useState<ICommentDummy[]>([]);
    useEffect(() => {
        serviceDummy.getAllCommentsByDummy().then(value => setComments(value));
    },[])
    return (
        <>
            {comments.map(value => <Comment comment={value} key={value.id}/>)}
        </>
    );
};