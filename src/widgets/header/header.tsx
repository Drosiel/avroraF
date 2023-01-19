import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/user/userSlice";
import { RootState } from "../../redux/store";
import { deleteCookie } from "../../services/cookies";

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.data);

  return (
    <div className="flex h-12 px-4 items-center bg-red-400">
      <div
        className="uppercase font-bold text-slate-500 text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        DOTA2Project
      </div>

      <div className="mx-8">
        <nav>
          <ul>
            <li className="cursor-pointer" onClick={() => navigate("/team")}>
              команды
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-4 ml-auto text-base cursor-pointer">
        {user.email && (
          <div onClick={() => navigate("/profile")}>
            {user?.name || "Пользователь"}
          </div>
        )}

        {user.email && <div onClick={() => dispatch(logout())}>выйти</div>}

        {!user.email && <div onClick={() => navigate("/login")}>Войти</div>}
      </div>
    </div>
  );
};

export default Header;
