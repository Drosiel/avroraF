import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AvatarIcon } from "../../../public/icons/avatar.svg";
import { RootState } from "../../../redux/store";

const SearchItem: FC<any> = ({ title, handleClick, searchArray, isUsers }) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  return (
    <div className="flex flex-col">
      <div className="text-lg">{title}</div>

      <ul className="grid grid-cols-3 gap-1">
        {searchArray.map((item: any) => (
          <li className="relative rounded items-center p-2 bg-[#4B4B52]">
            <div className="flex items-center">
              {item?.logoURL && (
                <img
                  className="flex w-10 h-10 object-cover rounded"
                  src={item?.logoURL}
                  alt="avatar"
                />
              )}

              {!item?.logoURL && (
                <div className="flex w-10 h-10 object-cover rounded">
                  <AvatarIcon />
                </div>
              )}

              <div
                className="ml-2 flex-1 text-right cursor-pointer"
                onClick={() =>
                  navigate(isUsers ? `/${item.id}` : `/team/${item.id}`)
                }
              >
                {item.name}
              </div>
            </div>

            {isUsers &&
              user?.friends?.find((friend) => friend.id !== item.id) && (
                <button
                  className="w-4 h-4 absolute cursor-pointer top-1 left-1 rounded-full bg-[#FA7A02] hover:bg-[#673F1D]"
                  onClick={() => handleClick(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </button>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchItem;
