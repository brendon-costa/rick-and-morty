import api from "./api";
import {AxiosResponse} from "axios";
import {ResponseModel} from "../model/ResponseModel";

export const getLocation = (page: number, name: string): Promise<AxiosResponse<ResponseModel<any[]>>> => {
    const params = {page, name};
    return api.get(`/location`, {params: params});
}
