import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IDataTournament } from "../features/tournaments/tournamentSlice";
import { fetchIdTournament } from "../services/tournament/tournament";

const TournamentByIdPage: FC = () => {
  const { tournamentId } = useParams();
  const navigate = useNavigate();

  const [tournamentItem, setTournamentItem] = useState<IDataTournament>({
    bracket: "",
    countTeam: 0,
    dateTournamentEnd: "",
    dateTournamentStart: "",
    id: "",
    image: "",
    maxTeam: 0,
    name: "",
    prize: 0,
    typeTournament: "",
  });

  useEffect(() => {
    if (tournamentId) {
      fetchIdTournament(tournamentId).then((data) => setTournamentItem(data));
    }
  }, [tournamentId]);

  return (
    <div className="px-2 py-2 flex flex-col gap-4">
      <div className="ml-auto">
        <button
          className="text-2xl font-extrabold text-green-800"
          onClick={() => navigate("/")}
        >
          на главную
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-3xl">{tournamentItem?.name}</div>

        <div>
          <div>призовые: {tournamentItem.prize}</div>

          <div className="flex gap-4">
            <div>
              команд: {tournamentItem.countTeam}/{tournamentItem.maxTeam}
            </div>

            <div>тип: {tournamentItem.typeTournament}</div>
          </div>

          <div>
            <span>с: {tournamentItem.dateTournamentStart}</span>-
            <span>по: {tournamentItem.dateTournamentEnd}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentByIdPage;
