import { IUser } from "../../user/lib/constant";

export interface IComment {
  date: string;
  id: string;
  text: string;
  user: IUser;
}
