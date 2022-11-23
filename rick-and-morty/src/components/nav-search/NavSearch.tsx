import style from './NavSearch.module.css';
import {
    AppBar,
    Button, Chip, Container,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle, IconButton, MenuItem,
    TextField, Toolbar,
    Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {CharacterSearchModel} from "../../model/CharacterSearchModel";
import {ChipOptionsModel, SelectOptionsModel} from "../../model/OptionsModel";
import {statusOptions} from "../../utils/options-select/status-options";
import {genderOptions} from "../../utils/options-select/gender-options";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from "react-router-dom";
import {FilterDetails} from "../filter-details/FilterDetails";


interface NavSearchModel {
    title: string;
    advancedSearch: boolean;
    changeSearch: (formValue: any) => void;
}

export function NavSearch(prop: NavSearchModel) {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [filters, setFilters] = useState<ChipOptionsModel[]>([]);
    const { register, getValues, setValue, reset: resetForm, formState: { errors } } = useForm<CharacterSearchModel>();

    const openAndCloseModal = () => {
        setOpenModal(!openModal);
    }

    const sendAdvancedSearch = (event: any) => {
        event.preventDefault();
        const formValue = getValues();
        prop.changeSearch(prop.advancedSearch ? formValue : formValue.search);
        updateFiltersList(formValue);
        resetForm();
        setOpenModal(false);
    };

    const updateFiltersList = (formValue: CharacterSearchModel) => {
        const list = []
        if (formValue.search || formValue.name) {
            list.push({
                label: 'Name', value: formValue.name ? formValue.name : formValue.search, key: 'name'
            });
        }
        if (formValue.gender) list.push({label: 'Gender', value: formValue.gender, key: 'gender'});
        if (formValue.species) list.push({label: 'Species', value: formValue.species, key: 'species'});
        if (formValue.status) list.push({label: 'Status', value: formValue.status, key: 'status'});
        if (formValue.type) list.push({label: 'Type', value: formValue.type, key: 'type'});
        setFilters(list);
    }

    const deleteSearch = (index: number, key: any) => {
        setValue(key, '');
        filters.splice(index, 1);
        setFilters([...filters]);
        const formValue = getValues();
        prop.changeSearch(prop.advancedSearch ? formValue : formValue.search);
    }

    return (
        <>
            <AppBar position="static" className={style.navSearchContainer}>
                <Toolbar>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
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
                        {prop.advancedSearch ? (
                            <Button variant="text" size="small" className="direction-col" onClick={openAndCloseModal}>
                                <span>Advanced</span>
                                <span>search</span>
                            </Button>
                        ) : null}
                    </div>
                </Toolbar>
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
                                        label="Species" variant="outlined" size="small"
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
            <FilterDetails filters={filters} deleteSearch={deleteSearch}/>
        </>
    )
}
