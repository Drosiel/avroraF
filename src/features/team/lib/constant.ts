import { ITournament } from "../../tournament/lib/constant";
import { IUser } from "../../user/lib/constant";

export interface ITeam {
  id: string;
  name: string;
  rating: number;
  logo: string | null;
  logoURL: string | null;
  creator: IUser;
  members: IUser[] | null;
  tournaments: ITournament[] | null;
  stats: string;
}
