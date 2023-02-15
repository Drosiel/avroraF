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

  const [array, setArray] = useState<IChat[]>([{ name: "", message: "" }]);
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (value !== "") {
      sendPing(value);
      setValue("");
    }
  };

  useEffect(() => {
    setArray((prev: any) => [...prev, dataValue]);
  }, [dataValue]);

  return (
    <div className="bg-[#4B4B52] relative h-full">
      <div className="flex flex-col w-full h-full absolute">
        <div>поключение: {isConnected ? "онлайн" : "отключен"}</div>

        <div className="flex flex-col overflow-y-auto overflow-x-hidden">
          {array.length > 0 && (
            <div>
              {array.map((item: IChat, idx) => (
                <div key={idx} className="flex gap-2">
                  <div className="text-green-800">{item?.name}</div>

                  <div>{item?.message}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {user.name && (
          <div className="mt-auto">
            <InputComponent
              type="text"
              value={value}
              name="chat"
              label="введите сообщение"
              handleChange={(e: any) => setValue(e.target.value)}
              onKeyDown={(e: any) => e.key === "Enter" && handleClick()}
            />
            <Button text="отправить" onClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
