import { IComment } from "../../comment/lib/constant";
import { ITeam } from "../../team/lib/constant";

export interface ITournament {
  id: string;
  name: string;
  dateTournamentStart: string;
  dateTournamentEnd: string;
  maxTeam: number;
  prize: number;
  image?: string | null;
  imageURL?: string | null;
  bracket: string | null;
  typeTournament: string;
  teams: ITeam[];
  comments: IComment[];
}
