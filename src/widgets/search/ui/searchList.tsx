import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { fetchNotificationUser } from "../../../services/notifications/notifications";
import SearchItem from "./searchItem";

const SearchList: FC<{ arrayData: { users: []; teams: [] } }> = ({
  arrayData,
}) => {
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
        <SearchItem
          title="Игроки"
          handleClick={handleClick}
          searchArray={arrayData.users}
          isUsers
        />
      )}

      {arrayData.teams.length > 0 && (
        <SearchItem title="Команды" searchArray={arrayData.teams} />
      )}
    </div>
  );
};

export default SearchList;
