import { FC, useEffect, useState } from "react";
import Button from "../../../shared/ui/button";
import InputComponent from "../../../shared/ui/input";
import { Notifications } from "../lib/helpers";

interface IChat {
  name: string;
  message: string;
}

const Chat: FC<any> = () => {
  const { sendPing, isConnected, dataValue } = Notifications();

  const [array, setArray] = useState<IChat[]>([{ name: "", message: "" }]);
  const [value, setValue] = useState("");

  console.log("dataChat", dataValue);

  useEffect(() => {
    setArray((prev: any) => [...prev, dataValue]);
  }, [dataValue]);

  return (
    <div className="bg-red-500">
      <div>поключение: {isConnected ? "онлайн" : "отключен"}</div>

      <InputComponent
        type="text"
        value={value}
        name="chat"
        label="введите сообщение"
        handleChange={(e: any) => setValue(e.target.value)}
      />
      <Button text="отправить" onClick={() => sendPing(value)} />

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
  );
};

export default Chat;
