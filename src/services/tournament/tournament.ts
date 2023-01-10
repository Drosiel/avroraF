import { AxiosResponse } from "axios";
import { IDataTeam } from "../../features/teams/teamSlice";
import { Axios } from "../axios";

export interface ITournament {
  name: string;
  dateTournamentStart: Date;
  dateTournamentEnd: Date;
  countTeam: number;
  prize: number;
  typeTournament: string;
}
export const fetchAllTournament = async () => {
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
  team: IDataTeam,
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
