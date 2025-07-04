import {simpsons} from "../data/simpsons.ts";
import {CharacterComponent} from "./CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <>
            {simpsons.map((character, index) => <CharacterComponent key={index} character={character}>
                {character.info}
            </CharacterComponent>)}
        </>
    );
};