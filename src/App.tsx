import './App.css'
import {useFetch} from "./hooks/useFetch.ts";
import type {IUsers} from "./models/IUser.ts";

function App() {
const users = useFetch<IUsers>('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      {users.map((user) => <div key={user.id}>{user.id} && {user.username}</div>)}
    </div>
  )
}

export default App
