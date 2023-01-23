import { AxiosResponse } from "axios";
import { IRole } from "../../features/user/lib/constant";

import { Axios } from "../axios";

export const fetchAllUsers = async () => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(
      "/user/findAll"
    );

    if (status === 200) {
      return data;
    }
  } catch (error) {}
};

export const fetchUserEdit = async ({ name, id, token }: any) => {
  const model = { name, id };

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
    if (status === 200) {
      return data;
    }
  } catch (error) {}
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
  } catch (error) {}
};

export const fetchIdUser = async (id: string) => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(`user/${id}`);

    if (status === 200) {
      return data;
    }
  } catch (error) {}
};
