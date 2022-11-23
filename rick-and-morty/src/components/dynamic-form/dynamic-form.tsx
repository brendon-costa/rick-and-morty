import Grid from "@mui/material/Unstable_Grid2";
import {MenuItem, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {SelectOptionsModel} from "../../model/OptionsModel";
import {statusOptions} from "../../utils/options-select/status-options";
import {genderOptions} from "../../utils/options-select/gender-options";


export function DynamicForm() {
    const { control, register, getValues, watch } = useForm();
    const formList = [
        {label: 'Name', prop: 'name', type: 'input'},
        {label: 'Status', prop: 'status', type: 'select', options: statusOptions()},
        {label: 'Species', prop: 'species', type: 'input'},
        {label: 'Type', prop: 'type', type: 'input'},
        {label: 'Gender', prop: 'gender', type: 'select', options: genderOptions()},
    ]

    const getValueForm = () => {
        console.log(getValues());
    }

    return (
        <Grid container spacing={2}>
            {formList.map((field: any, index) => (
                <Grid xs={12} md={6} key={field.prop + index}>
                    {field.type == 'input' ?
                        (
                            <TextField
                                label={field.label} variant="outlined" size="small"
                                {...register(field.prop)} fullWidth
                                onKeyUp={getValueForm}
                            />
                        ) :
                        (
                            <TextField
                                label={field.label} variant="outlined" size="small"
                                {...register(field.prop)} select fullWidth
                                defaultValue={''} onBlur={getValueForm}
                            >
                                {field.options.map((option: SelectOptionsModel) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )
                    }
                </Grid>
            ))}
        </Grid>
    )
}
