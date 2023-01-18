import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import Select from "../../shared/ui/select";

const Header: FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  const [value, setValue] = useState(null);

  console.log(value);

  const arr = [{ name: "мой профиль" }, { name: "Мои команды" }];

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
        {/* {user.email && (
          <Select
            options={arr}
            name="team"
            onChange={(e) => setValue(e.target.value)}
          />
        )} */}

        {user.email && (
          <div onClick={() => navigate("/profile")}>
            {user?.name || user?.email}
          </div>
        )}

        {!user.email && <div onClick={() => navigate("/login")}>Войти</div>}
      </div>
    </div>
  );
};

export default Header;
