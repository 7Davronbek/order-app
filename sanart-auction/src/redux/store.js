import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import { testApi } from "./testApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});

setupListeners(store.dispatch)