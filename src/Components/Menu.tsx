import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/cars'}>Cars Available</Link></li>
            <li><Link to={'/cars/create'}>Create Car</Link></li>
        </ul>
    );
};