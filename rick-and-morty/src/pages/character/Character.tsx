import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea, Container, Grid} from "@mui/material";

export default function Character() {

    const list = [1,2,3,4,5,6];

    return (
        <Container>
            <h1>Character</h1>
            <Grid container>
                {list.map(value => {
                    return (
                        <Grid xs={12} sm={6} md={4} key={value} style={{marginBottom: '35px', display: 'flex', justifyContent: 'center'}}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
