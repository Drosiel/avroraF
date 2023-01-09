import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateTeamForm from "../features/forms/teamForms/createTeamForm";
import { RootState } from "../redux/store";

const TeamPage: FC = () => {
  const navigate = useNavigate();
  const team = useSelector((state: RootState) => state.team.data);

  return (
    <div className="flex flex-col gap-6">
      <CreateTeamForm />

      <ul className="flex flex-col items-center gap-2">
        {team?.map((item) => (
          <li
            className="flex items-center text-lime-700 text-2xl font-extrabold cursor-pointer"
            onClick={() => navigate(`/team/${item.id}`)}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
