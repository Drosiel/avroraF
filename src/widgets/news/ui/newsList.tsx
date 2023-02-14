import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const NewsList: FC = () => {
  const news = useSelector((state: RootState) => state.news.data);

  return (
    <div>
      {news?.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
};

export default NewsList;
