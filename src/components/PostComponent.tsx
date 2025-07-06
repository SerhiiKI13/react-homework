import type {FC} from "react";
import type {IPost} from "../models/IPost.ts";

type Props = {
    post: IPost;
}
export const PostComponent: FC<Props> = ({post}) => {
    return (
        <div>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <p>Id: {post.id}</p>
                    </div>
                    <div className="card-back">
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};