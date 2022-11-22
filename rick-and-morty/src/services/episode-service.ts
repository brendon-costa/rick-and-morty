import api from "./api";
import {AxiosResponse} from "axios";
import {ResponseModel} from "../model/ResponseModel";

export const getEpisode = (page: number): Promise<AxiosResponse<ResponseModel<any[]>>> => {
    const params = {page}
    return api.get(`/episode`, {params: params});
}
