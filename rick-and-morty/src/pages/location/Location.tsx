import {useState} from "react";
import { Container} from "@mui/material";
import {useLocation} from "../../hooks/useLocation";
import {TablePage} from "../../components/table/TablePage";

export function Location() {

    const [page, setPage] = useState(1);
    const {locations, loading, pages, error} = useLocation(page);
    const columns = [
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'type', label: 'Type', minWidth: 100 },
        { id: 'dimension', label: 'Dimension', minWidth: 100 },
    ];
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage + 1);
    };

    return (
        <Container>
            <TablePage page={page} columns={columns} handleChangePage={handleChangePage} row={locations} countPages={pages}/>
        </Container>
    )
}
