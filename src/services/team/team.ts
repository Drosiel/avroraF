import { AxiosResponse } from "axios";
import { ITeam } from "../../features/team/lib/constant";
import { IUser } from "../../features/user/lib/constant";
import { Axios } from "../axios";

export const fetchAllTeam = async () => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(
      "/team/findAllTeams"
    );

    if (status === 200) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchCreateTeam = async ({ name, creatorId }: ITeam) => {
  const model = { name, creatorId };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      "/team/create",
      model
    );

    if (status === 201) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchIdTeam = async (id: string) => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(`/team/${id}`);

    if (status === 200) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchAddUserInTeam = async (
  user: IUser,
  id: string | undefined
) => {
  const model = { ...user };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      `/team/${id}`,
      model
    );

    if (status === 201) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};
