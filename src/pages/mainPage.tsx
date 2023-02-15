import { FC } from "react";

import NewsList from "../widgets/news/ui/newsList";

const MainPage: FC = () => {
  return (
    <div className="mt-4">
      <div className="px-2">
        <NewsList />
      </div>
    </div>
  );
};

export default MainPage;
