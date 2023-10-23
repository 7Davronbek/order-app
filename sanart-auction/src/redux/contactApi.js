import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { PORT } from "../constants";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: PORT }),
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => `/ru/contents/v1/contact/`,
    }),
  }),
});

export const { useGetContactQuery } = contactApi;
