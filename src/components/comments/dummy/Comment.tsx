import type {FC} from "react";
import type {ICommentDummy} from "../../../models/IDummyJson/IComments.ts";

type Props = {
    comment: ICommentDummy;
}
export const Comment: FC<Props> = ({comment}) => {
    return (
        <div>
            <p>{comment.id}</p>
            <p>{comment.user.fullName}</p>
            <p>{comment.user.username}</p>
            <p>{comment.likes}</p>
            <p>{comment.body}</p>
        </div>
    );
};