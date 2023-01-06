import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  data: {
    email: string | null;
    id: string | null;
    lastLoginAt: string | null;
    logo: null;
    name: null;
    password: string | null;
    rating: number | null;
    team: string | null;
  };
  value: number;
}

const initialState: UserState = {
  data: {
    email: null,
    id: null,
    lastLoginAt: null,
    logo: null,
    name: null,
    password: null,
    rating: null,
    team: null,
  },
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state.data = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { addUserData, increment } = userSlice.actions;

export default userSlice.reducer;
