import { AxiosResponse } from "axios";
import { Axios } from "../axios";

//удалить изображение
export const fetchRemoveImage = async (uuid: string | null) => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.delete(
      `https://api.uploadcare.com/files/${uuid}/storage/`,
      {
        headers: {
          Accept: "application/vnd.uploadcare-v0.7+json",
          Authorization: `Uploadcare.Simple ${process.env.REACT_APP_UPLOADCARE_KEY}:${process.env.REACT_APP_UPLOADCARE_SECRET_KEY}`,
        },
      }
    );

    if (status === 201) {
      return data;
    }
  } catch (error) {}
};
