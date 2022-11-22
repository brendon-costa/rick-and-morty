import {useEffect, useState} from "react";
import {getCharacter} from "../services/character-service";
import {CharacterSearchModel} from "../model/CharacterSearchModel";
import {getLocation} from "../services/location-service";

export const useLocation = (pageNumber: number): any => {
    const [locations, setLocations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState(1);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getLocation(pageNumber);
                setLocations(response.data.results);
                setPages(response.data.info.count);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchData();
    }, [pageNumber]);
    return {locations, loading, pages, error};
}
