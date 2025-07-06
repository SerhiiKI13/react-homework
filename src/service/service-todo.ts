import type {ITodo} from "../models/ITodo.ts";

export const todoApi = {
    allTodos: () =>{
     const todos: Promise<ITodo[]> =   fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json());
     return todos;
    }
}