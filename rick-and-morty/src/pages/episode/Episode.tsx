import {useState} from "react";
import {Alert, Backdrop, CircularProgress, Container, Snackbar} from "@mui/material";
import {TablePage} from "../../components/table/TablePage";
import {useEpisode} from "../../hooks/useEpisode";
import {NavSearch} from "../../components/nav-search/NavSearch";

export function Episode() {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState<string>('');
    const {episodes, loading, pages, error} = useEpisode(page, search);
    const columns = [
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'episode', label: 'Episode', minWidth: 100 },
        { id: 'air_date', label: 'Air Date', minWidth: 100 },
    ];
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage + 1);
    };

    return (
        <>
            <NavSearch title="Episode" advancedSearch={false} changeSearch={(value) => setSearch(value)}/>
            <Container>
                <TablePage page={page} columns={columns} handleChangePage={handleChangePage} row={episodes} countPages={pages}/>
                <Backdrop open={loading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
                <Snackbar open={error}>
                    <Alert severity="error">Houve algum error ao carregar os dados!</Alert>
                </Snackbar>
            </Container>
        </>
    )
}
