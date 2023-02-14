import axios from "axios";
import {
  requestInterceptor,
  responseInterceptor,
  responseInterceptorError,
} from "../api/interceptors";

export const Axios = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `http://localhost:3001`
      : `https://avrorab-production.up.railway.app`,
});

Axios.interceptors.request.use(requestInterceptor, responseInterceptorError);
Axios.interceptors.response.use(responseInterceptor, responseInterceptorError);
