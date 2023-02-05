import { AxiosResponse } from "axios";
import { IRole } from "../../features/user/lib/constant";
import { Axios } from "../axios";
import { getCookie } from "../cookies";

const cookie = `; ${document.cookie}`;
const token: any = getCookie("token", cookie);

export const fetchAllUsers = async ({ userQuery }: any) => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(
      "/user/findAll",
      {
        params: {
          userQuery: userQuery,
        },
      }
    );

    if (status === 200) {
      return data;
    }
  } catch (error) {}
};

export const fetchUserEdit = async ({ name, id, logo }: any) => {
  const model = { name, id, logo };

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
