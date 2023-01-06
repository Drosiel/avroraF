import axios from "axios";
import {
  requestInterceptor,
  responseInterceptor,
  responseInterceptorError,
} from "../api/interceptors";

export const Axios = axios.create({
  baseURL: "http://localhost:3001",
});

Axios.interceptors.request.use(requestInterceptor, responseInterceptorError);
Axios.interceptors.response.use(responseInterceptor, responseInterceptorError);
