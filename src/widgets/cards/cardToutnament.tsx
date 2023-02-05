import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ITournament } from "../../features/tournament/lib/constant";
import { ROLE } from "../../features/user/lib/constant";
import { deleteTournament } from "../../redux/slices/tournaments/tournamentSlice";

import { RootState } from "../../redux/store";
import { fetchRemoveTournament } from "../../services/tournament/tournament";
import ConfirmForm from "../forms/conformForm";
import Modal from "../modal/modal";

interface ICardTournament {
  item: ITournament;
}

const CardTournament: FC<ICardTournament> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.user.data);

  const dateStart = new Date(item.dateTournamentStart);
  const dateEnd = new Date(item.dateTournamentEnd);

  const shortDate = new Intl.DateTimeFormat("ru-RU", {
    month: "short",
    day: "numeric",
  }).format(dateStart);

  const handleDeleteTournament = (value: boolean) => {
    setOpen(false);

    if (value) {
      fetchRemoveTournament(item.id).then((data) =>
        dispatch(deleteTournament(item.id))
      );
    }
  };

  const getBadge = () => {
    if (dateEnd < new Date()) {
      return (
        <div className="flex bg-[#962020] px-2 w-max h-6 rounded items-center justify-center">
          <span className="font-semibold uppercase text-white">закончился</span>
        </div>
      );
    }

    if (dateStart > new Date()) {
      return (
        <div className="flex bg-[#5e5bd3] px-2 w-max h-6 rounded items-center justify-center">
          <span className="font-semibold uppercase text-white">начнётся</span>
        </div>
      );
    }

    if (dateStart < new Date() && dateEnd > new Date()) {
      return (
        <div className="flex bg-[#5bd36f] px-2 w-max h-6 rounded items-center justify-center">
          <span className="font-semibold uppercase text-white">идёт</span>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col flex-auto bg-[#1b1b21] p-4 cursor-pointer rounded-md"
        onClick={() => navigate(`/tournament/${item.id}`)}
      >
        <div>{getBadge()}</div>

        <div className="mt-2">
          <div className="flex justify-center">
            <div className="bg-slate-200 rounded-full w-16 h-16 flex items-center justify-center border-indigo-600 border">
              logo1
            </div>

            <div className="bg-slate-200 rounded-full w-16 h-16 flex items-center justify-center border-indigo-600 border -ml-7">
              logo2
            </div>
          </div>

          <div className="flex justify-center mt-4 text-2xl whitespace-nowrap overflow-hidden font-semibold text-white">
            <span>{item.name}</span>
          </div>

          <div className="bg-[#26262e] rounded px-4 mt-3 py-3">
            <span className="font-semibold text-white text-3xl">
              {item.prize}
            </span>
          </div>

          <div className="grid grid-cols-3 mt-4">
            <div className="flex flex-col text-lg uppercase font-semibold text-[#67677b] items-center">
              <div>команд</div>

              <div className="text-white">
                {item?.teams?.length}/{item.maxTeam}
              </div>
            </div>
            <div className="flex flex-col text-lg uppercase font-semibold text-[#67677b] items-center">
              <div>тип</div>

              <div className="text-white">
                <div>{item.typeTournament}</div>
              </div>
            </div>
            <div className="flex flex-col text-lg uppercase font-semibold text-[#67677b] items-center">
              <div>начало</div>

              <div className="text-white">
                <span>{shortDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {user.roles?.some((role) => role.name === ROLE.ADMIN) && (
        <div>
          <button
            className="bg-red-500 px-3 py-1 rounded w-full"
            onClick={() => setOpen(true)}
          >
            удалить турнир
          </button>
        </div>
      )}

      {open && (
        <Modal textHeader="Подтверждение" open={open} onClose={setOpen}>
          <ConfirmForm onClick={handleDeleteTournament} />
        </Modal>
      )}
    </div>
  );
};

export default CardTournament;
