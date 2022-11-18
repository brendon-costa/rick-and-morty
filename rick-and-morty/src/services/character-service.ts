import api from "./api";
import {AxiosResponse} from "axios";
import {ResponseModel} from "../model/ResponseModel";
import {CharacterModel} from "../model/CharacterModel";

export const getCharacter = (pageNumber: number): Promise<AxiosResponse<ResponseModel<CharacterModel[]>>> => {
    return api.get(`/character/?page=${pageNumber}`);
}
