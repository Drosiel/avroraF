import { AxiosResponse } from "axios";
import { IRole } from "../../features/user/lib/constant";

import { Axios } from "../axios";

export const fetchUserEdit = async ({ name, email, token }: any) => {
  const model = { name, email };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.put(
      "/user/edit",
      model,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (status === 201) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchCreateRole = async ({ name }: IRole) => {
  const model = { name };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      "/role/create",
      model
    );

    if (status === 201) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};
