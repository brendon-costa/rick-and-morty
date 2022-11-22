import {SelectOptionsModel} from "../../model/SelectOptionsModel";

export const genderOptions = ((): SelectOptionsModel[] => {
    return [
        {label: '-- Unselect Options --', value: ''},
        {label: 'Female', value: 'female'},
        {label: 'Male', value: 'male'},
        {label: 'Genderless ', value: 'genderless'},
        {label: 'Unknown ', value: 'unknown'},
    ]
})
