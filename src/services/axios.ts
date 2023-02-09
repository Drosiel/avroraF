import axios from "axios";
import {
  requestInterceptor,
  responseInterceptor,
  responseInterceptorError,
} from "../api/interceptors";

export const Axios = axios.create({
  baseURL: `https://avrorab-production.up.railway.app`,
});

Axios.interceptors.request.use(requestInterceptor, responseInterceptorError);
Axios.interceptors.response.use(responseInterceptor, responseInterceptorError);
