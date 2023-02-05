import { FC } from "react";
import CreateRoleForm from "../features/user/ui/forms/createRoleForm";

const AdminPage: FC = () => {
  return (
    <div className="px-2 py-2 flex gap-4 flex-col">
      <div className="w-96">
        <CreateRoleForm />
      </div>
    </div>
  );
};

export default AdminPage;
