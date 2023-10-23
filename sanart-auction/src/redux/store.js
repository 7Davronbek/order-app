import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { catalogApi } from "./catalogApi";
import { contactApi } from "./contactApi";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(catalogApi.middleware)
      .concat(contactApi.middleware),
});

setupListeners(store.dispatch);
