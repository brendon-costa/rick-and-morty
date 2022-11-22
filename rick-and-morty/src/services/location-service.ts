import api from "./api";
import {AxiosResponse} from "axios";
import {ResponseModel} from "../model/ResponseModel";
import {CharacterModel} from "../model/CharacterModel";

export const getLocation = (page: number): Promise<AxiosResponse<ResponseModel<any[]>>> => {
    const params = {page}
    return api.get(`/location`, {params: params});
}
