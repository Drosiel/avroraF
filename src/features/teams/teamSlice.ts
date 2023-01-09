import { createSlice } from "@reduxjs/toolkit";

export interface IDataTeam {
  id: string;
  name: string;
  rating: number;
  logo: string;
  creatorId: string;
  structure: string;
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
