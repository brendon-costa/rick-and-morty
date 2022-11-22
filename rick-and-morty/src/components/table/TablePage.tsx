import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";

interface TableModel {
    row: any[];
    columns: any[];
    countPages: number;
    page: number;
    handleChangePage: (event: unknown, newPage: number) => void;
}

export function TablePage(prop: TableModel) {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {prop.columns.map((column) => (
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
                        {prop.row
                            .map((row: any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={'row'+row.id}>
                                        {prop.columns.map((column: any) => {
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
                count={prop.countPages}
                rowsPerPage={20}
                page={prop.page - 1}
                onPageChange={prop.handleChangePage}
            />
        </Paper>
    )
}
