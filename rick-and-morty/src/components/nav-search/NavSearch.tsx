import style from './NavSearch.module.css';
import {Container, TextField, Typography} from "@mui/material";
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
        <Container className={style.navSearchContainer}>
            <Typography variant="h4" component="h2">
                {prop.title}
            </Typography>
            <div>
                <form>
                    <TextField
                        label="Search" placeholder="Enter a name" variant="outlined" size="small"
                        {...register("search", { required: true })}
                    />
                </form>
            </div>
        </Container>
    )
}
