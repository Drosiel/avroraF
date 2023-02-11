import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Friends: FC = () => {
  const initiator = useSelector((state: RootState) => state.user.data);

  return (
    <div>
      <div>
        {initiator?.friends?.map((friend) => (
          <div key={friend.id}>
            <p>{friend.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
