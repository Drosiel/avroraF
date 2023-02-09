import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../widgets/header/ui/header";

const PublicLayout: FC = () => {
  return (
    <div className="min-h-screen bg-[#202025]">
      <Header />

      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
