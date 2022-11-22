import style from './NavSearch.module.css';
import {
    AppBar,
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle, MenuItem,
    TextField,
    Typography
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {CharacterSearchModel} from "../../model/CharacterSearchModel";
import {SelectOptionsModel} from "../../model/SelectOptionsModel";
import {statusOptions} from "../../utils/options-select/status-options";
import {genderOptions} from "../../utils/options-select/gender-options";


interface NavSearchModel {
    title: string;
    changeSearch: (formValue: CharacterSearchModel) => void;
}

export function NavSearch(prop: NavSearchModel) {

    const [openModal, setOpenModal] = useState(false);
    const { register, getValues, reset: resetForm, formState: { errors } } = useForm<CharacterSearchModel>();

    const openAndCloseModal = () => {
        setOpenModal(!openModal);
    }

    const sendAdvancedSearch = (event: any) => {
        event.preventDefault();
        prop.changeSearch(getValues());
        resetForm();
        setOpenModal(false);
    };

    return (
        <AppBar position="static" className={style.navSearchContainer}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {prop.title}
            </Typography>
            <div className={style.navInputContainer}>
                <form onSubmit={sendAdvancedSearch}>
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
                        <Grid container spacing={2}>
                            <Grid xs={12} md={6}>
                                <TextField
                                    label="Name" variant="outlined" size="small"
                                    {...register("name")} fullWidth
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField
                                    label="Status" variant="outlined" size="small"
                                    {...register("status")} select fullWidth
                                    defaultValue={''}
                                >
                                    {statusOptions().map((option: SelectOptionsModel) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField
                                    label="species" variant="outlined" size="small"
                                    {...register("species")} fullWidth
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField
                                    label="Type" variant="outlined" size="small"
                                    {...register("type")} fullWidth
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField
                                    label="Gender" variant="outlined" size="small"
                                    {...register("gender")} select fullWidth
                                    defaultValue={''}
                                >
                                    {genderOptions().map((option: SelectOptionsModel) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </form>
                <DialogActions>
                    <Button onClick={openAndCloseModal}>Cancel</Button>
                    <Button onClick={sendAdvancedSearch} autoFocus>
                        Search
                    </Button>
                </DialogActions>
            </Dialog>
        </AppBar>
    )
}
