import { AxiosResponse } from "axios";
import axiosInstance from "../httpClient";
import { IProductPropertiesType, ProductPropertiesType } from "../types";

export const getData = (
  options: IProductPropertiesType
): Promise<AxiosResponse<any, ProductPropertiesType[]>> =>
  axiosInstance.post(`api/product`, options);
