import { createSlice } from "@reduxjs/toolkit";
import { IUser, IRole, ROLE } from "../../../features/user/lib/constant";
import { deleteCookie } from "../../../services/cookies";

export interface UserState {
  data: IUser;
}

const initialState: UserState = {
  data: {
    id: "",
    logo: null,
    name: null,
    rating: null,
    roles: [],
    teams: [],
    teamsCreator: [],
    notifications: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      if (action.payload) {
        state.data = { ...action.payload };
      }
    },
    logout: (state) => {
      state.data = initialState.data;
      deleteCookie("token");
    },
  },
});

export const { addUserData, logout } = userSlice.actions;

export default userSlice.reducer;
