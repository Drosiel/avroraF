import { IUser } from "../../user/lib/constant";

export interface IComment {
  date: any;
  id: string;
  text: string;
  user: IUser;
}
