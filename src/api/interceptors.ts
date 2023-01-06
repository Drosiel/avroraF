import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const requestInterceptor = (
  config: AxiosRequestConfig
): AxiosRequestConfig => config;

export const responseInterceptor = (response: AxiosResponse): AxiosResponse =>
  response;

export const responseInterceptorError = (
  error: AxiosError
): Promise<AxiosError> => Promise.reject(error);
