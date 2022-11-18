import {Container} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import CharacterCard from "../../components/character-card/CharacterCard";

export default function Character() {

    const list = [1,2,3,4,5,6];

    return (
        <Container>
            <h1>Character</h1>
            <Grid container>
                {list.map(value => {
                    return (
                        <Grid
                            xs={12} sm={6} md={4} key={value}
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
