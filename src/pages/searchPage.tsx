import { FC, useState } from "react";

import SearchForm from "../widgets/forms/searchForm";
import SearchList from "../widgets/search/ui/searchList";

const SearchPage: FC = () => {
  const [data, setData] = useState<any>({ users: [], teams: [] });

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex mt-4 justify-center">
        <div className="w-2/4">
          <SearchForm setData={(e: any) => setData(e)} />
        </div>
      </div>

      <SearchList arrayData={data} />
    </div>
  );
};

export default SearchPage;
