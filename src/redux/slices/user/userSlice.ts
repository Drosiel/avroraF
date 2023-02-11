import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../features/user/lib/constant";
import { deleteCookie } from "../../../services/cookies";

export interface UserState {
  data: IUser;
}

const initialState: UserState = {
  data: {
    id: "",
    logo: null,
    logoURL: null,
    name: null,
    rating: null,
    roles: [],
    teams: [],
    teamsCreator: [],
    notifications: [],
    friends: [],
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
    addTeamForUser: (state, action) => {
      state.data.teamsCreator = [
        ...state.data.teamsCreator,
        { ...action.payload },
      ];
    },
    deleteTeamForUser: (state, action) => {
      state.data.teamsCreator = state.data.teamsCreator.filter(
        (item) => action.payload !== item.id
      );
    },

    logout: (state) => {
      state.data = initialState.data;
      deleteCookie("token");
    },
  },
});

export const { addUserData, addTeamForUser, deleteTeamForUser, logout } =
  userSlice.actions;

export default userSlice.reducer;
