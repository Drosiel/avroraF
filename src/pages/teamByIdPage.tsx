import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IDataTeam } from "../features/teams/teamSlice";
import { fetchIdTeam } from "../services/team/team";

const TeamByIdPage: FC = () => {
  const [value, setValue] = useState<IDataTeam>({
    id: "",
    name: "",
    rating: 0,
    logo: "",
    creatorId: "",
    structure: "",
    stats: "",
  });
  const { teamId } = useParams();

  useEffect(() => {
    if (teamId) {
      fetchIdTeam(teamId).then((data) => setValue(data));
    }
  }, [teamId]);

  return (
    <div className="px-2 py-2 flex flex-col gap-4">
      <div>название: {value.name}</div>
      <div>рейтинг: {value.rating}</div>
    </div>
  );
};

export default TeamByIdPage;
