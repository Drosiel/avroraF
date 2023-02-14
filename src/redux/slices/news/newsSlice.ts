import { createSlice } from "@reduxjs/toolkit";
import { INews } from "../../../features/news/lib/constant";

export interface NewsState {
  data: INews[];
}

const initialState: NewsState = {
  data: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

// export const {} = newsSlice.actions;

export default newsSlice.reducer;
