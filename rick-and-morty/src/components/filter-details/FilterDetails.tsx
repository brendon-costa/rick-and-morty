import {Chip, Container} from "@mui/material";
import style from "./FilterDetails.module.css";

interface FilterDetailsModel {
    filters: any[];
    deleteSearch: (index: number, key: any) => void;
}

export function FilterDetails(prop: FilterDetailsModel) {
    return (
        <>
            {prop.filters.length ? (
                <Container>
                    <div className={style.filtersContainer}>
                        <p>Showing results filtered by:</p>
                        <div>
                            {prop.filters.map((filter, index) => {
                                return (
                                    <Chip
                                        label={filter.label+': '+filter.value}
                                        variant="outlined"
                                        key={filter.label}
                                        onDelete={() => prop.deleteSearch(index, filter.key)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </Container>
            ) : null}
        </>
    )
}
