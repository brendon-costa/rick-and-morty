import api from "./api";
import {AxiosResponse} from "axios";
import {ResponseModel} from "../model/ResponseModel";

export const getEpisode = (page: number, name: string): Promise<AxiosResponse<ResponseModel<any[]>>> => {
    const params = {page, name}
    return api.get(`/episode`, {params: params});
}
