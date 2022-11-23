import {useState} from "react";
import {Alert, Backdrop, CircularProgress, Container, Snackbar} from "@mui/material";
import {useLocation} from "../../hooks/useLocation";
import {TablePage} from "../../components/table/TablePage";
import {NavSearch} from "../../components/nav-search/NavSearch";

export function Location() {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState<string>('');
    const {locations, loading, pages, error} = useLocation(page, search);
    const columns = [
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'type', label: 'Type', minWidth: 100 },
        { id: 'dimension', label: 'Dimension', minWidth: 100 },
    ];
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage + 1);
    };

    return (
        <>
            <NavSearch title="Location" advancedSearch={false} changeSearch={(value) => setSearch(value)}/>
            <Container>
                <TablePage page={page} columns={columns} handleChangePage={handleChangePage} row={locations} countPages={pages}/>
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
