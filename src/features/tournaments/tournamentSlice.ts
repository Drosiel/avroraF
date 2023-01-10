import { createSlice } from "@reduxjs/toolkit";

export interface IDataTournament {
  bracket: string | null;
  countTeam: number;
  dateTournamentEnd: string;
  dateTournamentStart: string;
  id: string;
  image: string | null;
  maxTeam: number;
  name: string;
  prize: number;
  typeTournament: string;
}

export interface TournamentState {
  data: IDataTournament[];
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
