import type {FC} from "react";
import type {ICommentsJson} from "../../../models/IJsonplaceholder/ICommentsJson.ts";
type Props = {
    comment: ICommentsJson;
}
export const CommentJson: FC<Props> = ({comment}) => {
    return (
        <div>
            <p>{comment.id}</p>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};