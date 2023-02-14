import { FC, useState } from "react";
import { useSelector } from "react-redux";

import CreateTournamentForm from "../features/tournament/ui/forms/createTournamentForm";
import { ROLE } from "../features/user/lib/constant";
import { RootState } from "../redux/store";
import Button from "../shared/ui/button";
import CardTournament from "../widgets/cards/cardToutnament";
import Modal from "../widgets/modal/modal";

const TournamentPage: FC = () => {
  const tournament = useSelector((state: RootState) => state.tournament.data);
  const user = useSelector((state: RootState) => state.user.data);

  const [open, setOpen] = useState(false);

  return (
    <div className="px-2 py-2 flex gap-4 flex-col">
      {user.roles?.some((role) => role.name === ROLE.ADMIN) && (
        <div>
          <Button
            typeButton="secondary"
            text="СОЗДАТЬ ТУРНИР"
            onClick={() => setOpen(true)}
          />
        </div>
      )}

      {tournament && (
        <div className="grid gap-4 grid-cols-4">
          {tournament.map((item) => (
            <CardTournament key={item.id} item={item} />
          ))}
        </div>
      )}

      {open && (
        <Modal textHeader="Создание турнира" open={open} onClose={setOpen}>
          <CreateTournamentForm onClose={setOpen} />
        </Modal>
      )}
    </div>
  );
};

export default TournamentPage;
