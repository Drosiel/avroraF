import { AxiosResponse } from "axios";
import { IUser } from "../../features/user/lib/constant";
import { Axios } from "../axios";
import { getCookie } from "../cookies";

const cookie = `; ${document.cookie}`;
const token: any = getCookie("token", cookie);

export const fetchAllTeam = async () => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(
      "/team/findAllTeams"
    );

    if (status === 200) {
      return data;
    }
  } catch (error) {}
};

export const fetchCreateTeam = async ({ name, creatorId }: any) => {
  const model = { name, creatorId };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      "/team/create",
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
  } catch (error) {}
};

export const fetchIdTeam = async (id: string) => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(`/team/${id}`);

    if (status === 200) {
      return data;
    }
  } catch (error) {}
};

//редактировать команду
export const fetchTeamEdit = async ({ name, id, logo }: any) => {
  const model = { name, id, logo };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.put(
      "/team/edit",
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

//добавить игрока в команду
export const fetchAddUserInTeam = async (
  user: IUser,
  id: string | undefined
) => {
  const model = { ...user };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      `/team/${id}`,
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
  } catch (error) {}
};

//удалить команду
export const fetchRemoveTeam = async (userId: string, id: string) => {
  const model = { userId, id };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      `/team/delete`,
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
  } catch (error) {}
};
