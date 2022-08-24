import { AxiosResponse } from "axios";
import axiosInstance from "../httpClient";
import { IProductPropertiesType, ProductPropertiesType } from "../types";

export const getData = (
  options: IProductPropertiesType
): Promise<AxiosResponse<any, ProductPropertiesType[]>> =>
  axiosInstance.post(`api/product/search`, options);

export const editEntry = (id: number, options: IProductPropertiesType) =>
  axiosInstance.put(`api/product/${id}`, options);

export const deleteEntry = (id: number) =>
  axiosInstance.delete(`api/product/${id}`);
