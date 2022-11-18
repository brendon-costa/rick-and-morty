import api from "./api";
import {AxiosResponse} from "axios";
import {ResponseModel} from "../model/ResponseModel";
import {CharacterModel} from "../model/CharacterModel";

export const getCharacter = (): Promise<AxiosResponse<ResponseModel<CharacterModel[]>>> => {
    return api.get('/character');
}
