import { ITeam } from "../../team/lib/constant";

export interface IUser {
  email: string | null;
  id: string;
  logo: null;
  name: string | null;
  rating: number | null;
  roles: IRole[];
  teams: ITeam[];
  teamsCreator: ITeam[];
}

export enum ROLE {
  ADMIN = "admin",
  USER = "user",
  SPONSOR = "sponsor",
  EDITOR = "editor",
}

export interface IRole {
  name: ROLE;
  id: string;
}
