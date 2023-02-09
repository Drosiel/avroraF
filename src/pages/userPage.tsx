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
    <div className="pt-5">
      <div className="flex gap-4">
        {user?.logoURL && (
          <img className="w-40 h-40" src={user?.logoURL} alt="avatar" />
        )}

        <div className="w-full">
          <div className="flex">
            <span className="text-2xl">{user?.name}</span>

            <div className="ml-auto">
              <Button text="Пригласить игрока" onClick={() => setOpen(true)} />
            </div>
          </div>

          {user?.teams && (
            <div>
              <p>команды</p>

              <div className="grid gap-2 grid-cols-5 mt-3 ml-3">
                {user?.teams.map((team) => (
                  <div
                    className="cursor-pointer bg-[#4B4B52] p-[2px]"
                    onClick={() => navigate(`/team/${team.id}`)}
                  >
                    {team?.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" flex flex-col w-72 rounded items-center justify-center mt-5 bg-[#4B4B52] p-4">
        <div>рейтинг</div>

        <div className="text-3xl font-bold text-[#FA7A02]">{user?.rating}</div>
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
