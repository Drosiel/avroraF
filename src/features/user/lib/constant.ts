import { INotification } from "../../notification/lib/constant";
import { ITeam } from "../../team/lib/constant";

export interface IUser {
  id: string;
  logo: null;
  name: string | null;
  rating: number | null;
  roles: IRole[];
  teams: ITeam[];
  teamsCreator: ITeam[];
  notifications: INotification[];
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
