import {useEffect, useState} from "react";
import {getCharacter} from "../services/character-service";
import {CharacterModel} from "../model/CharacterModel";

export const useCharacter = (pageNumber: number, searchName: string): any => {
    const [characters, setCharacters] = useState<CharacterModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState(1);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCharacter(pageNumber, searchName);
                setCharacters(response.data.results);
                setPages(response.data.info.pages);
                window.scrollTo(0, 0);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchData();
    }, [pageNumber, searchName]);
    return {characters, loading, pages, error};
}
