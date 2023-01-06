import { FC } from "react";
import CardTournament from "../widgets/cards/cardToutnament";

const MainPage: FC = () => {
  return (
    <div className="px-2 py-2 flex gap-4">
      {[1, 2, 3, 4].map((item) => (
        <CardTournament id={item} />
      ))}
    </div>
  );
};

export default MainPage;
