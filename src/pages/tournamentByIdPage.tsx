import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CreateCommentForm from "../features/comment/ui/forms/createCommentForm";
import { ITournament } from "../features/tournament/lib/constant";
import { ReactComponent as AvatarIcon } from "../public/icons/avatar.svg";
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

  const getDate = (value: string) => {
    const elem = new Date(value);

    if (elem) {
      return new Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(elem);
    }
  };

  useEffect(() => {
    if (tournamentId) {
      fetchIdTournament(tournamentId).then((data) => setTournamentItem(data));
    }
  }, [tournamentId]);

  return (
    <div className="w-full grid gap-4">
      <div className="grid gap-2">
        <div className="text-3xl">{tournamentItem?.name}</div>

        <div className="flex gap-2">
          <div>призовые: {tournamentItem.prize}</div>

          <div>
            команд: {tournamentItem.teams?.length}/{tournamentItem.maxTeam}
          </div>

          <div>тип: {tournamentItem.typeTournament}</div>
        </div>

        <div className="flex flex-col gap-2">
          {user.teams.length > 0 && (
            <div className="flex w-96">
              <Select
                options={user.teams}
                name="team"
                onChange={(e) => setValue(e.target.value)}
              />

              <div className="text-red-700">
                <button onClick={() => addTeam(tournamentId)}>
                  ДОБАВИТЬ КОМАНДУ
                </button>
              </div>
            </div>
          )}

          <ul className="grid grid-cols-4 gap-2">
            {tournamentItem.teams?.map((team) => (
              <li
                key={team.id}
                className="flex gap-2 bg-green-300 p-2 cursor-pointer hover:bg-green-200 flex-1 items-center"
                onClick={() => navigate(`/team/${team.id}`)}
              >
                {team.logoURL && (
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={team.logoURL}
                    alt="logo"
                  />
                )}

                <span>{team.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-4 p-5 rounded bg-[#29292E]">
        <div>
          <h2 className="text-lg text-[#FA7A02]">Комментарии</h2>

          {user.id && (
            <div>
              <CreateCommentForm
                tournamentItem={tournamentItem}
                setTournamentItem={setTournamentItem}
              />
            </div>
          )}
        </div>

        <ul className="flex gap-4 flex-col-reverse">
          {tournamentItem.comments.map((comment) => (
            <li key={comment.id} className="flex">
              <div>
                {comment?.user?.logoURL && (
                  <img
                    className="flex w-10 h-10 object-cover rounded-full"
                    src={comment.user.logoURL}
                    alt="avatar"
                  />
                )}

                {!comment?.user?.logoURL && (
                  <div className="flex w-10 h-10 object-cover rounded-full">
                    <AvatarIcon />
                  </div>
                )}
              </div>

              <div className="grid gap-1 ml-2 text-sm">
                <div className="flex gap-2 items-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => navigate(`/${comment.user.id}`)}
                  >
                    {comment.user.name}
                  </div>

                  <div className="text-xs">{getDate(comment.date)}</div>
                </div>

                <div>{comment.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TournamentByIdPage;
