import {Container} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import CharacterCard from "../../components/character-card/CharacterCard";
import {useCharacter} from "../../hooks/useCharacter";

export default function Character() {

    const { characters } = useCharacter('/character');

    return (
        <Container>
            <h1>Character</h1>
            <Grid container>
                {characters.map((character: any) => {
                    return (
                        <Grid
                            xs={12} sm={6} md={4} key={character.id}
                            style={{marginBottom: '35px', display: 'flex', justifyContent: 'center'}}
                        >
                            <CharacterCard
                                name={'Morty Smith'}
                                species={'Human'}
                                status={'Alive'}
                                origin={'Earth'}
                                location={'Earth'}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
