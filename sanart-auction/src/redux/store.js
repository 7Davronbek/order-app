import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { catalogApi } from "./catalogApi";
import { contactApi } from "./contactApi";
import { newsApi } from "./newsApi";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(catalogApi.middleware)
      .concat(contactApi.middleware)
      .concat(newsApi.middleware),
});

setupListeners(store.dispatch);
