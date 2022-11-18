import {useEffect, useState} from "react";
import {getCharacter} from "../services/character-service";
import {CharacterModel} from "../model/CharacterModel";

export const useCharacter = (pageNumber: number): any => {
    const [characters, setCharacters] = useState<CharacterModel[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getCharacter(pageNumber);
            setCharacters(response.data.results);
        };
        fetchData();
    }, [pageNumber]);
    return {characters};
}
