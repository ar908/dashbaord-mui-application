import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../fire-config";
import { useEffect } from "react";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// const columns = [
//     { id: "name", label: "Name", minWidth: 170 },
//     { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
//     {
//         id: "population",
//         label: "Population",
//         minWidth: 170,
//         align: "right",
//         format: (value) => value.toLocaleString("en-US"),
//     },
//     {
//         id: "size",
//         label: "Size\u00a0(km\u00b2)",
//         minWidth: 170,
//         align: "right",
//         format: (value) => value.toLocaleString("en-US"),
//     },
//     {
//         id: "density",
//         label: "Density",
//         minWidth: 170,
//         align: "right",
//         format: (value) => value.toFixed(2),
//     },
// ];

// function createData(name, code, population, size) {
//     const density = population / size;
//     return { name, code, population, size, density };
// }

const rows = [];

export default function AddProducts() {
    const [page, setPage] = React.useState(0);
    const [rows, setRows] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const empCollectionRef = collection(db, "products");

    React.useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                deleteApi(id);
            }
        });
    };
    const deleteApi = async (id) => {
        const userDoc = doc(db, "products", id);
        await deleteDoc(userDoc);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        getUsers();
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const filterData = (v) => {
        if (v) {
            setRows([v]);
        } else {
            getUsers();
        }
    };

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ padding: "20px" }}
            >
                Products List
            </Typography>
            <Divider />
            <Box height={10} />
            <Stack direction="row" spacing={2} className="my-2 mb-2">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={rows}
                    sx={{ width: 300 }}
                    onChange={(e, v) => filterData(v)}
                    getOptionLabel={(rows) => rows.name || ""}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            size="small"
                            label="Search Products"
                        />
                    )}
                />
                <Stack />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                ></Typography>
                <Button variant="contained" endIcon={<AddCircleIcon />}>
                    Add
                </Button>
            </Stack>
            {/* <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
            ></Typography> */}
            {/* <Button variant="contained" endIcon={<AddCircleIcon />}>
                Add
            </Button> */}
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align={"left"}
                                style={{ minWidth: "100px" }}
                            >
                                Name
                            </TableCell>
                            <TableCell
                                align={"left"}
                                style={{ minWidth: "100px" }}
                            >
                                Category
                            </TableCell>
                            <TableCell
                                align={"left"}
                                style={{ minWidth: "100px" }}
                            >
                                Price
                            </TableCell>
                            <TableCell
                                align={"left"}
                                style={{ minWidth: "100px" }}
                            >
                                Date
                            </TableCell>
                            <TableCell
                                align={"left"}
                                style={{ minWidth: "100px" }}
                            >
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        <TableCell key={row.id} align={"left"}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.category}</TableCell>
                                        <TableCell>{row.price}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell align="left">
                                            <Stack spacing={2} direction="row">
                                                <EditIcon
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "blue",
                                                        cursor: "pointer",
                                                    }}
                                                    className="cursor-pointer"
                                                    // onClick={() => editUser(row.id)}
                                                />
                                                <DeleteIcon
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "darkred",
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() => {
                                                        deleteUser(row.id);
                                                    }}
                                                />
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
