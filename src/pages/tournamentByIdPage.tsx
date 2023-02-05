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

  const gatDateTour = () => {};

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
    <div className="w-full">
      <div className="grid gap-4">
        <div className="text-3xl">{tournamentItem?.name}</div>

        <div className="flex gap-2">
          <div>призовые: {tournamentItem.prize}</div>

          <div>
            команд: {tournamentItem.teams?.length}/{tournamentItem.maxTeam}
          </div>

          <div>тип: {tournamentItem.typeTournament}</div>

          {/* <div>
            <span>{getDate(tournamentItem.dateTournamentStart)}</span>
            {" / "}
            <span>{getDate(tournamentItem.dateTournamentEnd)}</span>
          </div> */}
        </div>

        <div className="grid gap-4">
          {user.teams.length > 0 && (
            <div className="flex">
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

          <ul>
            {tournamentItem.teams?.map((team) => (
              <li
                className="cursor-pointer"
                onClick={() => navigate(`/team/${team.id}`)}
              >
                {team.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid">
        {user.id && (
          <div className="bg-orange-200 p-1">
            <CreateCommentForm
              tournamentItem={tournamentItem}
              setTournamentItem={setTournamentItem}
            />
          </div>
        )}

        <ul className="flex gap-1 flex-col-reverse">
          {tournamentItem.comments.map((comment) => (
            <li className="bg-green-300 px-2 py-1 rounded">
              <div className="flex items-center text-xl text-teal-600">
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

                <div
                  className="ml-2 cursor-pointer"
                  onClick={() => navigate(`/${comment.user.id}`)}
                >
                  {comment.user.name}
                </div>
              </div>
              <div className="ml-2">{comment.text}</div>

              <div className="text-xs">{getDate(comment.date)}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TournamentByIdPage;
