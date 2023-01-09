import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import CardTournament from "../widgets/cards/cardToutnament";

const MainPage: FC = () => {
  const navigate = useNavigate();
  const tournament = useSelector((state: RootState) => state.tournament.data);

  return (
    <div className="px-2 py-2 flex gap-4 flex-col">
      <div>
        <button onClick={() => navigate("/tournament")}>создать турнир</button>
      </div>

      <div className="grid gap-4 grid-cols-3">
        {tournament.map((item) => (
          <CardTournament item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
