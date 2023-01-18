import { AxiosResponse } from "axios";
import { Axios } from "../axios";
import { getCookie } from "../cookies";

const cookie = `; ${document.cookie}`;
const token: any = getCookie("token", cookie);

export const fetchCreateComment = async ({
  userId,
  tournamentId,
  text,
}: any) => {
  const model = { userId, tournamentId, text };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      "/comment/create",
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
  } catch (error) {
    // console.log(error);
  }
};
