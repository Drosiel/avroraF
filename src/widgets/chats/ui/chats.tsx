import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Button from "../../../shared/ui/button";
import InputComponent from "../../../shared/ui/input";
import { Notifications } from "../lib/helpers";

interface IChat {
  name: string;
  message: string;
}

const Chat: FC<any> = () => {
  const user = useSelector((state: RootState) => state.user.data);
  const { sendPing, isConnected, dataValue } = Notifications();

  const [array, setArray] = useState<IChat[] | any>([]);
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (value !== "") {
      sendPing(value);
      setValue("");
    }
  };

  useEffect(() => {
    if (dataValue) {
      setArray((prev: any) => [...prev, dataValue]);
    }
  }, [dataValue]);

  return (
    <div className="bg-[#4B4B52] relative h-full">
      <div className="flex flex-col w-full h-full absolute">
        <div className="p-2">
          поключение:{" "}
          <span
            className={`${isConnected ? "text-[#9EE800]" : "text-[#FF3D00]"}`}
          >
            {isConnected ? "онлайн" : "отключен"}
          </span>
        </div>

        <div className="flex flex-col overflow-y-auto overflow-x-hidden p-2">
          {array.length > 0 && (
            <div>
              {array.map((item: IChat, idx: any) => (
                <div key={idx} className="flex gap-2 text-sm">
                  <div className="text-[#FA7A02]">{item?.name}:</div>

                  <div>{item?.message}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {user.name && (
          <div className="grid gap-2 mt-auto p-2">
            <InputComponent
              type="text"
              value={value}
              name="chat"
              handleChange={(e: any) => setValue(e.target.value)}
              onKeyDown={(e: any) => e.key === "Enter" && handleClick()}
              placeholder="Отправить сообщение"
            />

            <div>
              <Button text="отправить" onClick={handleClick} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
