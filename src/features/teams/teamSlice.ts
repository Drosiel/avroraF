import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../user/userSlice";

export interface IDataTeam {
  id: string;
  name: string;
  rating: number;
  logo: string;
  creatorId: string;
  members: IUser[] | null;
  stats: string;
}

export interface TeamState {
  data: IDataTeam[];
}

const initialState: TeamState = {
  data: [],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeamData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addTeamData } = teamSlice.actions;

export default teamSlice.reducer;
