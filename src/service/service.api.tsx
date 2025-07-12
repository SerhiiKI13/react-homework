import type {IUsersMain, IUsers} from "../models/IUser.ts";

const urlS = "https://dummyjson.com";
export const dummyApiService = {
    getUsers: async (page:string): Promise<IUsers[]> => {
        const limit = 10;
        const skip = +page * limit - 10;
        const response: IUsersMain =
            await fetch(urlS + '/users'+`?limit=${limit}&skip=${skip}`)
            .then(response => response.json());
        return response.users;
    }
}