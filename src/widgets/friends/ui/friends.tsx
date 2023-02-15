import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ReactComponent as AvatarIcon } from "../../..//public/icons/avatar.svg";
import { useNavigate } from "react-router-dom";

const Friends: FC = () => {
  const navigate = useNavigate();
  const initiator = useSelector((state: RootState) => state.user.data);

  return (
    <div className="grid gap-2 bg-[#4B4B52]">
      {initiator?.friends?.map((friend) => (
        <div
          key={friend.id}
          className="flex items-center h-max gap-2 py-2 px-4 text-lg bg-[#202025]"
        >
          {friend.logoURL && (
            <img
              className="w-14 h-14 object-cover rounded-full"
              src={friend.logoURL}
              alt="avatarF"
            />
          )}

          {!friend.logoURL && (
            <div className="w-14 h-14 object-cover rounded-full border">
              <AvatarIcon />
            </div>
          )}
          <div
            className="cursor-pointer"
            onClick={() => navigate(`/${friend.id}`)}
          >
            {friend.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
