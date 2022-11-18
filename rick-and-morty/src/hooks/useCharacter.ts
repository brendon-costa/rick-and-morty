import {useEffect, useState} from "react";
import api from "../services/api";
import {getCharacter} from "../services/character-service";
import {CharacterModel} from "../model/CharacterModel";

export const useCharacter = (pageNumber: number): CharacterModel[] => {
    const [characters, setCharacters] = useState<CharacterModel[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getCharacter(pageNumber);
            setCharacters(response.data.results);
        };
        fetchData();
    }, [pageNumber]);
    return characters;
}
