import { ITournament } from "../../tournament/lib/constant";
import { IUser } from "../../user/lib/constant";

export interface ITeam {
  id: string;
  name: string;
  rating: number;
  logo: string;
  creatorId: string;
  members: IUser[] | null;
  tournaments: ITournament[] | null;
  stats: string;
}
