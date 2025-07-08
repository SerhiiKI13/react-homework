import type {FC} from "react";
import type {Users} from "../../../models/IDummyJson/IUserDummy.ts";

type Props = {
    user: Users;
}
export const UserDummy: FC<Props> = ({user}) => {
    return (
        <div>
            <h2>
                {user.firstName} {user.lastName} ({user.maidenName})
            </h2>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Birth Date: {user.birthDate}</p>
            <img src={user.image} alt={user.firstName} width="128" />
            <p>Blood Group: {user.bloodGroup}</p>
            <p>Height: {user.height} cm</p>
            <p>Weight: {user.weight} kg</p>
            <p>Eye Color: {user.eyeColor}</p>
            <p>Hair Color: {user.hair.color}</p>
            <p>Hair Type: {user.hair.type}</p>
            <p>IP Address: {user.ip}</p>

            <h3>Address</h3>
            <p>{user.address.address}</p>
            <p>City: {user.address.city}</p>
            <p>State: {user.address.state} ({user.address.stateCode})</p>
            <p>Postal Code: {user.address.postalCode}</p>
            <p>Country: {user.address.country}</p>
            <p>Coordinates: {user.address.coordinates.lat}, {user.address.coordinates.lng}</p>

            <p>MAC Address: {user.macAddress}</p>
            <p>University: {user.university}</p>

            <h3>Bank Info</h3>
            <p>Card Number: {user.bank.cardNumber}</p>
            <p>Card Type: {user.bank.cardType}</p>
            <p>Card Expiry: {user.bank.cardExpire}</p>
            <p>Currency: {user.bank.currency}</p>
            <p>IBAN: {user.bank.iban}</p>

            <h3>Company</h3>
            <p>Department: {user.company.department}</p>
            <p>Name: {user.company.name}</p>
            <p>Title: {user.company.title}</p>
            <p>Company Address: {user.company.address.address}</p>
            <p>City: {user.company.address.city}</p>
            <p>State: {user.company.address.state} ({user.company.address.stateCode})</p>
            <p>Postal Code: {user.company.address.postalCode}</p>
            <p>Country: {user.company.address.country}</p>
            <p>Coordinates: {user.company.address.coordinates.lat}, {user.company.address.coordinates.lng}</p>

            <p>EIN: {user.ein}</p>
            <p>SSN: {user.ssn}</p>
            <p>User Agent: {user.userAgent}</p>

            <h3>Crypto Wallet</h3>
            <p>Coin: {user.crypto.coin}</p>
            <p>Wallet Address: {user.crypto.wallet}</p>
            <p>Network: {user.crypto.network}</p>

            <p>Role: {user.role}</p>
        </div>
    );
};