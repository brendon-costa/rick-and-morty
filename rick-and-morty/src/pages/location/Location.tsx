import {ChangeEvent, useState} from "react";
import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";

interface Column {
    id: 'name' | 'type' | 'dimension';
    label: string;
    minWidth?: number;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'type', label: 'Type', minWidth: 100 },
    { id: 'dimension', label: 'Dimension', minWidth: 100 },
];

interface Data {
    id: number;
    name: string;
    type: string;
    dimension: string;
}

function createData(
    id: number,
    name: string,
    type: string,
    dimension: string,
): Data {
    return { id, name, type, dimension };
}

const rows = [
    createData(1, 'Earth', 'Planet', 'Dimension C-137'),
    createData(2, 'Earth', 'Planet', 'Dimension C-137'),
    createData(3, 'Earth', 'Planet', 'Dimension C-137'),
    createData(4, 'Earth', 'Planet', 'Dimension C-137'),
    createData(5, 'Earth', 'Planet', 'Dimension C-137'),
    createData(6, 'Earth', 'Planet', 'Dimension C-137'),
];

export function Location() {

    const [page, setPage] = useState(0);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    return (
        <Container>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={'row'+row.id}>
                                            {columns.map((column: Column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={20}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </Container>
    )
}
