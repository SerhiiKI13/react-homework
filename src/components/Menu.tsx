import {Link} from "react-router-dom";

export const Menu = () => {
    return (

        <div className="nav">
            <div className="container">
                <Link to={'/'} className={'btn'}>Home</Link>
                <Link to={'/users'} className={'btn'}>Users</Link>
                <Link to={'/posts'} className={'btn'}>Posts</Link>
                <Link to={'/comments'} className={'btn'}>Comments</Link>
                <Link to={'/products'} className={'btn'}>Products</Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" height={60} width={400} overflow="visible" className="outline">
                    <rect strokeWidth={6} fill="transparent" height={60} width={500} y={0} x={0} pathLength={100} className="rect" />
                </svg>
            </div>
        </div>


);
};