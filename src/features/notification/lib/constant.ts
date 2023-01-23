import { ITeam } from "../../team/lib/constant";
import { IUser } from "../../user/lib/constant";

export interface INotification {
  id: string;
  user: IUser;
  initiator: IUser;
  team: ITeam;
  text: string;
}
