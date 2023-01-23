import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllUsers } from "../../../services/user/user";
import { IUser } from "../lib/constant";

const UsersList: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllUsers().then((data) => setUsers(data));
  }, []);

  return (
    <ul className="flex gap-2">
      {users.map((user) => (
        <li
          className="cursor-pointer hover:bg-slate-500"
          onClick={() => navigate(`/${user.id}`)}
        >
          {user.name || "Пользователь"}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
