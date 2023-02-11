import { FC } from "react";
import { Outlet } from "react-router-dom";
import Friends from "../../widgets/friends/ui/friends";
import Header from "../../widgets/header/ui/header";
import SideMenu from "../../widgets/sidemenu/ui/sidemenu";

const PublicLayout: FC = () => {
  return (
    <div className="grid grid-rows-[70px_1fr] min-h-screen bg-[#202025]">
      <Header />

      <div className="flex">
        <SideMenu />

        <div className="w-64 bg-red-400 min-h-full">
          <Friends />
        </div>

        <div className="max-w-screen-xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
