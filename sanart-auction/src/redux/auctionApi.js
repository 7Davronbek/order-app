import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { PORT } from "../constants";

export const auctionApi = createApi({
  reducerPath: "auctionApi",
  baseQuery: fetchBaseQuery({ baseUrl: PORT }),
  endpoints: (builder) => ({
    getAuctions: builder.query({
      query: () => `/ru/main/v1/property/`,
    }),
    getAuction: builder.query({
      query: (id) => `/ru/main/v1/property/${id}`,
    }),
  }),
});

export const { useGetAuctionsQuery, useGetAuctionQuery } = auctionApi;
