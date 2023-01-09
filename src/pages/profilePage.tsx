import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AvatarIcon } from "../public/icons/avatar.svg";
import UserEditForm from "../features/forms/userForms/userEditForm";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const [userTeam, setUserTeam] = useState<any>([]);

  const user = useSelector((state: RootState) => state.user.data);
  const team = useSelector((state: RootState) => state.team.data);

  useEffect(() => {
    const arr = team.filter((item) => item.creatorId === user.id);
    setUserTeam(arr);
  }, [team, user]);

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
            <UserEditForm />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            рейтинг: <span className="text-orange-500">{user.rating}</span>
          </div>

          {userTeam && (
            <div>
              {userTeam.map((item: any) => (
                <div>{item.name}</div>
              ))}
            </div>
          )}

          <div>
            <span
              className="text-orange-500 cursor-pointer"
              onClick={() => navigate("/team")}
            >
              создать команду
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
