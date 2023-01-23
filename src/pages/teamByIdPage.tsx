import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ITeam } from "../features/team/lib/constant";
import { ReactComponent as AvatarIcon } from "../public/icons/avatar.svg";

import { RootState } from "../redux/store";
import { fetchIdTeam } from "../services/team/team";

const TeamByIdPage: FC = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  const [value, setValue] = useState<ITeam>({
    id: "",
    name: "",
    rating: 0,
    logo: "",
    creatorId: "",
    members: [],
    tournaments: [],
    stats: "",
  });

  useEffect(() => {
    if (teamId) {
      fetchIdTeam(teamId).then((data) => setValue(data));
    }
  }, [teamId]);

  return (
    <div className="px-2 py-2 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex w-40 h-40 bg-red-400 rounded-full items-center justify-center">
          <AvatarIcon />
        </div>

        <div className="p-3">
          <div className="text-3xl">{value.name}</div>

          <div>{value.rating}</div>
        </div>
      </div>

      <div className="grid gap-3 grid-cols-2">
        <div className="bg-green-300 px-2">
          <div className="text-lg">участники</div>

          <div className="ml-4">
            {value.members?.map((user) => (
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/${user.id}`)}
              >
                {user.name || "Пользователь"}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-300 px-2">
          <div className="text-lg">турниры</div>

          <div className="ml-4">
            {value.tournaments?.map((tournaments) => (
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/tournament/${tournaments.id}`)}
              >
                {tournaments.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamByIdPage;
