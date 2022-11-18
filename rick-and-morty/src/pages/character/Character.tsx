import {Backdrop, CircularProgress, Container, Pagination, PaginationItem, Stack} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import CharacterCard from "../../components/character-card/CharacterCard";
import {useCharacter} from "../../hooks/useCharacter";
import {CharacterModel} from "../../model/CharacterModel";
import {useEffect, useState} from "react";
import {getCharacter} from "../../services/character-service";

export default function Character() {

    // let characters = useCharacter(1);
    const [pageNumber, setPageNumber] = useState(1);
    const [characters, setCharacters] = useState<CharacterModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getCharacter(pageNumber);
            setCharacters(response.data.results);
            window.scrollTo(0, 0);
            setLoading(false);
        };
        fetchData();
    }, [pageNumber]);

    return (
        <Container>
            <h1>Character</h1>
            <Grid container>
                {characters.map((character: CharacterModel) => {
                    return (
                        <Grid
                            xs={12} sm={6} md={4} key={character.id}
                            style={{marginBottom: '35px', display: 'flex', justifyContent: 'center'}}
                        >
                            <CharacterCard
                                name={character.name}
                                species={character.species}
                                status={character.status}
                                origin={character.origin.name}
                                location={character.location.name}
                                image={character.image}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            <Stack spacing={5} alignItems='center' style={{marginBottom: '50px', marginTop: '50px'}}>
                <Pagination count={10} onChange={(e, page) => setPageNumber(page)}/>
            </Stack>
            <Backdrop open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </Container>
    )
}
