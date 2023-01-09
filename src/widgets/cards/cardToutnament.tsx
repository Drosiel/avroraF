import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IDataTournament } from "../../features/tournaments/tournamentSlice";

interface ICardTournament {
  item: IDataTournament;
}

const CardTournament: FC<ICardTournament> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col flex-auto bg-emerald-400 px-4 py-2 cursor-pointer rounded-md"
      onClick={() => navigate(`/tournament/${item.id}`)}
    >
      <div>{item.name}</div>
      <div>{item.prize}</div>
      <div>{item.typeTournament}</div>
      <div>{`кол-во команд 1/${item.countTeam}`}</div>
      <div>{item.dateTournament}</div>
    </div>
  );
};

export default CardTournament;
