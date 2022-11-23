import {SelectOptionsModel} from "../../model/OptionsModel";

export const genderOptions = ((): SelectOptionsModel[] => {
    return [
        {label: 'Female', value: 'female'},
        {label: 'Male', value: 'male'},
        {label: 'Genderless ', value: 'genderless'},
        {label: 'Unknown ', value: 'unknown'},
    ]
})
