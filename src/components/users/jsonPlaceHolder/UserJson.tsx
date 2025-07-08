import type {FC} from "react";
import type {IUserJson} from "../../../models/IJsonplaceholder/IUsersJson.ts";

type Props = {
    user: IUserJson;
}
export const UserJson: FC<Props> = ({user}) => {
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.address.geo.lat}</p>
            <p>{user.address.geo.lng}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
        </div>
    );
};