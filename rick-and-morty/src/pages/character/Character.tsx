import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Container} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

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
                                        <Grid container>
                                            <Grid xs={6} sm={6} md={6}>
                                                <Typography variant="body2" color="text.primary">
                                                    Species
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Human
                                                </Typography>
                                            </Grid>
                                            <Grid xs={6} sm={6} md={6}>
                                                <Typography variant="body2" color="text.primary">
                                                    Status
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Alive
                                                </Typography>
                                            </Grid>
                                            <Grid xs={6} sm={6} md={6}>
                                                <Typography variant="body2" color="text.primary">
                                                    Origin
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Earth
                                                </Typography>
                                            </Grid>
                                            <Grid xs={6} sm={6} md={6}>
                                                <Typography variant="body2" color="text.primary">
                                                    Location
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Earth
                                                </Typography>
                                            </Grid>
                                        </Grid>
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
