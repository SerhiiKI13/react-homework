import {login} from "../../service/api.service.ts";
import {type FormEvent, useState} from "react";

export const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = (e: FormEvent) =>{
        e.preventDefault();
       login({username,password})
    }
    return (
        <form onSubmit={handleClick}>
            <input type="text" name="username"
                   value={username} onChange =
                       {(event) => setUsername(event.target.value)} />
            <input type="text" name="password" value={password}
                   onChange={event => setPassword(event.target.value)} />
            <button>Login</button>
        </form>
    );
};