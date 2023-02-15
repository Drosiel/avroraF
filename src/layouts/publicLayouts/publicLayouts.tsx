import { FC } from "react";
import { Outlet } from "react-router-dom";
import Chat from "../../widgets/chats/ui/chats";
import Friends from "../../widgets/friends/ui/friends";
import Header from "../../widgets/header/ui/header";
import SideMenu from "../../widgets/sidemenu/ui/sidemenu";

const PublicLayout: FC = () => {
  return (
    <div className="flex flex-col h-screen bg-[#202025]">
      <Header />

      <div className="grid grid-cols-[66px_256px_1fr_256px] h-full">
        <SideMenu />

        <Friends />

        <Outlet />

        <Chat />
      </div>
    </div>
  );
};

export default PublicLayout;
