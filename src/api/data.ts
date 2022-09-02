import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";
import { IProductPropertiesType, ProductPropertiesType } from "../types";

export const getData = (
  options: IProductPropertiesType
): Promise<AxiosResponse<any, ProductPropertiesType[]>> =>
  axiosInstance.post(`api/product/search`, options);

export const editEntry = (id: number, options: AxiosRequestConfig) =>
  axiosInstance.put(`api/product/${id}`, options);

export const deleteEntry = (id: string) =>
  axiosInstance.delete(`api/product/${id}`);
