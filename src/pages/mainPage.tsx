import { FC } from "react";
import Chat from "../widgets/chats/ui/chats";
import NewsList from "../widgets/news/ui/newsList";

const MainPage: FC = () => {
  console.log("process.env.NODE_ENV===", process.env.NODE_ENV);

  return (
    <div className="grid w-full grid-cols-[1fr_300px] mt-4">
      <div className="px-2">
        <NewsList />
      </div>

      <div>
        <div>проходящие матчи</div>

        <Chat />

        <div>4</div>
      </div>
    </div>
  );
};

export default MainPage;
