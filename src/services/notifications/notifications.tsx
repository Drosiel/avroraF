import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { io } from "socket.io-client";
import { RootState } from "../../redux/store";
import { Axios } from "../axios";
import { getCookie } from "../cookies";

const cookie = `; ${document.cookie}`;
const token: any = getCookie("token", cookie);

export const fetchNotificationUser = async (
  userId: string,
  initiatorId: string,
  typeNotification: string,
  teamId?: string
) => {
  const model = { initiatorId, userId, typeNotification, teamId };

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
  approve: boolean,
  typeNotification: string
) => {
  const model = { notificationId, approve, typeNotification };

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
