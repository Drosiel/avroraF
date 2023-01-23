import { AxiosResponse } from "axios";
import { ITeam } from "../../features/team/lib/constant";
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

export const fetchCreateTeam = async ({ name, creatorId }: ITeam) => {
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
