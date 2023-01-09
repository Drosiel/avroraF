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
    dateTournament: "",
    id: "",
    image: "",
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
          <div>{tournamentItem.prize}</div>
          <div>{tournamentItem.typeTournament}</div>
          <div>{tournamentItem.dateTournament}</div>
        </div>
      </div>
    </div>
  );
};

export default TournamentByIdPage;
