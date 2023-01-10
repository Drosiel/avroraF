import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IDataTeam } from "../features/teams/teamSlice";
import { RootState } from "../redux/store";
import { fetchAddUserInTeam, fetchIdTeam } from "../services/team/team";

const TeamByIdPage: FC = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  const [value, setValue] = useState<IDataTeam>({
    id: "",
    name: "",
    rating: 0,
    logo: "",
    creatorId: "",
    members: [],
    tournaments: [],
    stats: "",
  });

  const addUser = (id: string | undefined) => {
    fetchAddUserInTeam(user, id).then((data) =>
      setValue({ ...value, members: data.members })
    );
  };

  useEffect(() => {
    if (teamId) {
      fetchIdTeam(teamId).then((data) => setValue(data));
    }
  }, [teamId]);

  return (
    <div className="px-2 py-2 flex flex-col gap-4">
      <div>название: {value.name}</div>
      <div>рейтинг: {value.rating}</div>

      <div>
        <div>добавить юзера</div>
        <div>
          <button onClick={() => addUser(teamId)}>ДОБАВИТЬ ИГРОКА</button>
        </div>
      </div>
      <div className="grid gap-3 grid-cols-2">
        <div className="bg-green-300 px-2">
          <div className="text-lg">участники</div>

          <div className="ml-4">
            {value.members?.map((user) => (
              <div>{user.email}</div>
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
