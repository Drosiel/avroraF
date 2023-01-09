import { AxiosResponse } from "axios";
import { Params } from "react-router-dom";
import { Axios } from "../axios";

export interface ITeam {
  name: string;
  creatorId: string;
}

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
