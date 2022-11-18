import {useEffect, useState} from "react";
import api from "../services/api";

export const useCharacter = (endPoint: string) => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("/character");
            setCharacters(response.data.results);
        };
        fetchData();
    }, [api.getUri() + endPoint]);
    return {characters};
}
