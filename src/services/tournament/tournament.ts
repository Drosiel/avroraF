import { AxiosResponse } from "axios";
import { IToken } from "../../features/auth/lib/constant";
import { ITeam } from "../../features/team/lib/constant";
import { ITournament } from "../../features/tournament/lib/constant";
import { Axios } from "../axios";

export const fetchAllTournament = async (token: IToken) => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(
      "/tournament/findAllTournaments"
    );

    if (status === 200) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchCreateTournament = async (data: ITournament) => {
  const model = data;

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      "/tournament/create",
      model
    );

    if (status === 201) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchIdTournament = async (id: string) => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(
      `/tournament/${id}`
    );

    if (status === 200) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchAddTeamIntournament = async (
  team: ITeam,
  id: string | undefined
) => {
  const model = { ...team };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      `/tournament/${id}`,
      model
    );

    if (status === 201) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};
