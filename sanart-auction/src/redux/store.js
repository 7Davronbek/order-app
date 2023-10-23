import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { catalogApi } from "./catalogApi";
import { contactApi } from "./contactApi";
import { newsApi } from "./newsApi";
import { auctionApi } from "./auctionApi";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [auctionApi.reducerPath]: auctionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(catalogApi.middleware)
      .concat(contactApi.middleware)
      .concat(newsApi.middleware)
      .concat(auctionApi.middleware),
});

setupListeners(store.dispatch);
