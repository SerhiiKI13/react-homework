import type {IUserJson} from "../models/IJsonplaceholder/IUsersJson.ts";
import type {IPostsJson} from "../models/IJsonplaceholder/IPostsJson.ts";
import type {ICommentsJson} from "../models/IJsonplaceholder/ICommentsJson.ts";

const url = 'https://jsonplaceholder.typicode.com'
export const apiJsonPlaceHolder = {
    getAllUsers: async (): Promise<IUserJson[]> => {
        return await fetch(url + '/users').then(res => res.json());
    },
    getAllPosts: async (): Promise<IPostsJson[]> => {
        return await fetch(url + '/posts').then(res => res.json());
    },
    getAllComments: async (): Promise<ICommentsJson[]> => {
        return await fetch(url + '/comments').then(res => res.json());
}
}


