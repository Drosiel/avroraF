import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TournamentPage: FC = () => {
  const { tournamentId } = useParams();
  const navigate = useNavigate();

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
        <div className="text-3xl">турнир № {tournamentId}</div>

        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default TournamentPage;
