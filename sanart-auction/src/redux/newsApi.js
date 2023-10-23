import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { PORT } from "../constants";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: PORT }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => `/ru/contents/v1/news/`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
