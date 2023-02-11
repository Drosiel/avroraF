import { INotification } from "../../notification/lib/constant";
import { ITeam } from "../../team/lib/constant";

export interface IUser {
  id: string;
  logo: string | null;
  logoURL: string | null;
  name: string | null;
  rating: number | null;
  roles: IRole[];
  teams: ITeam[];
  teamsCreator: ITeam[];
  notifications: INotification[];
  friends: IUser[];
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

export interface IUsersList {
  users: IUser[];
}
