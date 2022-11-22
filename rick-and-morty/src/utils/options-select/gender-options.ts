import {OptionsModel} from "../../model/OptionsModel";

export const genderOptions = ((): OptionsModel[] => {
    return [
        {label: '-- Unselect Options --', value: ''},
        {label: 'Female', value: 'female'},
        {label: 'Male', value: 'male'},
        {label: 'Genderless ', value: 'genderless'},
        {label: 'Unknown ', value: 'unknown'},
    ]
})
