import style from './NavSearch.module.css';
import {Container, TextField, Typography} from "@mui/material";

export function NavSearch() {
    return (
        <Container className={style.navSearchContainer}>
            <Typography variant="h4" component="h2">
                Character
            </Typography>
            <div>
                <TextField id="outlined-basic" label="Pesquisa" placeholder="Digite um nome" variant="outlined" size="small" />
            </div>
        </Container>
    )
}
