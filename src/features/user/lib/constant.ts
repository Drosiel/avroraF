export interface IUser {
  email: string | null;
  id: string;
  lastLoginAt: string | null;
  logo: null;
  name: string | null;
  rating: number | null;
  teams: [] | null;
  role: IRole;
}

export enum ROLE {
  ADMIN = "admin",
  USER = "user",
  SPONSOR = "sponsor",
  EDITOR = "editor",
}

export interface IRole {
  name: ROLE | null;
  id: string;
}
