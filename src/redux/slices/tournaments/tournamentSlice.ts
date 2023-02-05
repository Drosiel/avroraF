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
    addTournamentForData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteTournament: (state, action) => {
      state.data = state.data.filter((item) => action.payload !== item.id);
    },
  },
});

export const { addTournamentData, addTournamentForData, deleteTournament } =
  tournamentSlice.actions;

export default tournamentSlice.reducer;
