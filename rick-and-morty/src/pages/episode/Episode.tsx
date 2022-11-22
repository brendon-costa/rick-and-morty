import {useState} from "react";
import {Alert, Backdrop, CircularProgress, Container, Snackbar} from "@mui/material";
import {TablePage} from "../../components/table/TablePage";
import {useEpisode} from "../../hooks/useEpisode";

export function Episode() {

    const [page, setPage] = useState(1);
    const {episodes, loading, pages, error} = useEpisode(page);
    const columns = [
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'episode', label: 'Episode', minWidth: 100 },
        { id: 'air_date', label: 'Air Date', minWidth: 100 },
    ];
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage + 1);
    };

    return (
        <Container>
            <TablePage page={page} columns={columns} handleChangePage={handleChangePage} row={episodes} countPages={pages}/>
            <Backdrop open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Snackbar open={error}>
                <Alert severity="error">Houve algum error ao carregar os dados!</Alert>
            </Snackbar>
        </Container>
    )
}
