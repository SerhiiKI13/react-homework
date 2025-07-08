import type {IPostsJson} from "../../../models/IJsonplaceholder/IPostsJson.ts";
import type {FC} from "react";

type Props = {
    post: IPostsJson;
}
export const PostJsonPlaceHolder: FC<Props> = ({post}) => {
    return (
        <ul>
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
        </ul>
    );
};