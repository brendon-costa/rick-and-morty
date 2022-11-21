import style from './NavSearch.module.css';
import {AppBar, Box, Button, Container, TextField, Typography} from "@mui/material";
import { useForm } from "react-hook-form";
import {useEffect} from "react";

interface NavSearchModel {
    title: string;
    changeSearch: (value: string) => void;
}

export function NavSearch(prop: NavSearchModel) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        const value = watch("search");
        prop.changeSearch(value);
    }, [watch("search")])

    return (
        <AppBar position="static" className={style.navSearchContainer}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {prop.title}
            </Typography>
            <div className={style.navInputContainer}>
                <form>
                    <TextField
                        label="Search" placeholder="Enter a name" variant="outlined" size="small"
                        {...register("search", { required: true })}
                    />
                </form>
                <Button variant="text" size="small" className="direction-col">
                    <span>Advanced</span>
                    <span>search</span>
                </Button>
            </div>
        </AppBar>
    )
}
