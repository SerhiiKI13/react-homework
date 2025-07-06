import {useEffect, useState} from "react";
import type {ITodo} from "../models/ITodo.ts";
import {todoApi} from "../service/service-todo.ts";
import {TodoComponent} from "./TodoComponent.tsx";

export const TodoComponents = () => {
    const [todos,setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        todoApi.allTodos().then(value => setTodos(value));
    },[])
    return (
        <>
        <div className={'main'}>{todos.map(value => <TodoComponent todo={value} key={value.id}/>)}</div>
        </>
    );
};