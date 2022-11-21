import style from './NavSearch.module.css';
import {
    AppBar,
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography
} from "@mui/material";
import { useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import Grid from '@mui/material/Unstable_Grid2';


interface NavSearchModel {
    title: string;
    changeSearch: (value: string) => void;
}

export function NavSearch(prop: NavSearchModel) {

    const [openModal, setOpenModal] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        const value = watch("search");
        prop.changeSearch(value);
    }, [watch("search")]);

    const openAndCloseModal = () => {
        setOpenModal(!openModal);
    }

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
                <Button variant="text" size="small" className="direction-col" onClick={openAndCloseModal}>
                    <span>Advanced</span>
                    <span>search</span>
                </Button>
            </div>
            <Dialog
                open={openModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Advanced search
                </DialogTitle>
                <form>
                    <DialogContent>
                        <Grid xs={12} sm={6} md={4} columnSpacing={2}>
                            <TextField
                                label="idade" placeholder="Enter a name" variant="outlined" size="small"
                                {...register("search", { required: true })}
                            />
                            <TextField
                                label="teste" placeholder="Enter a name" variant="outlined" size="small"
                                {...register("search", { required: true })}
                            />
                        </Grid>
                    </DialogContent>
                </form>
                <DialogActions>
                    <Button onClick={openAndCloseModal}>Cancel</Button>
                    <Button onClick={() => console.log('foi')} autoFocus>
                        Search
                    </Button>
                </DialogActions>
            </Dialog>
        </AppBar>
    )
}
