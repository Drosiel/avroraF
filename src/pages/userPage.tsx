import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotificationAddUserInTeamForm from "../features/notification/ui/forms/notifAddUserInTeamForm";
import { IUser } from "../features/user/lib/constant";
import { fetchIdUser } from "../services/user/user";
import Button from "../shared/ui/button";
import Modal from "../widgets/modal/modal";

const UserPage: FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (userId) {
      fetchIdUser(userId).then((data) => setUser(data));
    }
  }, [userId]);

  return (
    <div className="px-2 py-2 flex flex-col gap-4">
      <div>{user?.name}</div>

      {user?.teams && (
        <div className="flex gap-2">
          {user?.teams.map((team) => (
            <div
              className="cursor-pointer bg-lime-400 p-3"
              onClick={() => navigate(`/team/${team.id}`)}
            >
              {team?.name}
            </div>
          ))}
        </div>
      )}

      <div>
        <Button text="Пригласить игрока" onClick={() => setOpen(true)} />
      </div>

      {open && user && (
        <Modal textHeader="Приглашение игрока" open={open} onClose={setOpen}>
          <NotificationAddUserInTeamForm user={user} />
        </Modal>
      )}
    </div>
  );
};

export default UserPage;
