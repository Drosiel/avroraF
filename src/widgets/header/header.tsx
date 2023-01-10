import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

const Header: FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  return (
    <div className="flex h-12 px-4 items-center bg-red-400">
      <div
        className="uppercase font-bold text-slate-500 text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        DOTA2Project
      </div>

      <div className="flex gap-4 ml-auto text-3xl cursor-pointer">
        <div onClick={() => navigate("/team")}>команды</div>

        {user.email && (
          <div onClick={() => navigate("/profile")}>{user?.email}</div>
        )}

        {!user.email && <div onClick={() => navigate("/login")}>Войти</div>}
      </div>
    </div>
  );
};

export default Header;
