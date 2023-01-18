import { ITeam } from "../../team/lib/constant";

export interface ITournament {
  bracket: string | null;
  countTeam: number;
  dateTournamentEnd: string;
  dateTournamentStart: string;
  id: string;
  image: string | null;
  maxTeam: number;
  name: string;
  prize: number;
  typeTournament: string;
  teams: ITeam[];
}
