import api from "./api";
import {AxiosResponse} from "axios";
import {ResponseModel} from "../model/ResponseModel";
import {CharacterModel} from "../model/CharacterModel";
import {CharacterSearchModel} from "../model/CharacterSearchModel";

export const getCharacter = (page: number, search: CharacterSearchModel): Promise<AxiosResponse<ResponseModel<CharacterModel[]>>> => {
    const params = {
        page,
        name: search.name ? search.name : search.search,
        gender: search.gender,
        species: search.species,
        type: search.type,
        status: search.status,
    }
    return api.get(`/character`, {params: params});
}
