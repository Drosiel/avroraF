import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CreateCommentForm from "../features/comment/ui/forms/createCommentForm";
import { ITournament } from "../features/tournament/lib/constant";

import { RootState } from "../redux/store";

import {
  fetchAddTeamInTournament,
  fetchIdTournament,
} from "../services/tournament/tournament";
import Select from "../shared/ui/select";

const TournamentByIdPage: FC = () => {
  const { tournamentId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  const [value, setValue] = useState<any>(0);

  const [tournamentItem, setTournamentItem] = useState<ITournament>({
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
    teams: [],
    comments: [],
  });

  const addTeam = (id: string | undefined) => {
    fetchAddTeamInTournament(user.teams[value], id).then((data) =>
      setTournamentItem({ ...tournamentItem, teams: data.teams })
    );
  };

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
              команд: {tournamentItem.teams?.length}/{tournamentItem.maxTeam}
            </div>

            <div>тип: {tournamentItem.typeTournament}</div>
          </div>

          <div>
            {user.teams.length > 0 && (
              <>
                <Select
                  options={user.teams}
                  name="team"
                  onChange={(e) => setValue(e.target.value)}
                />

                <div>
                  <button onClick={() => addTeam(tournamentId)}>
                    ДОБАВИТЬ КОМАНДУ
                  </button>
                </div>
              </>
            )}

            <div className="ml-4">
              {tournamentItem.teams?.map((team) => (
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/team/${team.id}`)}
                >
                  {team.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <span>с: {tournamentItem.dateTournamentStart}</span>-
            <span>по: {tournamentItem.dateTournamentEnd}</span>
          </div>
        </div>
      </div>

      <div>
        <div className="grid max-w-lg gap-4 mx-auto">
          <div className="bg-orange-200 p-1">
            <CreateCommentForm tournamentId={tournamentItem?.id} />
          </div>

          <ul className="grid gap-2">
            {tournamentItem.comments.map((comment) => (
              <li className="bg-red-400 px-2 py-1 rounded">
                <div>{comment.user.name || "Пользователь"}</div>
                <div>{comment.text}</div>
                <div>{comment.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TournamentByIdPage;
