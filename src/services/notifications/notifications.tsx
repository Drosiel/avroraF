import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { io } from "socket.io-client";
import { ITeam } from "../../features/team/lib/constant";
import { IUser } from "../../features/user/lib/constant";
import { RootState } from "../../redux/store";
import { Axios } from "../axios";
import { getCookie } from "../cookies";

const socket = io("ws://localhost:3001");

const cookie = `; ${document.cookie}`;
const token: any = getCookie("token", cookie);

export const Notifications = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const user = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("messageToServer", (data) => {
      console.log("messageToServer", data);
    });

    socket.on("messageToClient", (data) => {
      console.log("messageToClient", data);
    });

    socket.on(user.id, (data) => {
      console.log("USER", data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("messageToServer");
      socket.off(user.id);
    };
  }, [user]);

  const sendPing = () => {
    socket.emit("messageToServer", {
      id: "c11326a3-a9d5-4b13-9674-e3ef15fb3ff3",
    });
  };

  return (
    <div>
      <p>Connected: {"" + isConnected}</p>

      <button onClick={sendPing}>Send ping</button>
    </div>
  );
};

export const fetchNotificationAddUserInTeam = async (
  userId: string,
  initiatorId: string,
  teamId: string,
  text: string
) => {
  const model = { userId, initiatorId, teamId, text };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      "/notification/create",
      model,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (status === 201) {
      return data;
    }
  } catch (error) {}
};

export const fetchApproveUser = async (
  notificationId: string | boolean,
  approve: boolean
) => {
  const model = { notificationId, approve };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      "/notification/approve",
      model,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (status === 201) {
      return data;
    }
  } catch (error) {}
};
