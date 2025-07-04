import type {ISimpsons} from "../models/ISimpsons.ts";
import type {FC, ReactNode} from "react";

type CharacterComponentProps = {
    character: ISimpsons;
    children: ReactNode;
}
export const CharacterComponent: FC<CharacterComponentProps> = ({character,children}) => {
    return (
        <div>
            <img src={character.photo} alt={character.name}/>
        <ul>
            <li>{character.name}</li>
            <li>{character.surname}</li>
            <li>{character.age}</li>
            <li>{children}</li>
        </ul>
        </div>
    );
};