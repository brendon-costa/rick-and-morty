import {useEffect, useState} from "react";
import {getEpisode} from "../services/episode-service";

export const useEpisode = (pageNumber: number, searchName: string): any => {
    const [episodes, setEpisodes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState(1);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getEpisode(pageNumber, searchName);
                setEpisodes(response.data.results);
                setPages(response.data.info.count);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchData();
    }, [pageNumber, searchName]);
    return {episodes, loading, pages, error};
}
