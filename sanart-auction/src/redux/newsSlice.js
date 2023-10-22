import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL News
const getNews = createAsyncThunk(`news/getAllNews`, async () => {
  const { data } = await axios.get("/news");
  return data;
});


const initialState = {
  news: [],
  newsIsLoding: false,
  newsError: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL JOURNALS
    builder.addCase(getNews.pending, (state) => {
      state.newsIsLoding = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.newsIsLoding = false;
      state.news = action.payload.results;
    }),
      builder.addCase(getNews.rejected, (state) => {
        state.newsIsLoding = false;
      });
  },
});

export const newsAction = {
  ...newsSlice.actions,
  getNews,
};

export default newsSlice.reducer;
