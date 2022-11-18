import {useEffect, useState} from "react";
import api from "../services/api";
import {getCharacter} from "../services/character-service";
import {CharacterModel} from "../model/CharacterModel";

export const useCharacter = (endPoint: string): CharacterModel[] => {
    const [characters, setCharacters] = useState<CharacterModel[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getCharacter();
            setCharacters(response.data.results);
        };
        fetchData();
    }, [api.getUri() + endPoint]);
    return characters;
}
