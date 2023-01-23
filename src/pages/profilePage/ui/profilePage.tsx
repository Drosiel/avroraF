import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AvatarIcon } from "../../..//public/icons/avatar.svg";
import UserEditForm from "../../../features/user/ui/forms/userEditForm";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { ITeam } from "../../../features/team/lib/constant";
import { fetchRemoveTeam } from "../../../services/team/team";
import { ROLE } from "../../../features/user/lib/constant";
import Button from "../../../shared/ui/button";
import Modal from "../../../widgets/modal/modal";
import CreateTeamForm from "../../../features/team/ui/forms/createTeamForm";
import NotificationProfile from "./notificationProfile/notificationProfile";

const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  const [open, setOpen] = useState(false);

  const deleteTeam = (id: string) => {
    fetchRemoveTeam(user.id, id);
  };

  return (
    <div>
      <div className="m-auto max-w-screen-2xl px-2 py-4 flex flex-col gap-6">
        <div
          className="cursor-pointer text-orange-300"
          onClick={() => navigate("/")}
        >
          на главную
        </div>

        <div className="flex gap-8">
          <div className="flex w-40 h-40 bg-red-400 rounded-full items-center justify-center">
            <AvatarIcon />
          </div>

          <div className="w-80">
            <div>{user?.name}</div>
            <UserEditForm />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            Рейтинг: <span className="text-orange-500">{user.rating}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-500 p-2">
              <div>
                <span>Команды в которых я играю:</span>
              </div>

              <ul className="grid gap-4 p-2">
                {user.teams.map((item: any) => (
                  <li
                    className="flex gap-2 bg-green-300 p-2 cursor-pointer hover:bg-green-200"
                    onClick={() => navigate(`/team/${item.id}`)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-500 p-2">
              <div>
                <span>Созданные мной команды:</span>
              </div>

              <ul className="grid gap-4 p-2">
                {user.teamsCreator.map((item: ITeam) => (
                  <li className="flex">
                    <div
                      className="flex gap-2 bg-green-300 p-2 cursor-pointer hover:bg-green-200 flex-1"
                      onClick={() => navigate(`/team/${item.id}`)}
                    >
                      {item.name}
                    </div>

                    <div className="h-full">
                      <button
                        className="bg-red-600 text-orange-50 px-2 h-full"
                        onClick={() => deleteTeam(item.id)}
                      >
                        Удалить команду
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <NotificationProfile />
          </div>

          <div className="flex gap-2">
            <div>
              <Button text="СОЗДАТЬ КОМАНДУ" onClick={() => setOpen(true)} />
            </div>

            {user.roles?.some((role) => role.name === ROLE.ADMIN) && (
              <div>
                <Button text="СОЗДАТЬ РОЛЬ" onClick={() => navigate("/role")} />
              </div>
            )}
          </div>
        </div>
      </div>

      {open && (
        <Modal textHeader="Создание команды" open={open} onClose={setOpen}>
          <CreateTeamForm />
        </Modal>
      )}
    </div>
  );
};

export default ProfilePage;
