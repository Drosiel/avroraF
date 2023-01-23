import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateTeamForm from "../features/team/ui/forms/createTeamForm";
import { RootState } from "../redux/store";

const TeamPage: FC = () => {
  const navigate = useNavigate();
  const team = useSelector((state: RootState) => state.team.data);
  const user = useSelector((state: RootState) => state.user.data);

  return (
    <div className="flex flex-col gap-6 items-center py-8">
      {user.name && (
        <div className="w-96">
          <CreateTeamForm />
        </div>
      )}

      <ul className="grid items-center gap-1 grid-cols-5">
        {team?.map((item) => (
          <li
            className="flex items-center text-slate-200 text-2xl font-extrabold cursor-pointer bg-slate-500 p-2"
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
