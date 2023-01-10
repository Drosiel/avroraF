import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  email: string | null;
  id: string;
  lastLoginAt: string | null;
  logo: null;
  name: string | null;
  password: string | null;
  rating: number | null;
  teams: [] | null;
}

export interface UserState {
  data: IUser;
  value: number;
}

const initialState: UserState = {
  data: {
    email: null,
    id: "",
    lastLoginAt: null,
    logo: null,
    name: null,
    password: null,
    rating: null,
    teams: [],
  },
  value: 0,
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
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { addUserData, increment } = userSlice.actions;

export default userSlice.reducer;
