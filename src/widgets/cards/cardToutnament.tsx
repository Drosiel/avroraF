import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ICardTournament {
  id: number;
}

const CardTournament: FC<ICardTournament> = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col flex-auto bg-emerald-400 px-4 py-2 cursor-pointer rounded-md"
      onClick={() => navigate(`/tournament/${id}`)}
    >
      <div>турнир № {id}</div>
      <div>Призовые</div>
      <div>тип</div>
      <div>кол-во команд 10/10</div>
      <div>дата</div>
    </div>
  );
};

export default CardTournament;
