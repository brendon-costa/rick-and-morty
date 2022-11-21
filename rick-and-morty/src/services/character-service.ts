import api from "./api";
import {AxiosResponse} from "axios";
import {ResponseModel} from "../model/ResponseModel";
import {CharacterModel} from "../model/CharacterModel";

export const getCharacter = (page: number, name: string): Promise<AxiosResponse<ResponseModel<CharacterModel[]>>> => {
    const params = {page, name}
    return api.get(`/character`, {params: params});
}
