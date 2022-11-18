import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";

interface CharacterCardModel {
    name: string;
    species: string;
    status: string;
    origin: string;
    location: string;
}

export default function CharacterCard(prop: CharacterCardModel) {
    return (
        <Card sx={{ maxWidth: 300, minWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {prop.name}
                    </Typography>
                    <Grid container>
                        <Grid xs={6} sm={6} md={6}>
                            <Typography variant="body2" color="text.primary">
                                Species
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {prop.species}
                            </Typography>
                        </Grid>
                        <Grid xs={6} sm={6} md={6}>
                            <Typography variant="body2" color="text.primary">
                                Status
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {prop.status}
                            </Typography>
                        </Grid>
                        <Grid xs={6} sm={6} md={6}>
                            <Typography variant="body2" color="text.primary">
                                Origin
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {prop.origin}
                            </Typography>
                        </Grid>
                        <Grid xs={6} sm={6} md={6}>
                            <Typography variant="body2" color="text.primary">
                                Location
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {prop.location}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
