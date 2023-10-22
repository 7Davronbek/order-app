import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
});
