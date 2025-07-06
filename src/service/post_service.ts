import type {IPost} from "../models/IPost.ts";

export const postsApi = {
    allPosts: () =>{
        const posts: Promise<IPost[]> = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
        return posts;
    }
}