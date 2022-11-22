import {SelectOptionsModel} from "../../model/SelectOptionsModel";

export const statusOptions = ((): SelectOptionsModel[] => {
    return [
        {label: '-- Unselect Options --', value: ''},
        {label: 'Alive', value: 'alive'},
        {label: 'Dead', value: 'dead'},
        {label: 'Unknown', value: 'unknown'},
    ]
})
