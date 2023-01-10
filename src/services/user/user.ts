import { AxiosResponse } from "axios";

import { Axios } from "../axios";

export const fetchUserEdit = async ({ name }: any) => {
  const model = { name };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.put(
      "/user/edit",
      model
    );
    if (status === 201) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};
