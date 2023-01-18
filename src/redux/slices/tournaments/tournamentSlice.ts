import { createSlice } from "@reduxjs/toolkit";
import { ITournament } from "../../../features/tournament/lib/constant";

export interface TournamentState {
  data: ITournament[];
}

const initialState: TournamentState = {
  data: [],
};

export const tournamentSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    addTournamentData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addTournamentData } = tournamentSlice.actions;

export default tournamentSlice.reducer;
