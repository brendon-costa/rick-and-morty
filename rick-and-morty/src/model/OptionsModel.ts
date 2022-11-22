interface OptionsModel {
    value: number | string;
    label: string;
}

export interface SelectOptionsModel extends OptionsModel {}

export interface ChipOptionsModel extends OptionsModel {
    key: string;
}
