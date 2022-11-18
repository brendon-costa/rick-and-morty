import {Container} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import CharacterCard from "../../components/character-card/CharacterCard";
import {useCharacter} from "../../hooks/useCharacter";
import {CharacterModel} from "../../model/CharacterModel";

export default function Character() {

    const characters = useCharacter('/character');

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
        </Container>
    )
}
