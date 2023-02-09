import { FC, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slices/user/userSlice";
import { RootState } from "../../../redux/store";
import Button from "../../../shared/ui/button";
import IconButton from "../../../shared/ui/iconButton";
import Popup from "../../popup/ui/popup";
import { Menu } from "../lib/constant";

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);

  const user = useSelector((state: RootState) => state.user.data);

  return (
    <div className="flex gap-4 items-center h-[70px] pl-8 pr-16 border-b-2 border-white border-opacity-30">
      <div
        className="uppercase font-bold text-orange-300 text-2xl px-8 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Avrora
      </div>

      <div className="divide-y-2 h-[80%] bg-white bg-opacity-5 w-[2px]"></div>

      <nav className="flex ml-16 flex-1 gap-4">
        {Menu.map((item) => (
          <Link
            className="cursor-pointer text-[#FA7A02] text-sm uppercase whitespace-nowrap"
            to={`/${item.link}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {window.location.pathname !== "/search" && (
        <IconButton
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          }
          onClick={() => navigate(`/search`)}
          typeButton="secondary"
        />
      )}

      <div className="flex gap-4 text-base cursor-pointer">
        {user.name && (
          <div
            className="flex items-center cursor-pointer text-2xl"
            onClick={() => navigate("/profile")}
          >
            {user.logoURL && (
              <img
                className="rounded-full border-2 border-[#9EE800] w-12 h-12"
                src={user.logoURL}
                alt="avatar"
              />
            )}

            <p className="ml-4 text-[#9EE800]">{user.name}</p>
          </div>
        )}

        {!user.name && (
          <Button
            text="Войти"
            onClick={() => navigate("/login")}
            typeButton="primary"
          />
        )}

        {user.name && (
          <div
            className="flex items-center ml-4 text-[#FA7A02] text-2xl"
            onClick={() => dispatch(logout())}
          >
            выйти
          </div>
        )}

        <Popup open={openPopup} onClose={setOpenPopup} />
      </div>
    </div>
  );
};

export default Header;
