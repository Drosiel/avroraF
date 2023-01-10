import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IDataTeam } from "../features/teams/teamSlice";
import { RootState } from "../redux/store";
import { fetchAddUserInTeam, fetchIdTeam } from "../services/team/team";

const TeamByIdPage: FC = () => {
  const user = useSelector((state: RootState) => state.user.data);

  const [value, setValue] = useState<IDataTeam>({
    id: "",
    name: "",
    rating: 0,
    logo: "",
    creatorId: "",
    members: [],
    stats: "",
  });
  const { teamId } = useParams();

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
          <button onClick={() => addUser(teamId)}>ДОБАВИТЬ</button>
        </div>
      </div>

      <div>
        {value.members?.map((user) => (
          <div>{user.email}</div>
        ))}
      </div>
    </div>
  );
};

export default TeamByIdPage;
