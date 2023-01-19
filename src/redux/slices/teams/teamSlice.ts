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
    deleteTeam: (state, action) => {
      const { id } = action.payload;

      state.data.splice(
        0,
        state.data.length,
        ...state.data.filter((team) => team.id !== id)
      );
    },
  },
});

export const { addTeamData } = teamSlice.actions;

export default teamSlice.reducer;
