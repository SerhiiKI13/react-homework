import type {FC} from "react";
import type {ITodo} from "../models/ITodo.ts";

type Props = {
    todo: ITodo;
}

export const TodoComponent: FC<Props> = ({todo}) => {
    return (
        <div className={'parent'}>
            <div className="card">
                <div className="content-box">
                    <span className="card-title">{todo.id}</span>
                    <p className="card-content">
                        {todo.title}
                    </p>
                    <span className="see-more">See More</span>
                </div>
                <div className="date-box">
                    <span className="month">JUNE</span>
                    <span className="date">29</span>
                </div>
            </div>
        </div>
    );
};