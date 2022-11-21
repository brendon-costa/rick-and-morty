import {useEffect, useState} from "react";
import {getCharacter} from "../services/character-service";
import {CharacterModel} from "../model/CharacterModel";

export const useCharacter = (pageNumber: number): any => {
    const [characters, setCharacters] = useState<CharacterModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getCharacter(pageNumber);
            setCharacters(response.data.results);
            setPages(response.data.info.pages);
            window.scrollTo(0, 0);
            setLoading(false);
        };
        fetchData();
    }, [pageNumber]);
    return {characters, loading, pages};
}
