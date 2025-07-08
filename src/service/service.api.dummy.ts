import type {IUserDummy, Users} from "../models/IDummyJson/IUserDummy.ts";
import type {IPostsMain, Posts} from "../models/IDummyJson/IPostDummy.ts";
import type {ICommentDummy, ICommentsMain} from "../models/IDummyJson/IComments.ts";

const url = 'https://dummyjson.com';
export const serviceDummy = {
    getAllUsersByDummy: async (): Promise<Users[]> => {
        const data: IUserDummy = await fetch(url + '/users').then(res => res.json());
        return data.users;
    },
    getAllPostsByDummy: async (): Promise<Posts[]> => {
        const data: IPostsMain = await fetch(url + '/posts').then(res => res.json());
        return data.posts;
    },
    getAllCommentsByDummy: async(): Promise<ICommentDummy[]> =>{
        const data: ICommentsMain = await fetch(url + '/comments').then(res => res.json());
        return data.comments;
    }
}