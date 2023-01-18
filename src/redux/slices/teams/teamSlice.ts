import { createSlice } from "@reduxjs/toolkit";
import { ITeam } from "../../../features/team/lib/constant";

export interface TeamState {
  data: ITeam[];
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
