import type {IUsersApi, Users} from "../models/IUser.ts";
import type {Carts, ICarts} from "../models/ICarts.ts";

const url = 'https://dummyjson.com';
export const getAllUsers = async (): Promise<Users[]> => {
    const response: IUsersApi = await fetch(url + '/users').then(res => res.json());
    return response.users;
}

export const getCartsByUserID = async (id: string): Promise<Carts[]> => {
    const response : ICarts = await fetch(url + '/carts/user/' + id).then(res => res.json());
    return response.carts
}