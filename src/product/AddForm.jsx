import {
    Typography,
    Box,
    IconButton,
    Grid,
    Button,
    MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InputAdornment from "@mui/material/InputAdornment";
import { db } from "../fire-config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { useAppStore } from "../appStore";
const currencies = [
    {
        value: "mobile",
        label: "mobile",
    },
    {
        value: "Laptop",
        label: "laptop",
    },
    {
        value: "Electronic",
        label: "Electronic",
    },
    {
        value: "food",
        label: "food",
    },
];

function AddForm({ closeEvent }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    // const [rows, setRows] = React.useState([]);
    const setRows = useAppStore((state) => state.setRows);

    const empCollectionRef = collection(db, "products");
    const createUser = async () => {
        await addDoc(empCollectionRef, {
            name: name,
            price: price,
            category: category,
            date: String(new Date()),
        });
        getUsers();
        closeEvent();
        Swal.fire("submited", "your file has been submited", "success");
    };
    const handleSubmit = () => {};

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant="h5" align="center">
                Add Product
            </Typography>
            <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={closeEvent}
            >
                <CloseIcon />
            </IconButton>
            <Box>
                <Grid
                    container
                    spacing={2}
                    component={"form"}
                    onSubmit={handleSubmit}
                >
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            size="small"
                            fullWidth
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-basic"
                            label="Price"
                            variant="outlined"
                            size="small"
                            fullWidth
                            type="number"
                            value={price}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CurrencyRupeeIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-basic"
                            label="Category"
                            variant="outlined"
                            size="small"
                            type="text"
                            select
                            fullWidth
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {currencies.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center">
                            <Button variant="contained" onClick={createUser}>
                                Submit
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default AddForm;
