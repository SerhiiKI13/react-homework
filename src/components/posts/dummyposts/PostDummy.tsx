import type {FC} from "react";
import type {Posts} from "../../../models/IDummyJson/IPostDummy.ts";
type Props = {
    post: Posts;
}
export const PostDummy: FC<Props> = ({post}) => {
    return (
        <ul>
            <li>ID: {post.id}</li>
            <li>TITLE: {post.title}</li>
            <li>BODY: {post.body}</li>
            <li>TAGS: {post.tags.map(value => <div>#{value}</div>)}</li>
            <li>LIKES: {post.reactions.likes}</li>
            <li>DISLIKES: {post.reactions.dislikes}</li>
            <li>VIEWS: {post.views}</li>
        </ul>
    );
};