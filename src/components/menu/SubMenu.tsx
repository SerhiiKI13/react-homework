import {Link} from "react-router-dom";

export const SubMenu = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'}>JsonPlaceHolder</Link></li>
            <li><Link to={'dummyjson'}>DummyJson</Link></li>
        </ul>
    );
};