import { createSlice } from "@reduxjs/toolkit";
import { IUser, IRole, ROLE } from "../../../features/user/lib/constant";

export interface UserState {
  data: IUser;
}

const initialState: UserState = {
  data: {
    email: null,
    id: "",
    lastLoginAt: null,
    logo: null,
    name: null,
    rating: null,
    teams: [],
    roles: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    },
  },
});

export const { addUserData } = userSlice.actions;

export default userSlice.reducer;
