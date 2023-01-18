import { AxiosResponse } from "axios";
import { IToken } from "../../features/auth/lib/constant";
import { Axios } from "../axios";
import { setCookie } from "../cookies";

export const fetchRegistration = async ({ password, email }: any) => {
  const model = {
    password,
    email,
  };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      "/auth/register",
      model
    );

    if (status === 201) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchLogin = async ({ email, password }: any) => {
  const model = {
    email,
    password,
  };

  try {
    const { data, status }: AxiosResponse<any> = await Axios.post(
      "/auth/login",
      model
    );

    if (status === 201) {
      setCookie({
        name: "token",
        value: data,
        days: 365,
      });
      return fetchIsValidToken(data);
    }
  } catch (error) {
    // console.log(error);
  }
};

export const fetchIsValidToken = async (token: IToken) => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get(
      "/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};
