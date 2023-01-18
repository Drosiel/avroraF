import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROLE } from "../features/user/lib/constant";
import { RootState } from "../redux/store";
import Button from "../shared/ui/button";
import CardTournament from "../widgets/cards/cardToutnament";

const MainPage: FC = () => {
  const navigate = useNavigate();
  const tournament = useSelector((state: RootState) => state.tournament.data);
  const user = useSelector((state: RootState) => state.user.data);

  return (
    <div className="px-2 py-2 flex gap-4 flex-col">
      {user.roles?.some((role) => role.name === ROLE.ADMIN) && (
        <div>
          <Button
            isSecondary
            text="СОЗДАТЬ ТУРНИР"
            onClick={() => navigate("/tournament")}
          />
        </div>
      )}

      {tournament && (
        <div className="grid gap-4 grid-cols-3">
          {tournament.map((item) => (
            <CardTournament item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
