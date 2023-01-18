import { FC } from "react";
import { useNavigate } from "react-router-dom";
import CreateTournamentForm from "../features/tournament/ui/forms/createTournamentForm";

const TournamentPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="px-2 py-2 flex flex-col gap-4 items-center">
      <div className="ml-auto">
        <button
          className="text-2xl font-extrabold text-green-800"
          onClick={() => navigate("/")}
        >
          на главную
        </button>
      </div>

      <div className="flex flex-col gap-2 w-96">
        <CreateTournamentForm />
      </div>
    </div>
  );
};

export default TournamentPage;
