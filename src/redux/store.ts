import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "./slices/teams/teamSlice";
import tournamentSlice from "./slices/tournaments/tournamentSlice";
import userSlice from "./slices/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    tournament: tournamentSlice,
    team: teamSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
