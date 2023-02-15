import { FC } from "react";

const SideMenu: FC = () => {
  const arr = [1, 2, 3, 4];

  return (
    <div className="border-r-2">
      <div className="grid gap-2">
        {arr.map((item, idx) => (
          <div
            key={idx}
            className="flex h-16 items-center justify-center bg-slate-700 hover:bg-opacity-40 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
