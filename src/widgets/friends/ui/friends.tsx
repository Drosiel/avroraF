import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Friends: FC = () => {
  const initiator = useSelector((state: RootState) => state.user.data);

  return (
    <div>
      <div className="p-1">
        {initiator?.friends?.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center gap-2 py-2 px-4 text-lg bg-[#202025]"
          >
            {friend.logoURL && (
              <img
                className="w-14 h-14 object-cover rounded-full"
                src={friend.logoURL}
                alt="avatarF"
              />
            )}
            <p>{friend.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
