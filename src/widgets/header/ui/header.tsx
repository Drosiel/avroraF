import { FC, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slices/user/userSlice";
import { RootState } from "../../../redux/store";
import Popup from "../../popup/ui/popup";
import { Menu } from "../lib/constant";

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);

  const user = useSelector((state: RootState) => state.user.data);

  return (
    <div className="flex gap-4 items-center h-14 px-4 border-b-2 bg-opacity-75 bg-teal-700">
      <div
        className="uppercase font-bold text-orange-300 text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        tournament-project
      </div>

      <div className="mx-auto">
        <nav>
          <ul className="flex gap-4">
            {Menu.map((item) => (
              <li
                className="cursor-pointer text-orange-300 uppercase"
                onClick={() => navigate(`/${item.link}`)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-4 ml-auto text-base cursor-pointer relative">
        {user.name && (
          <div
            className="text-orange-600 cursor-pointer text-2xl"
            onClick={() => setOpenPopup(true)}
          >
            {user.name}
          </div>
        )}

        {!user.name && <div onClick={() => navigate("/login")}>Войти</div>}

        {user.name && <div onClick={() => dispatch(logout())}>выйти</div>}

        <Popup open={openPopup} onClose={setOpenPopup} />
      </div>
    </div>
  );
};

export default Header;
