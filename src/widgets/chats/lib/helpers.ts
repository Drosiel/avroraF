import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { RootState } from "../../../redux/store";

const socket = io(
  process.env.NODE_ENV === "development"
    ? `ws://localhost:3001`
    : `wss://avrorab-production.up.railway.app`
);
export const Notifications = () => {
  const user = useSelector((state: RootState) => state.user.data);

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [dataValue, setDataValue] = useState();

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("messageToClient", (data: any) => {
      setDataValue(data);
    });

    // if (!user.name) {
    //   socket.disconnect();
    //   socket.off("connect");
    //   socket.off("disconnect");
    //   socket.off("messageToClient");
    //   setIsConnected(false);
    // }

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("messageToClient");
    };
  }, [user]);

  const sendPing = (message: any) => {
    socket.emit("messageToServer", {
      name: user.name,
      message: message,
    });
  };

  return { sendPing, isConnected, dataValue };
};
