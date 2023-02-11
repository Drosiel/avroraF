import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AvatarIcon } from "../../../public/icons/avatar.svg";
import { RootState } from "../../../redux/store";
import { fetchNotificationUser } from "../../../services/notifications/notifications";

const SearchList: FC<{ arrayData: { users: []; teams: [] } }> = ({
  arrayData,
}) => {
  const navigate = useNavigate();
  const initiator = useSelector((state: RootState) => state.user.data);

  const typeNotification = "addFriend";

  const handleClick = (friend: any) => {
    fetchNotificationUser(friend.id, initiator.id, typeNotification);
  };

  return (
    <div className="grid w-full gap-4">
      {arrayData.users.length === 0 && arrayData?.teams.length === 0 && (
        <div className="w-full text-center">НИЧЕГО НЕ НАЙДЕНО</div>
      )}

      {arrayData.users.length > 0 && (
        <div className="flex flex-col">
          <div className="text-lg">Игроки</div>

          <ul className="grid grid-cols-3 gap-1">
            {arrayData.users.map((item: any) => (
              <li className="flex items-center p-2 cursor-pointer text-xl bg-slate-400 hover:bg-slate-300">
                <div onClick={() => navigate(`/${item.id}`)}>
                  <div>
                    {item?.logoURL && (
                      <img
                        className="flex w-16 h-16 object-cover rounded-full"
                        src={item?.logoURL}
                        alt="avatar"
                      />
                    )}

                    {!item?.logoURL && (
                      <div className="flex w-16 h-16 object-cover rounded-full">
                        <AvatarIcon />
                      </div>
                    )}
                  </div>

                  <div className="ml-2">{item.name}</div>
                </div>

                <button onClick={() => handleClick(item)}>
                  добавить в друзья
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {arrayData.teams.length > 0 && (
        <div className="flex flex-col">
          <div className="text-lg">Команды</div>

          <ul className="grid grid-cols-3 gap-1">
            {arrayData.teams.map((item: any) => (
              <li
                className="flex items-center p-2 cursor-pointer text-xl bg-slate-400 hover:bg-slate-300"
                onClick={() => navigate(`/team/${item.id}`)}
              >
                <div>
                  {item?.logoURL && (
                    <img
                      className="flex w-16 h-16 object-cover rounded-full"
                      src={item?.logoURL}
                      alt="avatar"
                    />
                  )}

                  {!item?.logoURL && (
                    <div className="flex w-16 h-16 object-cover rounded-full">
                      <AvatarIcon />
                    </div>
                  )}
                </div>

                <div className="ml-2">{item.name}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchList;
