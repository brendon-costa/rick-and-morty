import {Alert, Backdrop, CircularProgress, Container, Pagination, Snackbar, Stack} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import CharacterCard from "../../components/character-card/CharacterCard";
import {CharacterModel} from "../../model/CharacterModel";
import {useState} from "react";
import {useCharacter} from "../../hooks/useCharacter";
import {NavSearch} from "../../components/nav-search/NavSearch";
import {CharacterSearchModel} from "../../model/CharacterSearchModel";

export default function Character() {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [search, setSearch] = useState<CharacterSearchModel>(
        {gender: '', name: '', search: '', species: '', status: '', type: ''}
    );
    const {characters, loading, pages, error} = useCharacter(currentPage, search);

    return (
        <div>
            <NavSearch title="Character" advancedSearch={true} changeSearch={(value) => setSearch({...value})}/>
            <Container>
                <Grid container>
                    {characters && characters.map((character: CharacterModel) => {
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
                    <Pagination count={pages} onChange={(e, page) => setCurrentPage(page)}/>
                </Stack>
                <Backdrop open={loading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
                <Snackbar open={error}>
                    <Alert severity="error">Houve algum error ao carregar os dados!</Alert>
                </Snackbar>
            </Container>
        </div>
    )
}
