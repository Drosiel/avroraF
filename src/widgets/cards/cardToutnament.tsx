import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ITournament } from "../../features/tournament/lib/constant";
import { ROLE } from "../../features/user/lib/constant";
import { RootState } from "../../redux/store";
import { fetchRemoveTournament } from "../../services/tournament/tournament";
interface ICardTournament {
  item: ITournament;
}

const CardTournament: FC<ICardTournament> = ({ item }) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  const deleteTournament = (id: string) => {
    fetchRemoveTournament(id);
  };

  return (
    <div>
      <div
        className="flex flex-col flex-auto bg-emerald-400 px-4 py-2 cursor-pointer rounded-md"
        onClick={() => navigate(`/tournament/${item.id}`)}
      >
        <div className="flex font-bold text-xl uppercase mb-4">
          <div className="text-cyan-700">{item.name}</div>

          <div className="flex text-red-800 ml-auto items-center">
            <span className="text-xs mr-2 lowercase">команд:</span>

            <div>
              {item?.teams?.length}/{item.maxTeam}
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-amber-600">{item.prize}</div>
        </div>

        <div className="flex items-center">
          <div>{item.typeTournament}</div>

          <div className="text-xs lowercase ml-auto">
            <span>с: {item.dateTournamentStart}</span>{" "}
            <span>по: {item.dateTournamentEnd}</span>
          </div>
        </div>
      </div>

      {user.roles?.some((role) => role.name === ROLE.ADMIN) && (
        <div>
          <button
            className="bg-red-500 px-3 py-1 rounded w-full"
            onClick={() => deleteTournament(item.id)}
          >
            удалить турнир
          </button>
        </div>
      )}
    </div>
  );
};

export default CardTournament;
