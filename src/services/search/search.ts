import { AxiosResponse } from "axios";
import { Axios } from "../axios";

export const fetchSearch = async ({ queryData }: any) => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(
      "/search/all",
      {
        params: {
          queryData,
        },
      }
    );

    if (status === 200) {
      return data;
    }
  } catch (error) {}
};
